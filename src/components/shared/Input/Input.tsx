import classnames from 'classnames';
import React, { forwardRef, useState } from 'react';
import { InputProps } from './Input.types';
import styles from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
    const { className, icon, iconPlacement, ...inputProps } = props;

    const [inputFocused, setInputFocused] = useState(false);

    const leftIcon = icon && iconPlacement === 'left' && React.cloneElement(icon, { className: styles.icon });
    const rightIcon = icon && iconPlacement === 'right' && React.cloneElement(icon, { className: styles.icon });

    return (
        <div
            className={classnames(styles.inputContainer, className, {
                focused: inputFocused,
            })}
            onFocusCapture={() => setInputFocused(true)}
            onBlurCapture={() => setInputFocused(false)}
        >
            {leftIcon}
            <input {...inputProps} className={styles.input} ref={ref} />
            {rightIcon}
        </div>
    );
});
