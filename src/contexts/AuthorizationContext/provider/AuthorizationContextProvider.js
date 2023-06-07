import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import AuthorizationContext from '../context/AuthorizationContext';
import {
    defaultUserDataValue,
    eventsConfig,
    routesConfig,
    webSocketConfig,
} from '../../../utils/configs';

export function AuthorizationContextProvider({ children }) {
    const [isAuthorized, setAuthorizationState] = useState(false);

    const [userData, setUserData] = useState(defaultUserDataValue);

    const [newMessages, setNewMessages] = useState([]);

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
                5000
            );
        },
        [saveMessage]
    );

    function emitEvent(event, data) {
        webSocketRef.current.emit(event, data);
    }

    const setEventListeners = useCallback(() => {
        webSocketRef.current.on(eventsConfig.authorized, saveUserData);
        webSocketRef.current.on(eventsConfig.messageSent, saveMessage);
        webSocketRef.current.on(eventsConfig.newMessage, handleNewMessage);
    }, [handleNewMessage, saveMessage, saveUserData]);

    const closeConnection = useCallback(() => {
        setAuthorizationState(false);
        setUserData(defaultUserDataValue);
        setNewMessages([]);
        // webSocketRef.current.close();
    }, []);

    useEffect(() => {
        webSocketRef.current = io(webSocketConfig.url, webSocketConfig.options);
        setEventListeners();
        return () => closeConnection();
    }, [setEventListeners, closeConnection]);

    return (
        <AuthorizationContext.Provider
            value={{
                isAuthorized,
                userData,
                newMessages,
                emitEvent,
                closeConnection,
            }}
        >
            {children}
        </AuthorizationContext.Provider>
    );
}
