import styles from './Inputs.module.scss'
import {InputProps} from "./Input.props";
import {ForwardedRef, forwardRef} from "react";

export const Input = forwardRef(({className,error, ...props}:InputProps,ref: ForwardedRef<HTMLInputElement>):JSX.Element => {
    return (
        <div className={styles.inputWrapper}>
            <input ref={ref} className={styles.input} { ...props } />
            { error && <span className={ styles.errorMessage }>{ error.message }</span> }
        </div>
    )
})