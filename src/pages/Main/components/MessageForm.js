import { Form, InputGroup, Button, Row, Col, Stack } from 'react-bootstrap';

function MessageForm({ inputsValue, handleChange, handleSubmit }) {
    return (
        <Form
            className="mx-auto mt-3 px-4 py-4 bg-light rounded-1 col-md-10 col-xl-8"
            onSubmit={handleSubmit}
        >
            <Stack gap={4} className="my-1">
                <InputGroup as={Row} className="m-0">
                    <Col md={3} lg={2}>
                        <InputGroup.Text id="name-input">To:</InputGroup.Text>
                    </Col>
                    <Col>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            name="to"
                            aria-describedby="name-input"
                            value={inputsValue.to || ''}
                            onChange={handleChange}
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
                            value={inputsValue.subject || ''}
                            onChange={handleChange}
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
                            value={inputsValue.message || ''}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>
                <Button
                    variant="success"
                    type="submit"
                    className="col-5 mx-auto"
                >
                    Send
                </Button>
            </Stack>
        </Form>
    );
}

export default MessageForm;
