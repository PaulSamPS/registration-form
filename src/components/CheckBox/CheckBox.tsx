import styles from './CheckBox.module.scss'
import {useState} from "react";
import cn from 'classnames'

export const CheckBox = ():JSX.Element => {
    const [active,setActive] = useState<boolean>(false)

    const handleActive = () => {
        setActive(!active)
    }

    return (
        <div className={styles.wrapper}>
            <div onClick={handleActive} className={cn(styles.checkBox, {
                [styles.active]: active
            })}>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="#0880AE" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6343 0.634339C14.9467 0.32192 15.4533 0.32192 15.7657 0.634339C16.0781 0.946758 16.0781 1.45329 15.7657 1.76571L6.16569 11.3657C5.85327 11.6781 5.34673 11.6781 5.03432 11.3657L1.03431 7.36571C0.721895 7.05329 0.721895 6.54676 1.03431 6.23434C1.34673 5.92192 1.85327 5.92192 2.16569 6.23434L5.6 9.66865L14.6343 0.634339Z"/>
                </svg>

            </div>
            <span className={styles.conditions}>Принимаю <span>условия</span> использования</span>
        </div>
    )
}