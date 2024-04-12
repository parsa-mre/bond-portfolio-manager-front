import React from "react";
import { Field, ErrorMessage } from "formik";

interface TextInputFieldProps {
    name: string;
    type: string;
    label: string;
    placeholder: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
    name,
    type,
    label,
    placeholder,
}) => {
    return (
        <div className="flex flex-col gap-2 mb-4">
            <label className="text-gray-700" htmlFor={name}>
                {label}
            </label>
            <Field
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type={type}
                name={name}
                placeholder={placeholder}
            />
            <ErrorMessage
                name={name}
                component="div"
                className="text-red-500 text-sm"
            />
        </div>
    );
};

export default TextInputField;
