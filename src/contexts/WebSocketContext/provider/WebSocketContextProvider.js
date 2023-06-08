import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import WebSocketContext from '../context/WebSocketContext';
import {
    defaultUserDataValue,
    eventsConfig,
    routesConfig,
    webSocketConfig,
} from '../../../utils/configs';
import { NOTIFICATION_CLOSE_TIMEOUT } from '../../../utils/constants';

export function WebSocketContextProvider({ children }) {
    const [isAuthorized, setAuthorizationState] = useState(false);

    const [userData, setUserData] = useState(defaultUserDataValue);

    const [newMessages, setNewMessages] = useState([]);

    const [autocompleteHint, setAutocompleteHint] = useState([]);

    const [isError, setIsError] = useState(false);

    const webSocketRef = useRef();

    const navigate = useNavigate();

    const saveUserData = useCallback(
        (data) => {
            setUserData(data);
            setAuthorizationState(true);
            navigate(routesConfig.main);
        },
        [navigate]
    );

    function checkIsUnique(arr, id) {
        return arr?.every((elem) => elem.id !== id);
    }

    const saveMessage = useCallback((data) => {
        setUserData((cur) => ({
            ...cur,
            messages: checkIsUnique(cur?.messages, data.id)
                ? [data, ...cur.messages]
                : cur.messages,
        }));
    }, []);

    const handleNewMessage = useCallback(
        (data) => {
            saveMessage(data);
            setNewMessages((cur) =>
                checkIsUnique(cur, data.id) ? [data, ...cur] : cur
            );
            setTimeout(
                () =>
                    setNewMessages((cur) =>
                        cur.filter((msg) => msg.id !== data.id)
                    ),
                NOTIFICATION_CLOSE_TIMEOUT
            );
        },
        [saveMessage]
    );

    const emitEvent = useCallback((event, data) => {
        webSocketRef.current.emit(event, data);
    }, []);

    const setEventListeners = useCallback(() => {
        webSocketRef.current.on(eventsConfig.authorization, saveUserData);
        webSocketRef.current.on(eventsConfig.sendMessage, saveMessage);
        webSocketRef.current.on(eventsConfig.incomingMessage, handleNewMessage);
        webSocketRef.current.on(eventsConfig.autocomplete, (data) =>
            setAutocompleteHint(data)
        );
        webSocketRef.current.on(eventsConfig.error, () => setIsError(true));
    }, [handleNewMessage, saveMessage, saveUserData]);

    function signOut() {
        emitEvent(eventsConfig.signOut, userData.user);
        setAuthorizationState(false);
        setUserData(defaultUserDataValue);
        setNewMessages([]);
    }

    useEffect(() => {
        webSocketRef.current = io(webSocketConfig.url, webSocketConfig.options);
        setEventListeners();
        setIsError(false);
        emitEvent(eventsConfig.autocomplete);
    }, [setEventListeners, emitEvent]);

    return (
        <WebSocketContext.Provider
            value={{
                isAuthorized,
                isError,
                userData,
                newMessages,
                autocompleteHint,
                emitEvent,
                signOut,
            }}
        >
            {children}
        </WebSocketContext.Provider>
    );
}
