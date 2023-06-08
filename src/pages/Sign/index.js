import { Container, Stack } from 'react-bootstrap';
import { useWebSocketContext } from '../../contexts/WebSocketContext';
import useFormStateAndValidation from '../../hooks/useFormStateAndValidation';
import SignForm from './components/SignForm';
import { defaultSignValues, eventsConfig } from '../../utils/configs';

function Sign() {
    const { emitEvent, autocompleteHint } = useWebSocketContext();

    const {
        inputsValue,
        formIsValid,
        errorMessages,
        setAutocomplete,
        handleChange,
    } = useFormStateAndValidation(defaultSignValues);

    function handleSubmit(evt) {
        evt.preventDefault();
        emitEvent(eventsConfig.authorization, inputsValue.name);
    }

    return (
        <Stack gap={3}>
            <h2 className="text-center">Hello</h2>
            <Container className="col-xs-10 col-md-8 col-lg-6 bg-light p-3">
                <SignForm
                    handleSubmit={handleSubmit}
                    inputsValue={inputsValue}
                    setAutocomplete={setAutocomplete}
                    handleChange={handleChange}
                    isValid={formIsValid}
                    errors={errorMessages}
                    options={autocompleteHint}
                />
            </Container>
        </Stack>
    );
}

export default Sign;
