import { Form } from 'react-bootstrap';

function FormInput({ value = '', handleChange }) {
    return (
        <Form.Group controlId="name-input">
            <Form.Label column="lg">Your name</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={value}
                onChange={handleChange}
                size="lg"
                required={true}
            />
        </Form.Group>
    );
}

export default FormInput;
