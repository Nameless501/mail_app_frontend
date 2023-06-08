import { ListGroup } from 'react-bootstrap';
import { useModalContext } from '../../../contexts/ModalContext';
import MessageCard from './MessageCard';

function MessagesList({ variant, messages = [] }) {
    const { openModal } = useModalContext();

    return (
        <ListGroup className="mx-1">
            {messages.map((msg) => (
                <ListGroup.Item
                    action
                    className="p-1 border-0 border-bottom border-light"
                    variant={variant}
                    onClick={openModal.bind(null, msg)}
                    key={msg.id}
                >
                    <MessageCard {...msg} />
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default MessagesList;
