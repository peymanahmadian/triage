import "./print.scss";
import Logo from "./../../../src/assets/images/logo.jpg";
import Label from "./Label";
import Header from "./header";
const Print = (props) => {
  return (
    <div className="print">
      <table className="hasBorder">
        <thead>
          <tr>
            <th>
              <div>
                <img src={Logo} alt="" width={64} />
              </div>
              <div className="border small_rect">
                <Label caption={"کد بیمار"} subtitle={"Patient ID"} />
                <div>213S</div>

              </div>
              <div className="border small_rect">
                <Label caption={"شماره پرونده"} subtitle={"Document No"}></Label>
                <div>546546</div>
              </div>
            </th>
            <th colSpan={4} className="padding_20">
              <div> وزارت بهداشت،درمان و آموزش پزشکی </div>
              <div>Ministry of Health & Medical Education</div>
              <div>
                <Label
                  caption={"دانشگاه علوم پزشکی و خدمات بهداشتی درمانی ایران"}
                  subtitle={"University of Medical Sience"}
                />
                <div>نام بیمارستان</div>
                <div>فرم ترياژ بخش اورژانس بیمارستان</div>
                <div>Hospital Emergency Departement Triage Form</div>
              </div>
            </th>
            <th>
              <div className="border small_rect" style={{marginBottom:"10px"}}>
                <Label caption={"کد تریاژ"} subtitle={"Triage Code"} />
                <div>213S</div>
              </div>
              <div className="border small_rect">
                <Label caption={"سطح تریاژ"} subtitle={"Triage Level"} />
                <div>213S</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={1}>
            <Label caption={"نام"} subtitle={"Name"} />
              <div>فرزانه السادات</div>
            </td>
            <td colSpan={2}>
            <Label caption={"نام خانوادگی"} subtitle={"Family Name"} />
              <div>قریشی</div>

            </td>
            <td>
              <Label caption={"جنسیت"} subtitle={"Sex"} />
              <div className="control">
                <input type="checkbox" />
                <label>مذکر</label>
                <label>(‌M)</label>
                <input checked type="checkbox" />
                <label>مونث</label>
                <label>(‌F)</label>
              </div>
            </td>
            <td colspan={2}>
              <Label caption={"تاریخ مراجعه"} subtitle={"Date of Arrival"} />
              <div>1400/06/25</div>
            </td>
          </tr>
          <tr>
            <td colSpan={1}>
              <Label caption={"کدملی"} subtitle={"National Code"} />
              <div>0800532615</div>
            </td>
            <td colspan={1}>
              <Label caption={"تاریخ تولد"} subtitle={"Date of Birth"} />
              <div>
                1366/08/08 - <span>44</span>
                <span> سال </span>
              </div>
            </td>
            <td colspan={2}>
              <Label caption={"باردار"} subtitle={"Pregnant"} />
              <div className="control">
                <input type="checkbox" />
                <label>آری</label>
                <label>(yes)</label>
                <input checked type="checkbox" />
                <label>خیر</label>
                <label>(no)</label>
              </div>
            </td>
            <td colSpan={2}> 
              <Label caption={"ساعت مراجعه"} subtitle={"Time of Arrival"} />
              <div>16:35</div>
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <Label caption={"نحوه مراجعه"} subtitle={"Arrival mode"} />
              <Label caption={"کد آمبولانس"} subtitle={"Ambulance code"} />
            </td>
          </tr>
          <tr>
            <td>
              <div className="control">
                <input type="checkbox" />
                <label>آمبولانس ۱۱۵</label>
                <label>(EMS)</label>
              </div>
            </td>
            <td colspan={2}>
              <div className="control">
                <input checked type="checkbox" />
                <label>آمبولانس خصوصی</label>
                <label>(Private Ambulace)</label>
              </div>
            </td>
            <td>
              <div className="control">
                <input type="checkbox" />
                <label>شخصی</label>
                <label>(‌By her own)</label>
              </div>
            </td>
            <td>
              <div className="control">
                <input type="checkbox" />
                <label>امداد</label>
                <label>(Air Ambulace)</label>
              </div>
            </td>
            <td>
              <div className="control">
                <input type="checkbox" />
                <label>سایر</label>
                <label>(Other)</label>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan={6}>
              <Label
                caption={"مراجعه بیمار در ۲۴ گذشته"}
                subtitle={"Patient Presence in ED 24 Hours"}
              />
            </td>
          </tr>
          <tr>
            <td colspan={2}>
              <div className="control">
                <input type="checkbox" />
                <label>همین بیمارستان</label>
                <label>(This Hospital)</label>
              </div>
            </td>
            <td colspan={2}>
              <div className="control">
                <input type="checkbox" />
                <label>بیمارستان دیگر</label>
                <label>(Other Hospital)</label>
              </div>
            </td>
            <td colspan={2}>
              <div className="control">
                <input type="checkbox" />
                <label>خیر</label>
                <label>(‌No)</label>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Label caption={"علت"} subtitle={""} />
            </td>
            <td>
              <Label caption={"نحوه ورود"} subtitle={""} />
            </td>
            <td>
              <Label caption={"ارجاع درمانگاه"} subtitle={""} />
            </td>
            <td colspan={2}>
              <Label caption={"ارجاع از"} subtitle={""} />
            </td>
          </tr>
          <tr>
            <td colspan={6}>
              <Label
                caption={"شکایت اصلی بیمار"}
                subtitle={"Chief Complaint"}
              />
            </td>
          </tr>
          <tr>
            <td colspan={6}>
              <Label
                caption={"سابقه حساسیت دارویی و غذایی"}
                subtitle={"History of Drug and Food Allergy"}
              />
            </td>
          </tr>
          <tr>
            <td colspan={6}>
              <Label caption={"توضیحات تکمیلی"} subtitle={"Further Details"} />
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <Header
                title={"بیماران سطح ۱ (شرایط تهدید کننده حیات)"}
                subtitle={"Triage Level 1"}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
            سطح هوشیاری بیمار
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div className="control">
                <input type="checkbox" />
                <label>بدون پاسخ</label>
                <label>(Unersponsive (U))</label>
              </div>
            </td>
            <td>
              <div className="control">
                <input type="checkbox" />
                <label>درد</label>
                <label>(Pain (P))</label>
              </div>
            </td>
            <td colspan="2">
              <div className="control">
                <input type="checkbox" />
                <label>پاسخ کلامی</label>
                <label>(Verbal (V))</label>
              </div>
            </td>
            <td>
              <div className="control">
                <input type="checkbox" />
                <label>هوشیار</label>
                <label>(Alert (A))</label>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan={6}>
              <Label caption={":(سیستم AVPU)"} />
            </td>
          </tr>
          <tr>
          <td>
              <div className="control">
                <input type="checkbox" />
                <label>مخاطره راه</label>
                <label>(Airway Disorder)</label>
              </div>
            </td>
            <td>
              <div className="control">
                <input type="checkbox" />
                <label>دیسترس تنفسی</label>
                <label>(Respiratory Distress)</label>
              </div>
            </td>
            <td>
              <div className="control">
                <input type="checkbox" />
                <label>سیانوز</label>
                <label>(Cyanosis)</label>
              </div>
            </td>
            <td>
              <div className="control">
                <input type="checkbox" />
                <label>علائم شوک</label>
                <label>(Sign of Shock)</label>
              </div>
            </td>
            <td colspan={2}>
              <div className="control">
                <input type="checkbox" />
                <label>اشباء خون کمتر از خون ۹۳</label>
                <label>{"(SpO2<93)"}</label>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <Header
                title={"بیماران سطح ۲"}
                subtitle={"Triage Level 2"}
              />
            </td>
          </tr>
          <tr>
          <td colspan={2}>
              <div className="control">
                <input type="checkbox" />
                <label>شرایط پرخطر</label>
                <label>{"(High Risk Condition)"}</label>
              </div>
          </td>
          <td colspan={2}>
              <div className="control">
                <input type="checkbox" />
                <label>لتاژی و خواب آلودگی</label>
                <label>{"(Lethargy & Drowsy)"}</label>
              </div>
          </td>
          <td colspan={2}>
              <div className="control">
                <input type="checkbox" />
                <label>دیسترس شدید</label>
                <label>{"(Severe Distress)"}</label>
              </div>
          </td>
          </tr>
          <tr>
            <td colspan={1}>
            <Label caption={"درد"} subtitle={"Pain"}/>
            </td>
            <td colspan={2}>
            <Label caption={"سابقه پزشکی"} subtitle={"Medical History"} />
            </td>
            <td colspan={3}>
            <Label caption={"سابقه دارویی"} subtitle={"Drug History"}/>
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <Header
                title={"بیماران سطح ۳"}
                subtitle={"Triage Level 3"}
              />
            </td>
          </tr>
          <tr>
            <td colspan={6}>
              <Header 
                title={"تعداد تسهیلات مورد نیاز در اورژانس"} 
                subtitle={"Number of Required Resources in Emergency"}>
                <div>
                  <div className="control">
                    <input type="checkbox" />
                    <label>دو مورد و بیشتر</label>
                    <label>{"(Two and more)"}</label>
                  </div>
                </div>    
              </Header>
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <Header
                title={"بیماران سطح ۴ و ۵"}
                subtitle={"Triage Level 4 & 5"}
              />
            </td>
          </tr>
          <tr>
            <td colspan={6}>
              <Header title={"تعداد تسهیلات مورد نیاز در اورژانس"} subtitle={"Number of Required Resources in Emergency"}>
                <div className="control">
                    <input type="checkbox" />
                    <label>یک مورد</label>
                    <label>{"(One Item)"}</label>
                  </div>
                  <div className="control">
                    <input type="checkbox" />
                    <label>هیچ</label>
                    <label>{"(None)"}</label>
                  </div>
              </Header>
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <Header
                title={"َعلائم حیاتی"}
                subtitle={"Vital Sign"}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Label caption={"فشار خون"} subtitle={"BP"}/>              
            </td>
            <td>
              <Label caption={"تعداد ضربان"} subtitle={"PR/min"}/>              
            </td>
            <td>
              <Label caption={"تنفس"} subtitle={"RR/min"}/>              
            </td>
            <td>
              <Label caption={"قند خون"}/>              
            </td>
            <td>
              <Label caption={"دمای بدن"} subtitle={"T"}/>              
            </td>
            <td>
              <Label caption={"درصد اشباع اکسیژن"} subtitle={"SPO2 %"}/>              
            </td>
          </tr>
          <tr>
            <td colspan={6}>
              <Header title={"سطح تریاژ بیمار"} subtitle={"Patient Triage Level"}>
                  <div className="control">
                    <input type="checkbox" />
                    <label>۱</label>
                  </div>
                  <div className="control">
                    <input type="checkbox" />
                    <label>۲</label>
                  </div>
                  <div className="control">
                    <input type="checkbox" />
                    <label>۳</label>
                  </div>
                  <div className="control">
                    <input type="checkbox" />
                    <label>۴</label>
                  </div>
                  <div className="control">
                    <input type="checkbox" />
                    <label>۵</label>
                  </div>
              </Header>
            </td>
          </tr>
          <tr>
            <td colspan={6}>
              <Label caption={"جداسازی بیمار و احتیاط بیشتر کنترل عفونت"} subtitle={"Patient Isolation and Higher Level of Precautions"} />
            </td>
          </tr>
          <tr>
            <td colspan={1}>
              <div className="control">
                    <input type="checkbox" />
                    <label>تماسی</label>
                    <label>{"(Contact)"}</label>
              </div>
            </td>
            <td colspan={1}>
              <div className="control">
                    <input type="checkbox" />
                    <label>قطره ای</label>
                    <label>{"(Droplet)"}</label>
              </div>
            </td>
            <td colspan={2}>
              <div className="control">
                    <input type="checkbox" />
                    <label>تنفسی</label>
                    <label>{"(Airborne)"}</label>
              </div>
            </td>
            <td colspan={2}> 
              <div className="control">
                    <input type="checkbox" />
                    <label>ندارد</label>
                    <label>{"(No Need to Isolate)"}</label>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <Label caption={"ارجاع به"} subtitle={"Refer to"}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="control">
                    <input type="checkbox" />
                    <label>سرپایی</label>
                    <label>{"(Fast track)"}</label>
              </div>
            </td>
            <td >
              <div className="control">
                    <input type="checkbox" />
                    <label>احیا</label>
                    <label>{"(CPR)"}</label>
              </div>
            </td>
            <td colSpan={2}>
              <div className="control">
                    <input type="checkbox" />
                    <label>فضای بستری</label>
                    <label>{"(In Patient Area)"}</label>
              </div>
            </td>
            <td>
              <div className="control">
                    <input type="checkbox" />
                    <label>سایر</label>
                    <label>{"(Other)"}</label>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan={2}>
              <Label value=" " caption={"ساعت و تاریخ ارجاء"} subtitle={"Date & Time Of Referral"}/>
            </td>
            <td colspan={4}>
              <Label value=" " caption={"نام و نام خانوادگی ، مهر و امضا پرستار تریاژ"} subtitle={"Triage Nurse's Name/Signature/Stamp"}/>  
            </td>    
          </tr>
        </tbody>
      </table>
      <table className="pagebreak">
        <tr>
          <td colspan={12}>
            <Label value="" caption={"شرح حال و دستورات پزشک"} subtitle={"Medical history & physician Order"}/>
          </td>
        </tr>
        <tr>
          <td colspan={6}>
            <Label value="" caption={"تاریخ و ساعت ویزیت"} subtitle={"Visit Date & Time"}/>

          </td>
          <td colspan={6}>
            <Label value="" caption={"نام و نام خانوادگی،مهر و امضاء پزشک"} subtitle={"Physician Name / Signature / Stamp"}/>

          </td>
        </tr>
        <tr>
          <td colspan={12}>
            <Label value="" caption={"گزارش پرستاری"} subtitle={"Nursing report"}/>
          </td>
        </tr>
        <tr>
          <td colspan={6}>
            <Label value="" caption={"تاریخ و ساعت گزارش"} subtitle={"Report Date & Time"}/>

          </td>
          <td colspan={6}>
            <Label value="" caption={"نام و نام خانوادگی،مهر و امضاء پرستار"} subtitle={"Nurse Name / Signature / Stamp"}/>

          </td>
        </tr>
        <tr>
          <td colSpan={6}>
            <span> بیمار در تاریخ </span>
            <span> ۱۴۰۰/۰۲/۰۲ </span>
            <span> در ساعت </span>
            <span> ۱۴:۰۰ </span>
           
          </td>
          <td colSpan={6}>
              <div>مرخص گردید</div>
              <div>
                <span>در بخش</span>
                <span>.............</span>
                <span>بستری گردید</span>
              </div>
              <div>
                <span>به بیمارستان</span>
                <span>.............</span>
                <span>اعزام گردید</span>
              </div>
              <div>
                <span>به بیمارستان</span>
                <span>.............</span>
                <span>ارجاع گردید</span>
              </div>
          </td>

        </tr>
        <tr>
          <td colSpan={12}>
            <div>اجازه معالجه و عمل جراحی</div>
            <div>
              <span>اینجانب</span>
              <span>............</span>
              <span>بیمار / ولی بیمار ساکن</span>
              <span>............</span>
              <span>اجازه می دهم پزشک یا پزشکان بیمارستان</span>
              <span>............</span>
              <span>

                هر نوع معالجه و در صورت لزوم عمل جراحی و یا انتقال خون که صلاح بدانند در مورد اینجانب /بیمار اینجانب به مورد اجرا گذارند و بدینوسیله برائت پزشک و کارکنان این بیمارستان را از کلیه عوارض احتمالی اقدامات فوق که در مورد اینجانب / بیمار اینجانب انجام دهند اعلام می دارم
              
              </span>
            </div>
            <div>
              <span>نام و امضای بیمار / همراه بیمار </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={4}>نام شاهد ۱</td>
          <td colSpan={4}>تاریخ </td>
          <td colSpan={4}>امضاء</td>
        </tr>
        <tr>
          <td colSpan={4}>نام شاهد ۲</td>
          <td colSpan={4}>تاریخ </td>
          <td colSpan={4}>امضاء</td>
        </tr>
        <tr>
          <td colSpan={12}>
            <div>اجازه ترخیص با میل شخصی</div>
            <div>
              <span>اینجانب</span>
              <span>............</span>
              <span>با میل شخصی خود بر خلاف صلاحدید و توصیه پزشکان بیمارستان</span>
              <span>............</span>
              <span>
                ،این مرکز را با در نظر داشتن عواقب و خطرات احتمالی ترک می نمایم و اعلام می دارم که هیچ مسئولیتی متوجه مسئولان،پرشکان و کارکنان این مرکز نخواهد بود
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={6}>امضاء بیمار</td>
          <td colSpan={6}>امضاء یکی از بستگان درجه اول بیمار</td>
        </tr>
        <tr>
          <td colSpan={4}>نام شاهد ۱</td>
          <td colSpan={4}>تاریخ </td>
          <td colSpan={4}>امضاء</td>
        </tr>
        <tr>
          <td colSpan={4}>نام شاهد ۲</td>
          <td colSpan={4}>تاریخ </td>
          <td colSpan={4}>امضاء</td>
        </tr>
      </table>
    </div>
  );
};
export default Print;
