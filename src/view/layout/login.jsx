import "./../../assets/styles/login.scss";
import loginImg from "./../../assets/images/login.svg";
import {Input,Button,Form} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {authentication} from "./../../actions/account.action";
const Login=()=>{
    const dispatch=useDispatch();
    const login=(param)=>{
        dispatch(authentication(param));
    }
    return <div className={"login"}>
        <div className={"img"}>
            <img src={loginImg} width={85} alt={"ورود به سیستم"}/>
            <div className={"title"}>ورود به سیستم</div>
        </div>
        <div className={"inputContainer"}>
            <Form
                name={"login"}
                onFinish={(param)=>login(param)}
            >
               <Form.Item name={"Username"} rules={[{required:true,message:"نام کاربری را وارد نمایید"}]}>
                   <Input
                       placeholder="نام کاربری را وارد نمایید"
                       suffix={<UserOutlined className="site-form-item-icon" />}
                       size={"large"}
                       autocomplete={"off"}
                   />
                </Form.Item>
                <Form.Item  name={"Password"} rules={[{required:true,message:"رمز عبور را وارد نمایید"}]}>
                    <Input.Password
                        placeholder="رمز عبور را وارد نمایید"
                        size={"large"}
                        autocomplete={"new-password"}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size={"large"}>
                         ورود
                    </Button>
                </Form.Item>
            </Form>

        </div>
    </div>
}
export default Login;