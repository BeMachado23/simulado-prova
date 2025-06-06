import './Button.css'

export default function Button({text, variant = "default", onClick, style}){
    return(
        <button className={`button ${variant}`} onClick={onClick} style={style}>{text}</button>
    )
}