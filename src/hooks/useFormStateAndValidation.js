import { useCallback, useState, useEffect, useRef } from 'react';
import { VALIDATION_ERROR_MESSAGE } from '../utils/constants';

function useFormStateAndValidation(initialValue = {}) {
    const [inputsValue, setInputsValues] = useState(initialValue);

    const [errorMessages, setErrorMessages] = useState({});

    const [formIsValid, setFormValidity] = useState(false);

    const clearAutocompleteRef = useRef(null);

    function handleErrorMessage(name, message) {
        setErrorMessages((current) => ({
            ...current,
            [name]: message,
        }));
    }

    function checkInputValidity(name, validationMessage) {
        const message = validationMessage ? VALIDATION_ERROR_MESSAGE : '';
        handleErrorMessage(name, message);
    }

    function checkFormValidity(input) {
        setFormValidity(input.closest('form').checkValidity());
    }

    function saveInputValue(name, value) {
        setInputsValues((cur) => ({
            ...cur,
            [name]: value,
        }));
    }

    function handleInputControl(name, value, input, validationMessage) {
        saveInputValue(name, value);
        checkInputValidity(name, validationMessage);
        checkFormValidity(input);
    }

    function handleChange(evt) {
        const { name, value, validationMessage } = evt.target;
        handleInputControl(name, value, evt.target, validationMessage);
    }

    function setAutocomplete(value, input, clearAutocomplete) {
        clearAutocompleteRef.current = clearAutocomplete;
        const { name, validationMessage } = input;
        handleInputControl(name, value, input, validationMessage);
    }

    const resetFormValues = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setInputsValues(newValues);
            setErrorMessages(newErrors);
            setFormValidity(newIsValid);
            if (clearAutocompleteRef.current) clearAutocompleteRef.current();
        },
        [setInputsValues, setErrorMessages, setFormValidity]
    );

    useEffect(() => {
        resetFormValues();
    }, [resetFormValues]);

    return {
        inputsValue,
        errorMessages,
        formIsValid,
        handleChange,
        setAutocomplete,
        resetFormValues,
    };
}

export default useFormStateAndValidation;
