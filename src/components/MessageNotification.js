import { ToastContainer, Toast } from 'react-bootstrap';
import { useWebSocketContext } from '../contexts/WebSocketContext';
import { useModalContext } from '../contexts/ModalContext';

function MessageNotification() {
    const { newMessages } = useWebSocketContext();

    const { openModal } = useModalContext();

    return (
        <ToastContainer
            position="bottom-end"
            className="px-3 py-4 position-fixed"
        >
            {newMessages.map((msg) => (
                <Toast
                    key={`toast:${msg.id}`}
                    bg="ligth"
                    onClick={() => openModal(msg)}
                >
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">{msg.from}</strong>
                        <small>now</small>
                    </Toast.Header>
                    <Toast.Body>{msg.subject}</Toast.Body>
                </Toast>
            ))}
        </ToastContainer>
    );
}

export default MessageNotification;
