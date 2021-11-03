import {Button, DropDown, Header, Input, WhiteBlock} from "../components";
import {useState} from "react";
import {useForm} from "react-hook-form";
import styles from './Form.module.scss'
import cn from "classnames";


export interface IForm {
    name: string
    email: string
    phone: string
}

export const Form = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<IForm>()
    const onSubmit = (data: IForm) => console.log(data);
    const [value,setValue] = useState<string>('')
    const [emailValue,setEmailValue] = useState<string>('')
    const [phoneValue,setPhoneValue] = useState<string>('')

    const [activeCheck,setActiveCheck] = useState<boolean>(false)

    const handleActive = () => {
        setActiveCheck(!activeCheck)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <WhiteBlock>
                <Header/>
                <span className={styles.label}>Имя</span>
                <Input
                    { ...register('name', { required: { value:true, message: 'Введите имя' }}) }
                    placeholder='Введите Ваше имя'
                    error={ errors.name }
                    className='input'
                    type="text"
                    onChange={e => setValue(e.target.value)}
                    value={value.replace(/[^a-zA-Zа-яА-ЯЁё -]/g,'')}
                    pattern="^[А-Яа-яЁёa-zA-Z\s-]+$"
                    title={"Введено некорректное имя, разрешены буквы, пробел - "}
                />
                <span className={styles.label}>Еmail</span>
                <Input
                    { ...register('email', { required: { value:true, message: 'Введите email' }}) }
                    placeholder='Введите ваш email'
                    error={ errors.email }
                    className='input'
                    onChange={e => setEmailValue(e.target.value)}
                    value={emailValue}
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    title={"Введен некорректный email"}
                />
                <span className={styles.label}>Номер телефона</span>
                <Input
                    { ...register('phone', { required: { value:true, message: 'Введите номер телефона' }}) }
                    placeholder='Введите номер телефона'
                    error={ errors.phone }
                    className='input'
                    onChange={e => setPhoneValue(e.target.value)}
                    value={phoneValue.replace(/[^-0-9 ()+]/g,'')}
                    pattern="^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$"
                    title="Введите номер в формате +7(999)999-99-99"
                />
                <span className={styles.label}>Язык</span>
                <DropDown/>
                <div className={styles.wrapperCheckBox}>
                    <div onClick={handleActive} className={cn(styles.checkBox, {
                        [styles.activeCheckBox]: activeCheck
                    })}>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="#0880AE" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6343 0.634339C14.9467 0.32192 15.4533 0.32192 15.7657 0.634339C16.0781 0.946758 16.0781 1.45329 15.7657 1.76571L6.16569 11.3657C5.85327 11.6781 5.34673 11.6781 5.03432 11.3657L1.03431 7.36571C0.721895 7.05329 0.721895 6.54676 1.03431 6.23434C1.34673 5.92192 1.85327 5.92192 2.16569 6.23434L5.6 9.66865L14.6343 0.634339Z"/>
                        </svg>

                    </div>
                    <span className={styles.conditions}>Принимаю <span>условия</span> использования</span>
                </div>
                <Button className={cn(styles.disableBtn, {
                    [styles.activeBtn]: value !== '' && emailValue !== '' && phoneValue !== '' && activeCheck
                })}/>
            </WhiteBlock>
        </form>
    )
}