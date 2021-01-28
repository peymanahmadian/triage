import account from "../../assets/images/icons/account.svg";
import {Button} from "../../components";
import "../../assets/styles/sidebar.scss";
import covid from "../../assets/images/icons/covid.svg";
import patient from "../../assets/images/icons/patient.svg"
import report from "../../assets/images/icons/report.svg";
const Sidebar=()=>{
    return(<aside className={"sidebar"}>
        <div className={"icon"}>
            <img src={account} alt={"حساب کاربری"} height={"75"}/>
        </div>
        <div className={"username"}>
            <strong>پیمان احمدیان</strong>
            <div className={"showText"}><div>1399/08/08 - 22:55</div><div>ورود</div></div>
            <div className={"showText"}><div>1399/08/08 - 23:55</div><div>خروج</div></div>
        </div>
        <div className={"operation"}>
            <div className={"titleLine"}><div>نوع تریاژ</div><div><hr/></div><div><img alt={"repo"} src={report} height={16} /></div></div>
            <Button block className={"marginBottom"}>تریاژ سطح 4 و 5 </Button>
            <Button block > تریاژ عمومی و سطح حیاتی </Button>
        </div>
        <div className={"report"}>
            <div className={"titleLine"}><div>گزارشات</div><div><hr/></div><div><img alt={"repo"} src={report} height={16} /></div></div>

            <Button block className={"marginBottom"}>وضعیت بیماران و جستجو</Button>
            <Button block className={"marginBottom"}>گزارش آماری تریاژ</Button>
            <Button block className={"marginBottom"}>گزارش آماری تعدادی</Button>
            <Button block className={"marginBottom"}>گزارش آماری با جزئیات</Button>
        </div>
        <div className={"footerSide"}>
            <Button block text={"red"}> <img src={covid} alt={"ارزیابی بیماران کووید"} height={24} /><span>ارزیابی بیماران کووید 19</span> </Button>
        </div>
        <div className={"footerBottom"}>
            <div className={"info"}>
                <img src={patient} alt={"تعداد بیماران"} height={32}/>
                <div><span>تعداد بیماران : </span><span>45</span></div>
            </div>
        </div>
    </aside>)
}
export default Sidebar;