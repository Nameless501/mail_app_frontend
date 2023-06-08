import { Form, Button, Stack } from 'react-bootstrap';

function FormWrapper({ handleSubmit, disabled, buttonText, children }) {
    return (
        <Form
            className="mx-auto mt-3 px-4 py-4 bg-light rounded-1 col-md-10 col-xl-8"
            onSubmit={handleSubmit}
        >
            <Stack gap={4} className="my-1">
                {children}
                <Button
                    variant="success"
                    type="submit"
                    className="col-5 mx-auto"
                    disabled={disabled}
                >
                    {buttonText}
                </Button>
            </Stack>
        </Form>
    );
}

export default FormWrapper;
