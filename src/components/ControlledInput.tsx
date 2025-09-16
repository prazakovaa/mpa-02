import {useState} from "react";

type ControlledInputProps = {
    label: string;
    defaultValue: string;
    onChange: (value: string) => void;
}

const ControlledInput: React.FC<ControlledInputProps> = ({label, defaultValue, onCHange}) => {
    const [value, setValue] = useState<string>(defaultValue);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

    }
    return (
        <div>
            <label>Vstup</label>
        <input type="text" value={value} onChange={handleChange}/>
        </div>
    )
}

export default ControlledInput;