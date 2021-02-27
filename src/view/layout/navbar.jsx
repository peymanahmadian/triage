import {Dropdown, Menu} from "antd";
import {Button} from "../../components";
import "../../assets/styles/navbar.scss";
import emergency from "../../assets/images/icons/emergency.svg";
//import
import setting from "./../../assets/images/icons/settings.svg";
import information from "../../assets/images/icons/information.svg";
const menu=(
    <Menu>
        <Menu.Divider />
        <Menu.Item key="3">خروج از برنامه</Menu.Item>
    </Menu>
);
const Navbar=()=>{
    return(
        <div className={"menubar"}>
            <Dropdown overlay={menu} trigger={['click']}>
                <div className="ant-dropdown-link">
                    <img className={"hover"} src={setting} height={32} alt={"setting"}/>
                </div>
            </Dropdown>
            <div><img className={"hover"} src={information} height={32} alt={"information"}/></div>
            <Button color={"red"} onClick={()=>{}}> خروج </Button>
            <Button> <img src={emergency} height={24} alt={"اورژانس"}/><span>اورژانس</span> </Button>
            <Button> انصراف </Button>

        </div>
    )
}
export default Navbar;