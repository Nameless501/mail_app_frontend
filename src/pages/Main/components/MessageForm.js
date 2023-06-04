import { Form, InputGroup, Button, Row, Col, Stack } from 'react-bootstrap';

function MessageForm() {
    return (
        <Form className="mx-auto mt-3 px-4 py-4 bg-light rounded-1 col-md-10 col-xl-8">
            <Stack gap={4} className="my-1">
                <InputGroup as={Row} className="m-0">
                    <Col md={3} lg={2}>
                        <InputGroup.Text id="name-input">To:</InputGroup.Text>
                    </Col>
                    <Col>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            name="name"
                            aria-describedby="name-input"
                        />
                    </Col>
                </InputGroup>
                <InputGroup as={Row} className="m-0">
                    <Col md={3} lg={2} className="m-0">
                        <InputGroup.Text id="subject-input">
                            Subject:
                        </InputGroup.Text>
                    </Col>
                    <Col className="m-0">
                        <Form.Control
                            placeholder="Subject"
                            aria-label="Subject"
                            name="subject"
                            aria-describedby="subject-input"
                        />
                    </Col>
                </InputGroup>
                <Form.Group
                    as={Row}
                    className="m-0"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Col md={3} lg={2} className="m-0">
                        <InputGroup.Text id="message-input">
                            Message:
                        </InputGroup.Text>
                    </Col>
                    <Col>
                        <Form.Control
                            size="lg"
                            as="textarea"
                            rows={3}
                            name="message"
                            aria-describedby="message-input"
                        />
                    </Col>
                </Form.Group>
                <Button variant="success" className="col-5 mx-auto">
                    Send
                </Button>
            </Stack>
        </Form>
    );
}

export default MessageForm;
