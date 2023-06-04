import { Container, Stack, Alert } from 'react-bootstrap';

function Sign() {
    return (
        <Stack gap={3}>
            <h2 className="text-center"></h2>
            <Container className="col-xs-10 col-md-8 col-lg-6 bg-light p-3">
                {/*<SignForm*/}
                {/*    inputs={signFormConfig.inputs[location.pathname]}*/}
                {/*    handleChange={handleChange}*/}
                {/*    inputsValue={inputsValue}*/}
                {/*    isValid={formIsValid}*/}
                {/*    errorMessages={errorMessages}*/}
                {/*    handleSubmit={handleSubmit}*/}
                {/*    isLoading={status === 'pending'}*/}
                {/*/>*/}
                {/*{status === 'rejected' && error && (*/}
                {/*    <Alert*/}
                {/*        variant="danger"*/}
                {/*        className="text-center p-2 mb-0 mt-2"*/}
                {/*    >*/}
                {/*        {error}*/}
                {/*    </Alert>*/}
                {/*)}*/}
            </Container>
        </Stack>
    );
}

export default Sign;
