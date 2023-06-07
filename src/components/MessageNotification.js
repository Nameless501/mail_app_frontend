import { ToastContainer, Toast } from 'react-bootstrap';
import { useAuthorizationContext } from '../contexts/AuthorizationContext';

function MessageNotification() {
    const { newMessages } = useAuthorizationContext();

    return (
        <ToastContainer
            position="bottom-end"
            className="px-3 py-4 position-fixed"
        >
            {newMessages.map((msg) => (
                <Toast key={`toast:${msg.id}`}>
                    <Toast.Header>
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
