import type {SetStateAction} from "react";
import {useState} from "react";
import classNames from "@/util/Classnames.ts";

interface IInputProps {
    value: string;
    setValue: React.Dispatch<SetStateAction<string>>
    type: "text" | "email" | "password";
    placeholder?: string;
    obliged?: boolean;

}

const Input: React.FC<IInputProps> = ({ value, setValue, type, placeholder, obliged = false }) => {
    const [isActive, setIsActive] = useState(false);
    const isFloating = isActive || value.length > 0;

    return (
        <div className="relative min-w-full py-2.5 px-3 h-12 flex items-center border border-neutral-400 rounded focus-within:ring-2 ring-indigo-500">
            <label
                htmlFor={placeholder}
                className={classNames(
                    "absolute text-sm bg-white cursor-pointer px-1.5 transition-all",
                    isFloating ? "left-2.5 -top-3 text-indigo-500 text-sm" : "top-3 left-3 text-neutral-500"
                )}
            >
                {placeholder}{obliged && "*"}
            </label>
            <input
                id={placeholder}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                className="outline-none relative z-10 bg-transparent w-full text-sm"
            />
        </div>)
}

Input.displayName = "Input";
export default Input;