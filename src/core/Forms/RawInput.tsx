import React, { FC } from 'react';
import { classNames } from '../../helpers/ClassNames';

interface RawInputProps {
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
}

export const RawInput: FC<RawInputProps> = ({
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

  return (
    <div className={`${containerClass}`}>
      <input
        className={classNames(
          `border ${
            validation ? 'border-red-100' : 'border-primary-100'
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
        required
        type={type || 'auto'}
        value={value}
        {...props}
      />
    </div>
  );
};