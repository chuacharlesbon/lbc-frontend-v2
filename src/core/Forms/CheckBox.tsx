import React, { FC } from 'react';

interface DataProps {
    className?: string;
    containerClass?: string;
    checked?: boolean;
    onClick?: any;
    id: string;
    name: string;
    label: any;
}

export const CheckBox: FC<DataProps> = ({
    className, containerClass, onClick, checked, id, name, label
}) => {

    return (
        <div className={`flex flex row items-center justify-start ${containerClass}`}>
            <input
                checked={checked}
                className={`w-4 h-4 mx-2 rounded border border-red-400 focus:ring-2 focus:ring-red-100 text-red-400 ${className}`}
                type="checkbox"
                onClick={onClick}
                id={id}
                name={name}
            />
            <label
                htmlFor={name}
            >
                {label}
            </label>
        </div>
    );
};