import { Container, Stack } from 'react-bootstrap';
import { useAuthorizationContext } from '../../contexts/AuthorizationContext';
import useFormStateAndValidation from '../../hooks/useFormStateAndValidation';
import SignForm from './components/SignForm';
import { defaultSignValues, eventsConfig } from '../../utils/configs';

function Sign() {
    const { emitEvent } = useAuthorizationContext();

    const { inputsValue, handleChange } =
        useFormStateAndValidation(defaultSignValues);

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
                    handleChange={handleChange}
                />
            </Container>
        </Stack>
    );
}

export default Sign;
