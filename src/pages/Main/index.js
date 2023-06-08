import { useState } from 'react';
import { Container, Tab, Row, Stack } from 'react-bootstrap';
import useFormStateAndValidation from '../../hooks/useFormStateAndValidation';
import { useWebSocketContext } from '../../contexts/WebSocketContext';
import NavLinks from './components/NavLinks';
import MessageModal from './components/MessageModal';
import {
    navTabsConfig,
    tabPanesConfig,
    defaultMessageValues,
    eventsConfig, messageFormConfig,
} from '../../utils/configs';
import MessagesListTab from './components/MessagesListTab';
import WriteMessageTab from './components/WriteMessageTab';
import DefaultErrorAlert from '../../components/DefaultErrorAlert';

function Main() {
    const [activeTab, setActiveTab] = useState(navTabsConfig.default);

    const {
        inputsValue,
        errorMessages,
        formIsValid,
        handleChange,
        setAutocomplete,
        resetFormValues,
    } = useFormStateAndValidation(defaultMessageValues);

    const { userData, isError, autocompleteHint, emitEvent } =
        useWebSocketContext();

    const handleTabSelect = (eventKey) => setActiveTab(eventKey);

    function handleSubmit(evt) {
        evt.preventDefault();
        emitEvent(eventsConfig.sendMessage, {
            from: userData.user?.name,
            ...inputsValue,
        });
        resetFormValues(defaultMessageValues);
    }

    function filterUserMessages(type) {
        return userData.messages.filter(
            (msg) => msg[type] === userData.user.name
        );
    }

    return (
        <Container as="main">
            <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                <Stack gap={4}>
                    <Row>
                        <NavLinks activeTab={activeTab} />
                    </Row>
                    <Row>
                        {!isError ? (
                            <>
                                <Tab.Content className="p-0">
                                    <MessagesListTab
                                        eventKey={tabPanesConfig.inbox}
                                        variant="primary"
                                        messages={filterUserMessages('to')}
                                    />
                                    <MessagesListTab
                                        eventKey={tabPanesConfig.sent}
                                        variant="success"
                                        messages={filterUserMessages('from')}
                                    />
                                    <WriteMessageTab
                                        eventKey={tabPanesConfig.write}
                                        inputsValue={inputsValue}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                        setAutocomplete={setAutocomplete}
                                        errorMessages={errorMessages}
                                        isValid={formIsValid}
                                        options={autocompleteHint}
                                        messages={userData.messages}
                                        config={messageFormConfig}
                                    />
                                </Tab.Content>
                            </>
                        ) : (
                            <DefaultErrorAlert />
                        )}
                    </Row>
                </Stack>
            </Tab.Container>
            <MessageModal />
        </Container>
    );
}

export default Main;
