import { useRef } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

function FormInputAutocomplete({
    placeholder,
    id,
    name,
    value,
    setAutocomplete,
    handleChange,
    required,
    error,
    size,
    options,
}) {
    const typeaheadRef = useRef();

    return (
        <Typeahead
            onChange={(value) =>
                setAutocomplete(
                    value[0],
                    typeaheadRef.current.getInput(),
                    typeaheadRef.current.clear
                )
            }
            onInputChange={(_, evt) => handleChange(evt)}
            value={value}
            id={id}
            options={options}
            allowNew={true}
            caseSensitive={true}
            size={size}
            placeholder={placeholder}
            isInvalid={!!error}
            isValid={value?.length > 0}
            inputProps={{
                name,
                required,
                value,
            }}
            ref={typeaheadRef}
        />
    );
}

export default FormInputAutocomplete;
