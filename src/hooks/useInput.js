import { useState, useRef, useEffect} from "react";

export function useInput(initialValue = '') {
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

     function onChange(e) {
        setValue(e.target.value);
    }

    function clearValue() {
        setValue('');
    }
     
    return {value, onChange, inputRef, clearValue};
}