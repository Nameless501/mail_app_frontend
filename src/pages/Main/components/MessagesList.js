import { ListGroup } from 'react-bootstrap';
import MessageCard from './MessageCard';

function MessagesList({ variant }) {
    return (
        <ListGroup className="mx-1">
            <ListGroup.Item
                action
                className="p-1 border-0 border-bottom border-light"
                variant={variant}
            >
                <MessageCard />
            </ListGroup.Item>
            <ListGroup.Item
                action
                className="p-1 border-0 border-bottom border-light"
                variant={variant}
            >
                <MessageCard />
            </ListGroup.Item>
            <ListGroup.Item
                action
                className="p-1 border-0 border-bottom border-light"
                variant={variant}
            >
                <MessageCard />
            </ListGroup.Item>
            <ListGroup.Item
                action
                className="p-1 border-0 border-bottom border-light"
                variant={variant}
            >
                <MessageCard />
            </ListGroup.Item>
            <ListGroup.Item
                action
                className="p-1 border-0 border-bottom border-light"
                variant={variant}
            >
                <MessageCard />
            </ListGroup.Item>
        </ListGroup>
    );
}

export default MessagesList;
