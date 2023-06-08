import { Container, Stack } from 'react-bootstrap';
import { useWebSocketContext } from '../../contexts/WebSocketContext';
import useFormStateAndValidation from '../../hooks/useFormStateAndValidation';
import DefaultErrorAlert from '../../components/DefaultErrorAlert';
import FormFromConfig from "../../components/FormFromConfig";
import {defaultSignValues, eventsConfig, signInFormConfig} from '../../utils/configs';

function Sign() {
    const { emitEvent, autocompleteHint, isError } = useWebSocketContext();

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
            <h2 className="text-center h1">Hello</h2>
            <Container className="col-10">
                <FormFromConfig
                    handleSubmit={handleSubmit}
                    inputsValue={inputsValue}
                    setAutocomplete={setAutocomplete}
                    handleChange={handleChange}
                    isValid={formIsValid}
                    errorMessages={errorMessages}
                    options={autocompleteHint}
                    config={signInFormConfig}
                />
            </Container>
            {isError && <DefaultErrorAlert />}
        </Stack>
    );
}

export default Sign;
