import { ListGroup } from 'react-bootstrap';
import { useModalContext } from '../../../contexts/ModalContext';
import MessageCard from './MessageCard';

function MessagesList({ place, messages = [] }) {
    const { openModal } = useModalContext();

    return (
        <ListGroup className="mx-1">
            {messages.map((msg) => (
                <ListGroup.Item
                    action
                    className="p-1 border-0 border-bottom border-light"
                    variant={place === 'inbox' ? 'primary' : 'success'}
                    onClick={openModal.bind(null, msg)}
                    key={`${place}:${msg.id}`}
                >
                    <MessageCard {...msg} place={place} />
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default MessagesList;
