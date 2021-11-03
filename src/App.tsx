import styles from './App.module.scss';
import {Button} from "./components/Button/Button";
import {WhiteBlock} from "./components/WhiteBlock/WhiteBlock";
import {Input} from "./components/Input/Input";
import {useForm} from "react-hook-form";
import {DropDown} from "./components/DropDown/DropDown";
import {CheckBox} from "./components/CheckBox/CheckBox";
import {Header} from "./components/Header/Header";
import {useState} from "react";


export interface IForm {
    name: string
    email: string
    phone: string
}
function App() {
    const { register, handleSubmit, formState: { errors }} = useForm<IForm>()
    const onSubmit = (data: IForm) => console.log(data);
    const [value,setValue] = useState('')
    const [emailValue,setEmailValue] = useState('')
    const [phoneValue,setPhoneValue] = useState('')

    return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.App}>
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
                value={value.replace(/[^-a-zA-Zа-яА-Я ]/g,'')}
            />
            <span className={styles.label}>Еmail</span>
            <Input
                { ...register('email', { required: { value:true, message: 'Введено не корректное значение' }}) }
                placeholder='Введите ваш email'
                error={ errors.email }
                className='input'
                onChange={e => setEmailValue(e.target.value)}
                value={emailValue.replace(/^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/, '')}
            />
            <span className={styles.label}>Номер телефона</span>
            <Input
                { ...register('phone', { required: { value:true, message: 'Введите номер телефона' }}) }
                placeholder='Введите номер телефона'
                error={ errors.phone }
                className='input'
                onChange={e => setPhoneValue(e.target.value)}
                value={phoneValue.replace(/[^-0-9 ()+]/g,'')}
            />
            <span className={styles.label}>Язык</span>
            <DropDown>

            </DropDown>
            <CheckBox/>
            <Button />
        </WhiteBlock>
    </form>
  )
}

export default App;
