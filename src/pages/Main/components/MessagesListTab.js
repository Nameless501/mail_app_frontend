import { Tab } from 'react-bootstrap';
import MessagesList from './MessagesList';

function MessagesListTab({ eventKey, messages, variant }) {
    return (
        <Tab.Pane eventKey={eventKey}>
            <MessagesList variant={variant} messages={messages} />
        </Tab.Pane>
    );
}

export default MessagesListTab;
