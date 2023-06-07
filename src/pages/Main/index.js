import { useState } from 'react';
import { Container, Tab, Row, Stack } from 'react-bootstrap';
import useFormStateAndValidation from '../../hooks/useFormStateAndValidation';
import { useAuthorizationContext } from '../../contexts/AuthorizationContext';
import NavLinks from './components/NavLinks';
import MessagesList from './components/MessagesList';
import MessageForm from './components/MessageForm';
import MessageModal from './components/MessageModal';
import {
    navTabsConfig,
    tabPanesConfig,
    defaultMessageValues,
    eventsConfig,
} from '../../utils/configs';

function Main() {
    const [activeTab, setActiveTab] = useState(navTabsConfig.default);

    const { inputsValue, handleChange, resetFormValues } =
        useFormStateAndValidation(defaultMessageValues);

    const { userData, emitEvent } = useAuthorizationContext();

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
                        <Tab.Content className="p-0">
                            <Tab.Pane eventKey={tabPanesConfig.inbox}>
                                <MessagesList
                                    place={'inbox'}
                                    messages={filterUserMessages('to')}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey={tabPanesConfig.sent}>
                                <MessagesList
                                    place={'sent'}
                                    messages={filterUserMessages('from')}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey={tabPanesConfig.write}>
                                <MessageForm
                                    inputsValue={inputsValue}
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Stack>
            </Tab.Container>
            <MessageModal />
        </Container>
    );
}

export default Main;
