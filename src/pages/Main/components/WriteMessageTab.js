import { Stack, Tab } from 'react-bootstrap';
import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

function WriteMessageTab(props) {
    const previousMessages = props.messages.filter(
        (msg) =>
            msg.to === props.inputsValue.to || msg.from === props.inputsValue.to
    );

    return (
        <Tab.Pane eventKey={props.eventKey}>
            <Stack gap={4}>
                <MessageForm {...props} />
                {previousMessages.length > 0 && (
                    <Stack className="" gap={3}>
                        <h4 className="h4 text-center">Previous messages</h4>
                        <MessagesList
                            messages={previousMessages}
                            variant="secondary"
                        />
                    </Stack>
                )}
            </Stack>
        </Tab.Pane>
    );
}

export default WriteMessageTab;
