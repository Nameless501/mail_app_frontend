import { Form } from 'react-bootstrap';

function FormInput({
    placeholder,
    id,
    name,
    value,
    handleChange,
    required,
    error,
    as,
    size,
}) {
    return (
        <Form.Control
            placeholder={placeholder}
            name={name}
            aria-describedby={id}
            value={value || ''}
            onChange={handleChange}
            required={required}
            isInvalid={!!error}
            isValid={value?.length > 0}
            as={as}
            size={size}
        />
    );
}

export default FormInput;
