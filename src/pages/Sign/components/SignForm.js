import { Form, Button, Stack } from 'react-bootstrap';
import FormInput from './FormInput';

function SignForm({ handleChange, inputsValue = {}, handleSubmit }) {
    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <FormInput
                    handleChange={handleChange}
                    value={inputsValue.name}
                />
                <Button
                    variant="success"
                    type="submit"
                    size="lg"
                    className="mt-2 col-md-4 offset-md-4"
                >
                    Enter
                </Button>
            </Stack>
        </Form>
    );
}

export default SignForm;
