import "./button.scss";
const Button=(props)=>{
    return <button className={`button ${props.color}`} {...props}>{props.children}</button>
}
export default Button;