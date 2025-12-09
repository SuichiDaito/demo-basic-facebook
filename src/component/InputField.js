import  { useInput }  from "../hooks/useInput";

export default function InputField({value, onChange, inputRef, placeholder}) {

    return (
        <div>
            <input 
            ref={inputRef}
            value={value} type="text" 
            onChange={(e) => onChange(e)} 
            placeholder= {placeholder}></input>
        </div>
    );
}
