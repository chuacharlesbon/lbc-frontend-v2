import React, { FC } from 'react';
import { Div, Divider, FlexRow, Spacer } from '../../core/Containers';
import { Text } from '../../core/Text';
import { FaCaretDown } from 'react-icons/fa';
import { classNames } from '../../helpers/ClassNames';

interface DataProps {
    disabled?: boolean;
    className?: string;
    props?: any;
    name?: string;
    type: string;
    placeholder?: string;
    validation?: boolean;
    errorLabel?: string;
    onChange?: any;
    value?: any;
    containerClass?: string;
    pattern?: string;
    maxlength?: number;
    inputmode?: string;
    onWheel?: string;
    onSubmit: any;
}

export const ColumnHeaderSearch: FC<DataProps> = ({
    className,
    disabled,
    type,
    placeholder,
    props,
    validation,
    onChange,
    value,
    name,
    containerClass,
    maxlength,
    inputmode,
    onWheel,
    onSubmit
}) => {

    const onChangeInput = (event: any) => {
        if (type === 'file') {
            onChange(event.target.files);
        } else if (maxlength) {
            if (maxlength >= event.target.value?.length) {
                onChange(event.target.value);
            }
        } else {
            onChange(event.target.value);
        }
    };

    const onFormSubmit = (e: any)  => {
        onSubmit();
    }

    return (
        <>
            <form className="w-full" onSubmit={e => onFormSubmit(e)}>
                <div className={`${containerClass}`}>
                    <input
                        className={classNames(
                            `border ${validation ? 'border-red-100' : 'border-primary-100'
                            } rounded-lg block w-full`,
                            className,
                        )}
                        disabled={disabled || false}
                        id={name}
                        inputMode={inputmode}
                        name={name}
                        onChange={(event) => onChangeInput(event)}
                        onWheel={onWheel === '' ? '' : (e: any) => e.target.blur()}
                        placeholder={placeholder}
                        type={type || 'auto'}
                        value={value}
                        {...props}
                    />
                </div>
                <button className="hidden" type='submit'>
                    Log In
                </button>
            </form>
        </>
    )
}