import "./print.scss";
import { useState } from "react";
import Logo from "./../../../src/assets/images/logo.jpg";
import Label from "./Label";
import Header from "./header";
import { Button } from "./../../components";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import triage from "../../api/triage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Print = (props) => {
  const { information } = useSelector((state) => state.Account);
  const params = useParams();
  const [data, setData] = useState(null);
  const history = useHistory();
  useEffect(() => {
    debugger;
    if (params.id === "0") {
      setData({
        "TriageId": 0, "txtTriage_Code": "0", "txtFirstName": "", "txtLastName": "",
        "txtFullName": "", "txtAge": "", "txtTriageEntryMethod": "", "txtTriageReferFromClinic": "",
        "txtTriageReferFrom": "", "txtBS": "0", "txtNationalCode": "", "txtNote2": "", "txtTel1": "",
        "txtEncounterReasonName": "", "chkIntubation": false, "rbtnMan": false, "rbtnWoman": false, "rbtnIsPregnant1": false,
        "rbtnIsPregnant2": false, "rbtnTriageReferPatternWithAmbulans115": false, "rbtnTriageReferPatternWithAmbulans": false,
        "rbtnTriageReferPatternWithCar": false, "rbtnTriageReferPatternWithHelicopter": false, "rbtnTriageReferPatternWithOther": false,
        "rbtnIsAccidentYes": false, "rbtnIsAllergyYes": false, "rbtnIsAllergyNo": false, "rbtnIsRefer24HoursAgo": false,
        "chkIsRefer3MonthsAgo": false, "rbtnLevelConsciousnessU": false, "rbtnLevelConsciousnessP": false, "rbtnLevelConsciousnessV": false,
        "rbtnLevelConsciousnessA": false, "chkRespireDistress": false, "chkDangerousRespire": false, "chkSianosis": false, "chkShock": false,
        "chkHighDanger": false, "chkLethargy": false, "chkHighDistress": false, "rbtnServiceCount0": false, "rbtnServiceCount1": false,
        "rbtnServiceCount2": false, "rbtnTriageLevel1": false, "rbtnTriageLevel2": false, "rbtnTriageLevel3": false, "rbtnTriageLevel4": false,
        "rbtnTriageLevel5": false, "txtDrugHistory": "", "txtLocationName": "", "LocationTypeSepasName": null, "txtTriageLevel": 0,
        "txtTriageDate": "", "txtTriageTime": "", "txtTriageDateStart": "", "txtTriageTimeStart": "", "txtReferToDate": "", "txtReferToTime": "",
        "txtUserNameCreate": "", "txtUserName": "", "txtDateCurrent": "", "txtTimeCurrent": "", "TriagePic_File": null, "CenterInfoPic": null, "txtT": "", "txtSPO2": "", "txtRR": "",
        "txtPR": "", "txtBPS": "", "txtBPD": "", "txtMainDisease": "", "txtAllergyText": "", "txtMedicalHistory": "", "txtDrugAllergy": "",
        "txtCenterName": "", "txtDescriptionCenter": "", "IsSeizure": false, "IsTrauma": false, "VaginalBleeding": false, "ImpendingDelivery": false,
        "SevereHeadache": false, "BlurredVision": false, "EpigastricPain": false, "BabyCordProblem": false, "NoMovement25Week": false, "UterineContractions": false, "HighFever29": false, "WaterRupture": false,
        "SevereVomiting24Week": false, "ReduceFetalMovement25Week": false, "VaginalBleedingMild": false, "FetalHeartFailure": false, "SevereUterineContractionsMothers": false, "AmbulanceCode": null,
        "FatherName": "", "ReligionName": "", "Address": "", "JobName": "", "TriageReferFromText": "", "Encounter24HoursNothing": false, "Encounter24HoursThis": false, "Encounter24HoursOther": false,
        "Encounter24HoursOtherText": "", "Pain": null, "QuarantineNoNeed": false, "QuarantineContact": false, "QuarantineDrop": false, "QuarantineRespiratory": false, "PatientId_HIS": null,
        "txtBirthDateShamsi": "", "chkSPO2": false, "AdditionalInfoText": "", "txtWeight": null, "PractitionerComment": ""
      })
    }
    else if (params.id) {
      triage.getPatientInformation({
        id: params.id,
        UserId: information.UserId.toString(),
        BranchId: information.BranchId.toString(),
        IsNotCompress: true
      }).then(data => {
        setData(data.data);
      })
    }

  }, [params]);



  return (

    !data ?
      <div>در حال بارگزاری اطلاعات ...</div>
      :
      <div className="print">
        <div className="printNavbar">
          <Button onClick={() => window.print()}>چاپ گزارش</Button>
          <Button color="red" onClick={() => history.goBack()}> بستن گزارش </Button>
        </div>
        <table className="hasBorder">
          <thead>
            <tr style={{ border: 0, marginBottom: "4px" }}>
              <th style={{ padding: 0 }}>
                <div>
                  <img src={Logo} alt="" width={64} />
                </div>
                <div className="border small_rect null_border_bottom">
                  <Label caption={"کد بیمار"} subtitle={"Patient ID"} value={data.PatientId_HIS} />
                </div>
                <div className="border small_rect null_border_top">
                  <Label caption={"شماره پرونده"} subtitle={"Document No"} value={"---"} />
                </div>
              </th>
              <th colSpan={4} className="padding_20">
                <div> وزارت بهداشت،درمان و آموزش پزشکی </div>
                <div>Ministry of Health & Medical Education</div>
                <div>
                  <b>
                    {data.txtDescriptionCenter}
                  </b>
                  <div>{data.txtCenterName}</div>
                  <div>فرم ترياژ بخش اورژانس بیمارستان</div>
                  <div>Hospital Emergency Departement Triage Form</div>
                </div>
              </th>
              <th style={{ padding: 0 }}>
                <div className="border small_rect" style={{ marginBottom: "10px" }}>
                  <div><small>کد تریاژ</small></div>
                  <div><b>{data.txtTriage_Code}</b></div>
                </div>
                <div className="border small_rect">
                  <div><small>سطح تریاژ</small></div>
                  <div><b>{data.txtTriageLevel}</b></div>
                  <div><small>Triage Level</small></div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={1}>
                <Label caption={"نام"} subtitle={"First Name"} value={data.txtFirstName} />
              </td>
              <td colSpan={2}>
                <Label caption={"نام خانوادگی"} subtitle={"Family Name"} value={data.txtLastName} />
              </td>
              <td>
                <Label caption={"جنسیت"} subtitle={"Sex"} />
                <div className="control">
                  <input checked={data.rbtnMan} type="checkbox" />
                  <label>مذکر</label>
                  <label>(‌M)</label>
                  <input checked={data.rbtnWoman} type="checkbox" />
                  <label>مونث</label>
                  <label>(‌F)</label>
                </div>
              </td>
              <td colspan={2}>
                <Label caption={"تاریخ مراجعه"} subtitle={"Date of Arrival"} />
                <div>{data.txtTriageDate}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={1}>
                <Label caption={"کدملی"} subtitle={"National Code"} />
                <div>{data.txtNationalCode}</div>
              </td>
              <td colspan={1}>
                <Label caption={"تاریخ تولد"} subtitle={"Date of Birth"} />
                <div>
                  {data.txtBirthDateShamsi} - <span>{data.txtAge}</span>
                </div>
              </td>
              <td colspan={2}>
                <Label caption={"باردار"} subtitle={"Pregnant"} />
                <div className="control">
                  <input checked={data.rbtnIsPregnant1} type="checkbox" />
                  <label>آری</label>
                  <label>(yes)</label>
                  <input checked={!data.rbtnIsPregnant1} type="checkbox" />
                  <label>خیر</label>
                  <label>(no)</label>
                </div>
              </td>
              <td colSpan={2}>
                <Label caption={"ساعت مراجعه"} subtitle={"Time of Arrival"} />
                <div>{data.txtTriageTime}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={6}>
                <Label caption={"کد آمبولانس"} subtitle={"Ambulance code"} value={data.AmbulanceCode} />

                <Label caption={"نحوه مراجعه"} subtitle={"Arrival mode"} />
              </td>
            </tr>
            <tr>
              <td>
                <div className="control">
                  <input checked={data.rbtnTriageReferPatternWithAmbulans115} type="checkbox" />
                  <label>آمبولانس ۱۱۵</label>
                  <label>(EMS)</label>
                </div>
              </td>
              <td colspan={2}>
                <div className="control">
                  <input checked={data.rbtnTriageReferPatternWithAmbulans} type="checkbox" />
                  <label>آمبولانس خصوصی</label>
                  <label>(Private Ambulace)</label>
                </div>
              </td>
              <td>
                <div className="control">
                  <input checked={data.rbtnTriageReferPatternWithCar} type="checkbox" />
                  <label>شخصی</label>
                  <label>(‌By her own)</label>
                </div>
              </td>
              <td>
                <div className="control">
                  <input checked={data.rbtnTriageReferPatternWithHelicopter} type="checkbox" />
                  <label>امداد</label>
                  <label>(Air Ambulace)</label>
                </div>
              </td>
              <td>
                <div className="control">
                  <input checked={data.rbtnTriageReferPatternWithOther} type="checkbox" />
                  <label>سایر</label>
                  <label>(Other)</label>
                </div>
              </td>
            </tr>
            <tr className="no_border_bottom">
              <td colspan={6}>
                <Label
                  caption={"مراجعه بیمار در ۲۴ گذشته"}
                  subtitle={"Patient Presence in ED 24 Hours"}
                />
              </td>
            </tr>
            <tr className="no_border_top">
              <td colspan={2} className="no_border_vertical">
                <div className="control">
                  <input checked={data.Encounter24HoursThis} type="checkbox" />
                  <label>همین بیمارستان</label>
                  <label>(This Hospital)</label>
                </div>
              </td>
              <td colspan={2} className="no_border_vertical">
                <div className="control">
                  <input checked={data.Encounter24HoursOther} type="checkbox" />
                  <label>بیمارستان دیگر</label>
                  <label>(Other Hospital)</label>
                </div>
              </td>
              <td colspan={2} className="no_border_vertical">
                <div className="control">
                  <input checked={data.Encounter24HoursNothing} type="checkbox" />
                  <label>خیر</label>
                  <label>(‌No)</label>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Label caption={"علت"} subtitle={""} value={data.txtEncounterReasonName} />
              </td>
              <td>
                <Label caption={"نحوه ورود"} subtitle={""} value={data.txtTriageEntryMethod} />
              </td>
              <td>
                <Label caption={"ارجاع درمانگاه"} subtitle={""} value={data.txtTriageReferFromClinic} />
              </td>
              <td colspan={2}>
                <Label caption={"ارجاع از"} subtitle={""} value={data.txtTriageReferFrom} />
              </td>
            </tr>
            <tr className="no_border_bottom">
              <td colspan={6}>
                <Label
                  caption={"شکایت اصلی بیمار"}
                  subtitle={"Chief Complaint"}
                  value={data.txtMainDisease}
                />
              </td>
            </tr>
            <tr className="no_border_top no_border_bottom">
              <td colspan={6}>
                <Label
                  caption={"سابقه حساسیت دارویی و غذایی"}
                  subtitle={"History of Drug and Food Allergy"}
                />
                <div>{"---"}</div>
              </td>
            </tr>
            <tr className="no_border_top no_border_bottom">
              <td colspan={6}>
                <Label caption={"توضیحات تکمیلی"} subtitle={"Further Details"} />
                <div>{data.txtNote2}</div>
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
            <tr className="no_border_bottom">
              <td colSpan={6}>
                <Label caption={"سطح هوشیاری بیمار (سیستم AVPU)"} />
              </td>
            </tr>
            <tr className="no_border_top no_border_bottom">
              <td colspan="2" className="no_border_vertical">
                <div className="control">
                  <input checked={data.rbtnLevelConsciousnessU} type="checkbox" />
                  <label>بدون پاسخ</label>
                  <label>(Unersponsive - U)</label>
                </div>
              </td>
              <td className="no_border_vertical">
                <div className="control">
                  <input checked={data.rbtnLevelConsciousnessP} type="checkbox" />
                  <label>درد</label>
                  <label>(Pain - P)</label>
                </div>
              </td>
              <td colspan="2" className="no_border_vertical">
                <div className="control">
                  <input checked={data.rbtnLevelConsciousnessV} type="checkbox" />
                  <label>پاسخ کلامی</label>
                  <label>(Verbal - V)</label>
                </div>
              </td>
              <td className="no_border_vertical">
                <div className="control">
                  <input checked={data.rbtnLevelConsciousnessA} type="checkbox" />
                  <label>هوشیار</label>
                  <label>(Alert - A)</label>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={6}>
                <div>

                  {/* <div className="control">
                <input type="checkbox" />
                <label>مخاطره راه</label>
                <label>(Airway Disorder)</label>
              </div> */}

                  <div className="control">
                    <input checked={data.chkRespireDistress} type="checkbox" />
                    <label>دیسترس تنفسی</label>
                    <label>(Respiratory Distress)</label>
                  </div>

                  <div className="control">
                    <input checked={data.chkSianosis} type="checkbox" />
                    <label>سیانوز</label>
                    <label>(Cyanosis)</label>
                  </div>

                  <div className="control">
                    <input checked={data.chkShock} type="checkbox" />
                    <label>علائم شوک</label>
                    <label>(Sign of Shock)</label>
                  </div>

                  <div className="control">
                    <input checked={data.chkSPO2} type="checkbox" />
                    <label>اشباء خون کمتر از خون ۹۳</label>
                    <label>{"(SpO2<93)"}</label>
                  </div>

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
                  <input checked={data.chkHighDanger} type="checkbox" />
                  <label>شرایط پرخطر</label>
                  <label>{"(High Risk Condition)"}</label>
                </div>
              </td>
              <td colspan={2}>
                <div className="control">
                  <input checked={data.chkLethargy} type="checkbox" />
                  <label>لتاژی و خواب آلودگی</label>
                  <label>{"(Lethargy & Drowsy)"}</label>
                </div>
              </td>
              <td colspan={2}>
                <div className="control">
                  <input checked={data.chkHighDistress} type="checkbox" />
                  <label>دیسترس شدید</label>
                  <label>{"(Severe Distress)"}</label>
                </div>
              </td>
            </tr>
            <tr className="no_border_bottom">
              <td colspan={6}>
                <Label caption={"درد"} subtitle={"Pain"} />
                <div>{data.Pain}</div>
              </td>
            </tr>
            <tr className="no_border_bottom no_border_top">
              <td colspan={6}>
                <Label caption={"سابقه پزشکی"} subtitle={"Medical History"} />
                <div>{data.txtMedicalHistory}</div>
              </td>
            </tr>
            <tr className="no_border_bottom no_border_top">
              <td colspan={6}>
                <Label caption={"سابقه دارویی"} subtitle={"Drug History"} />
                <div>{data.txtDrugHistory}</div>
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
                <Label caption={"فشار خون"} subtitle={"BP"} value={data.txtBPS} />
              </td>
              <td>
                <Label caption={"تعداد ضربان"} subtitle={"PR/min"} value={data.txtPR} />
              </td>
              <td>
                <Label caption={"تنفس"} subtitle={"RR/min"} value={data.txtRR} />
              </td>
              <td>
                <Label caption={"قند خون"} value={data.txtBPD} />
              </td>
              <td>
                <Label caption={"دمای بدن"} subtitle={"T"} value={data.txtT} />
              </td>
              <td>
                <Label caption={"درصد اشباع اکسیژن"} subtitle={"SPO2 %"} value={data.txtSPO2} />
              </td>
            </tr>
            <tr>
              <td colspan={6}>
                <Header title={"سطح تریاژ بیمار"} subtitle={"Patient Triage Level"}>
                  <div className="control">
                    <input checked={data.rbtnTriageLevel1} type="checkbox" />
                    <label>۱</label>
                  </div>
                  <div className="control">
                    <input checked={data.rbtnTriageLevel2} type="checkbox" />
                    <label>۲</label>
                  </div>
                  <div className="control">
                    <input checked={data.rbtnTriageLevel3} type="checkbox" />
                    <label>۳</label>
                  </div>
                  <div className="control">
                    <input checked={data.rbtnTriageLevel4} type="checkbox" />
                    <label>۴</label>
                  </div>
                  <div className="control">
                    <input checked={data.rbtnTriageLevel5} type="checkbox" />
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
                  <input checked={data.QuarantineContact} type="checkbox" />
                  <label>تماسی</label>
                  <label>{"(Contact)"}</label>
                </div>
              </td>
              <td colspan={1}>
                <div className="control">
                  <input checked={data.QuarantineDrop} type="checkbox" />
                  <label>قطره ای</label>
                  <label>{"(Droplet)"}</label>
                </div>
              </td>
              <td colspan={2}>
                <div className="control">
                  <input checked={data.QuarantineRespiratory} type="checkbox" />
                  <label>تنفسی</label>
                  <label>{"(Airborne)"}</label>
                </div>
              </td>
              <td colspan={2}>
                <div className="control">
                  <input checked={data.QuarantineNoNeed} type="checkbox" />
                  <label>ندارد</label>
                  <label>{"(No Need to Isolate)"}</label>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={6}>
                <Label caption={"ارجاع به"} subtitle={"Refer to"} value={data.txtLocationName} />
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
                <Label value={`${data.txtReferToDate} ${data.txtReferToTime}`} caption={"ساعت و تاریخ ارجاء"} subtitle={"Date & Time Of Referral"} />
              </td>
              <td colspan={4}>
                <Label value=" " caption={"نام و نام خانوادگی ، مهر و امضا پرستار تریاژ"} subtitle={"Triage Nurse's Name/Signature/Stamp"} />
                <div>{data.txtUserNameCreate}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="pagebreak hasBorder">
          <tr className="no_border_bottom">
            <td colspan={12}>
              <Label value="" caption={"شرح حال و دستورات پزشک"} subtitle={"Medical history & physician Order"} />
              <div className="gap"></div>
            </td>

          </tr>
          <tr className="no_border_top">
            <td colspan={6}>
              <Label value="" caption={"تاریخ و ساعت ویزیت"} subtitle={"Visit Date & Time"} />

            </td>
            <td colspan={6}>
              <Label value="" caption={"نام و نام خانوادگی،مهر و امضاء پزشک"} subtitle={"Physician Name / Signature / Stamp"} />

            </td>
          </tr>
          <tr className="no_border_bottom">
            <td colspan={12}>
              <Label value="" caption={"گزارش پرستاری"} subtitle={"Nursing report"} />
              <div className="gap"></div>
            </td>
          </tr>
          <tr className="no_border_top">
            <td colspan={6}>
              <Label value="" caption={"تاریخ و ساعت گزارش"} subtitle={"Report Date & Time"} />

            </td>
            <td colspan={6}>
              <Label value="" caption={"نام و نام خانوادگی،مهر و امضاء پرستار"} subtitle={"Nurse Name / Signature / Stamp"} />

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
            <td colSpan={4}>نام شاهد ۱ <div className="miniGap" /></td>
            <td colSpan={4}>تاریخ <div className="miniGap" /></td>
            <td colSpan={4}>امضاء <div className="miniGap" /></td>
          </tr>
          <tr>
            <td colSpan={4}>نام شاهد ۲ <div className="miniGap" /></td>
            <td colSpan={4}>تاریخ <div className="miniGap" /></td>
            <td colSpan={4}>امضاء <div className="miniGap" /></td>
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
            <td colSpan={6}>امضاء بیمار <div className="miniGap" /></td>
            <td colSpan={6}>امضاء یکی از بستگان درجه اول بیمار <div className="miniGap" /></td>
          </tr>
          <tr>
            <td colSpan={4}>نام شاهد ۱ <div className="miniGap" /></td>
            <td colSpan={4}>تاریخ <div className="miniGap" /></td>
            <td colSpan={4}>امضاء <div className="miniGap" /></td>
          </tr>
          <tr>
            <td colSpan={4}>نام شاهد ۲ <div className="miniGap" /></td>
            <td colSpan={4}>تاریخ <div className="miniGap" /></td>
            <td colSpan={4}>امضاء <div className="miniGap" /></td>
          </tr>
        </table>
      </div>



  );
};

export default Print;
