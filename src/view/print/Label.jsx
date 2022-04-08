const Label=({caption,subtitle,value,align})=>{
    return(<div><div style={{display:"flex",justifyContent:"space-between"}}><div>{caption}</div><div>{subtitle}</div></div><div className={align ? align : "center"}><b>{value}</b></div></div>)
}
export default Label;