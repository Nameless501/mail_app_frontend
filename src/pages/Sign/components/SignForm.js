import { Form, Button, Stack } from 'react-bootstrap';
import InputGroupWrapper from '../../../components/InputGroupWrapper';
import FormInputAutocomplete from '../../../components/FormInputAutocomplete';
import { signInFormConfig } from '../../../utils/configs';

function SignForm({
    setAutocomplete,
    handleChange,
    inputsValue = {},
    isValid,
    errors,
    handleSubmit,
    options,
}) {
    return (
        <Form onSubmit={handleSubmit} className="py-3 rounded">
            <Stack gap={4}>
                <InputGroupWrapper {...signInFormConfig} error={errors.name}>
                    <FormInputAutocomplete
                        setAutocomplete={setAutocomplete}
                        handleChange={handleChange}
                        value={inputsValue.name}
                        error={errors.name}
                        {...signInFormConfig}
                        options={options}
                    />
                </InputGroupWrapper>
                <Button
                    variant="success"
                    type="submit"
                    size="lg"
                    className="mt-2 col-md-4 offset-md-4"
                    disabled={!isValid}
                >
                    Enter
                </Button>
            </Stack>
        </Form>
    );
}

export default SignForm;
