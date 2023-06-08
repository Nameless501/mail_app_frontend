import FormInput from './FormInput';
import InputGroupWrapper from './InputGroupWrapper';
import FormInputAutocomplete from './FormInputAutocomplete';
import FormWrapper from './FormWrapper';

function MessageForm({
    inputsValue,
    errorMessages,
    isValid,
    handleChange,
    setAutocomplete,
    handleSubmit,
    options,
    config,
}) {
    return (
        <FormWrapper
            handleSubmit={handleSubmit}
            disabled={!isValid}
            buttonText={config.button}
        >
            {config.inputs.map((input) => (
                <InputGroupWrapper key={input.name} {...input}>
                    {input.autocomplete ? (
                        <FormInputAutocomplete
                            {...input}
                            handleChange={handleChange}
                            setAutocomplete={setAutocomplete}
                            value={inputsValue[input.name]}
                            error={errorMessages?.[input.name]}
                            options={options}
                        />
                    ) : (
                        <FormInput
                            {...input}
                            handleChange={handleChange}
                            value={inputsValue[input.name]}
                            error={errorMessages?.[input.name]}
                        />
                    )}
                </InputGroupWrapper>
            ))}
        </FormWrapper>
    );
}

export default MessageForm;
