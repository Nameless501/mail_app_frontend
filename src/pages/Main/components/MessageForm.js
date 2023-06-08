import { Form, Button, Stack } from 'react-bootstrap';
import FormInput from '../../../components/FormInput';
import InputGroupWrapper from '../../../components/InputGroupWrapper';
import { messageFormConfig } from '../../../utils/configs';
import FormInputAutocomplete from '../../../components/FormInputAutocomplete';

function MessageForm({
    inputsValue,
    errorMessages,
    isValid,
    handleChange,
    setAutocomplete,
    handleSubmit,
    options,
}) {
    return (
        <Form
            className="mx-auto mt-3 px-4 py-4 bg-light rounded-1 col-md-10 col-xl-8"
            onSubmit={handleSubmit}
        >
            <Stack gap={4} className="my-1">
                {messageFormConfig.map((input) => (
                    <InputGroupWrapper key={input.name} {...input}>
                        {input.autocomplete ? (
                            <FormInputAutocomplete
                                {...input}
                                handleChange={handleChange}
                                setAutocomplete={setAutocomplete}
                                value={inputsValue[input.name]}
                                error={errorMessages[input.name]}
                                options={options}
                            />
                        ) : (
                            <FormInput
                                {...input}
                                handleChange={handleChange}
                                value={inputsValue[input.name]}
                                error={errorMessages[input.name]}
                            />
                        )}
                    </InputGroupWrapper>
                ))}
                <Button
                    variant="success"
                    type="submit"
                    className="col-5 mx-auto"
                    disabled={!isValid}
                >
                    Send
                </Button>
            </Stack>
        </Form>
    );
}

export default MessageForm;
