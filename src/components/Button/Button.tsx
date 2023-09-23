
import style from './Button.module.css';

type btnProps = {
    onClick?: () => void
    buttonName: string
    disable?: boolean
}

export default function Button({onClick, buttonName, disable} : btnProps) {

    return <button className={`${style.btn} ${disable ? style.disable : ''}`} onClick={onClick}>{buttonName}</button>
    
}