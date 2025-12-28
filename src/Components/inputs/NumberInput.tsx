import type { NumberType } from "../../types";

type NumberInputProps = {
    disabled?: boolean;
    onValueChange: (value: number) => void;
    min?: number;
    type: NumberType;
    value: number;
};

const NumberInput = ({ value, disabled = false, type = "int", min = 0, onValueChange }: NumberInputProps) => {
    return (
        <input
            type="number"
            disabled={disabled}
            min={min}
            value={value}
            onChange={(event) => onValueChange(parseFloat(event.target.value))}
            step={type === "float" ? 0.1 : 1}
            max={type === "percent" ? 100 : undefined}
            className="bg-neutral-50 rounded-md h-10 p-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
    );
};

export default NumberInput;
