import { Form, Button, Stack, Spinner } from 'react-bootstrap';
import FormInput from './FormInput';

function SignForm({
    inputs = [],
    handleChange,
    inputsValue = {},
    isValid = false,
    errorMessages,
    handleSubmit,
    isLoading,
}) {
    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <FormInput />
                <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    disabled={!isValid}
                    className="mt-2 col-md-4 offset-md-4"
                >
                    {isLoading ? (
                        <Spinner animation="border" size="sm" role="status" />
                    ) : (
                        'Submit'
                    )}
                </Button>
            </Stack>
        </Form>
    );
}

export default SignForm;
