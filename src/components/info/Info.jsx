import "./info.scss";
const Info=(props)=>{
    return <div className={"info"}><div>{props.value}</div><div>{props.icon && <img height={20} alt={"icon"} src={props.icon} />}<span>{props.title}</span></div></div>
}
export default Info;