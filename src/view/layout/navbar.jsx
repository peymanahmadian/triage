import { Dropdown, Menu } from "antd";
import { Button } from "../../components";
import { useDispatch } from "react-redux";
import "../../assets/styles/navbar.scss";
import emergency from "../../assets/images/icons/emergency.svg";
import { singOutUser } from "../../actions/account.action";
//import
import setting from "./../../assets/images/icons/settings.svg";
import information from "../../assets/images/icons/information.svg";
import { useHistory, useLocation } from "react-router-dom";
const menu = (
    <Menu>
        <Menu.Divider />
        <Menu.Item key="3">خروج از برنامه</Menu.Item>
    </Menu>
);
const Navbar = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const his = useHistory();
    return (
        <div className={"menubar"}>
            <Dropdown overlay={menu} trigger={['click']}>
                <div className="ant-dropdown-link">
                    <img className={"hover"} src={setting} height={32} alt={"setting"} />
                </div>
            </Dropdown>
            <div><img className={"hover"} src={information} height={32} alt={"information"} /></div>
            {
                location.pathname === "/" && <Button color={"red"} onClick={() => { dispatch(singOutUser()) }}> خروج </Button>
            }
            {
                location.pathname === "/triage" && <Button onClick={() => his.push("/")}> انصراف </Button>
            }
            <Button> <img src={emergency} height={24} alt={"اورژانس"} /><span>اورژانس</span> </Button>


        </div>
    )
}
export default Navbar;