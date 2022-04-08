const Header=(props)=>{
    return(
        <div style={{display:"flex",justifyContent:"space-between",padding:"0.2cm 0"}}>
            <div>{props.title}</div>
            <>{props.children}</>
            <div>{props.subtitle}</div>
        </div>
    )
}
export default Header;