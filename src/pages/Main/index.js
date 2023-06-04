import { useState } from 'react';
import { Container, Tab, Row, Stack } from 'react-bootstrap';
import NavLinks from './components/NavLinks';
import MessagesList from './components/MessagesList';
import MessageForm from './components/MessageForm';
import { navTabsConfig, tabPanesConfig } from '../../utils/configs';

function Main() {
    const [activeTab, setActiveTab] = useState(navTabsConfig.default);

    const handleTabSelect = (eventKey) => setActiveTab(eventKey);

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
                                <MessagesList variant={'primary'} />
                            </Tab.Pane>
                            <Tab.Pane eventKey={tabPanesConfig.sent}>
                                <MessagesList variant={'success'} />
                            </Tab.Pane>
                            <Tab.Pane eventKey={tabPanesConfig.write}>
                                <MessageForm />
                            </Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Stack>
            </Tab.Container>
        </Container>
    );
}

export default Main;
