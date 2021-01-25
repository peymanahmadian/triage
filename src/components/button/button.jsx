import "./button.scss";
const Button=(props)=>{
    return <button {...props} className={`button ${props.block && 'block'} ${props.text && `${props.text}_text`} ${props.color} ${props.className}`} >{props.children}</button>
}
export default Button;