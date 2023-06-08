import { InputGroup, Row, Col, Alert, Container } from 'react-bootstrap';

function InputGroupWrapper({ label, error, id, children }) {
    return (
        <Container className="p-0">
            <InputGroup as={Row} className="m-0">
                <Col md={3} className="my-auto">
                    <InputGroup.Text id={id}>{label}</InputGroup.Text>
                </Col>
                <Col>{children}</Col>
            </InputGroup>
            {error && (
                <Row className="mt-2 px-4 px-md-2 col-md-9 offset-md-3">
                    <Alert variant="danger" className="py-2 text-center">
                        {error}
                    </Alert>
                </Row>
            )}
        </Container>
    );
}

export default InputGroupWrapper;
