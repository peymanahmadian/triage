import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  Alert,
  Layout,
  Row,
  Col,
  Radio,
  Checkbox,
  Slider,
  Input,
  Select,
  Upload,
  AutoComplete,
  Tag,
} from "antd";
import { FastForwardFilled, UploadOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import "../../assets/styles/triage.scss";
import SidebarTriage from "./sidebarTriage";
import account from "./../../assets/images/icons/AccountInfo.svg";
import general from "./../../assets/images/icons/general.svg";
import complainImg from "./../../assets/images/icons/complain.svg";
import drug from "./../../assets/images/icons/drug.svg";
import { postTriage } from "../../actions/triage.action";
import {
  LeftOutlined,
  HeartOutlined,
  ColumnWidthOutlined,
} from "@ant-design/icons";
import { Button, Combo, AgeInput } from "../../components";
import triage from "../../api/triage";
import * as yup from "yup";
//action
import { init, fillTriage } from "../../actions/triage.action";

const Triage = () => {
  const dispatch = useDispatch();
  //global user information
  const { information } = useSelector((state) => state.Account);
  const [active, setActive] = useState(false);
  const [quarantine,setQuarantine]=useState("QuarantineNoNeed");
  const [hiddenIsPregnant, setHiddenIsPregnant] = useState(false);
  const [encounter, setEncounter] = useState("Encounter24HoursNothing");
  const [statusCheckbox,setStatusCheckbox]=useState("");
  const { complaint, allergy, medicalRecord } = useSelector(
    (state) => state.Triage
  );
  //for main complaint
  //@
  const [complaintOpt, setComplaintOpt] = useState([]);
  const [complaintSelect, setComplaintSelect] = useState(null);
  const [complaintList, setComplaintList] = useState([]);
  useEffect(()=>{
    let model = complaintList.map((item) => ({
      FieldExaminationItemId: item.Id,
      Note: item.Name,
      TriageDictionaryId: 0,
      TypeId: 1,
      TriageId: 0,
    }));
    formik.setFieldValue("objDictionaryList",model);
  },[complaintList]);
  const validationSchema = yup.object({
    IsMan: yup.boolean().required(),
    FirstName: yup.string().required("وارد کردن نام الزامیست"),
    LastName: yup.string().required("وارد کردن نام خانوادگی الزامیست"),
    age: yup
      .number()
      .min(1, "وارد کردن سن بیمار الزامیست")
      .required("وارد کردن سن بیمار الزامیست"),
    Weight: yup.string().required("وارد کردن وزن بیمار الزامیست"),
    EncounterReasonId: yup.string().required("علت مراجعه را مشخص نمایید"), //علت مراجعه
    TriageEntryMethodId: yup.string().required("نحوه ورود را مشخص نمایید"), //نحوه ورود
    TriageReferPattern_ID: yup.string().required("نحوه مراجعه را مشخص نمایید"), //نحوه مراجعه
    Encounter24HoursNothing: yup.boolean(), //مراجعه به بیمارستان
    Encounter24HoursThis: yup.boolean(),
    Encounter24HoursOther: yup.boolean(),
    Encounter24HoursOtherText:
      encounter === "Encounter24HoursOther"
        ? yup.string().required("نام بیمارستان الزامی می باشد")
        : yup.string(),
    TriageLevel: yup.number().min(1, "سطح تریاژ را مشخص کنید"), //سطح تریاژ
    LocationId: yup.string().required("ارجاع را مشخص نمایید"), //ارجاع به
    objDictionaryList:yup.array().min(1,"شکایت اصلی حداقل باید دارای یک مورد باشد"),
    Pain:yup.number().min(1,"میزان درد را مشخص نمایید")
  });
  const formik = useFormik({
    initialValues: {
      IsAnonymous: false,
      IsMan: true,
      FirstName: "",
      LastName: "",
      age: 0,
      NationalCode: "",
      IsPregnant: false,
      TriagePic_file:null,
      Tel1: null,
      FatherName: "",
      Weight: "",
      JobName: "",
      Address: "",
      ReligionId:"",
      EncounterReasonId: "",
      TriageEntryMethodId: "",
      TriageReferPattern_ID: "",
      AmbulanceCode: "",
      Encounter24HoursNothing: true,
      Encounter24HoursThis: false,
      Encounter24HoursOther: false,
      Encounter24HoursOtherText: "",
      TriageReferFromClinicId:null,
      TriageReferFromText:"",
      objDictionaryList:[],
      objDictionaryList_allergy:[],
      Note2:"",
      LevelConsciousness:"A",
      DangerousRespire:false,
      RespireDistress:false,
      Sianosis:false,
      Shock:false,
      SPO:false,
      Intubation:false,
      HighDanger:true,
      Lethargy:false,
      HighDistress:false,
      Pain: 0,
      BS:0,
      objDictionaryList_disease:[],
      ServiceCount:0,
      TriageLevel: 0,
      PractitionerComment:"",
      BPD_value:0,
      BPS_value:0,
      PR_value:0,
      RR_value:0,
      SPO2_value:0,
      T_value:0,
      QuarantineNoNeed:true,
      QuarantineContact:false,
      QuarantineDrop:false,
      QuarantineRespiratory:false,
      PatientId_HIS:null,
      LocationId: ""
    },
    validationSchema: validationSchema,
    validateOnBlur:true,
    validateOnChange:false,

    onSubmit: (values) => {
      debugger;
      let param = {
        IsInitialize: false,
        BranchId: information.BranchId,
        UserId: information.UserId,
        EncounterId: null,
        TriageId: null,
        LocationIdSubmit: information.UserSettingDto.LocationId,
        LocationIdDone: information.UserSettingDto.LocationId,
        TriageDto: {
          Triage_ID: 0,
          BranchId: information.BranchId,
          Triage_Code: 0,
          EncounterId: null,
          TriageQuit_ID: 1,
          FirstName: values.FirstName,
          LastName: values.LastName,
          Age: values.age,
          IsMan: values.IsMan,
          EncounterReasonId: values.EncounterReasonId,
          TriageReferPattern_ID: values.TriageReferPattern_ID,
          TriageReferPattern_Text: null,
          TriageReferFrom_ID: null,
          TriageReferTo_ID: null,
          LocationId: values.LocationId,
          TriageEntryMethodId: values.TriageEntryMethodId,
          TriageReferFromClinicId: null,
          TriageLevel: values.TriageLevel,
          LevelConsciousness: values.LevelConsciousness,
          IsPregnant: false,
          IsAccident: false,
          IsRefer24HoursAgo: false,
          IsRefer3MonthsAgo: false,
          IsAllergy: false,
          ReferTypeIS: null,
          Encounter24HoursAgo: false,
          Encounter3MonthsAgo: false,
          DrugHistory: "",
          Shock: values.Shock,
          DangerousRespire: values.DangerousRespire,
          RespireDistress: values.RespireDistress,
          Sianosis: values.Sianosis,
          SPO2: values.SPO2,
          Intubation: values.Intubation,
          HighDanger: values.HighDanger,
          Lethargy: values.Lethargy,
          HighDistress: values.HighDistress,
          ReferToDate: moment().format("YYYY-MM-DDTHH:mm:SS"),
          TriageDate: moment().format("YYYY-MM-DDTHH:mm:SS"),
          TriageDateStart: moment().format("YYYY-MM-DDTHH:mm:SS"),
          ServiceCount: null,
          PractitionerComment: "",
          Note1: null,
          Note2: "",
          BS: values.BS,
          NationalCode: values.NationalCode,
          Tel1: values.Tel1,
          IsGrtReport: false,
          IsAnonymous: values.IsAnonymous,
          IsFormal: false,
          IsSave: true,
          CreateOn: moment().format("YYYY-MM-DDTHH:mm:SS"),
          ModifyOn: null,
          CreateBy: information.UserId,
          CreateByUserFullName: null,
          ModifyBy: null,
          EncounterId2: null,
          MachineName: "",
          IPAddress: "",
          TriageTypeId: 1,
          IsInfant: false,
          AgeInfant: null,
          IsSeizure: false,
          IsTrauma: false,
          VaginalBleeding: false,
          ImpendingDelivery: false,
          SevereHeadache: false,
          BlurredVision: false,
          EpigastricPain: false,
          BabyCordProblem: false,
          NoMovement25Week: false,
          UterineContractions: false,
          HighFever29: false,
          WaterRupture: false,
          SevereVomiting24Week: false,
          ReduceFetalMovement25Week: false,
          VaginalBleedingMild: false,
          FetalHeartFailure: false,
          SevereUterineContractionsMothers: false,
          IsPrint: false,
          AmbulanceCode: values.AmbulanceCode,
          FatherName: values.FatherName,
          ReligionId: null,
          Address: values.Address,
          JobName: values.JobName,
          TriageReferFromText: "",
          Encounter24HoursNothing: values.Encounter24HoursNothing,
          Encounter24HoursThis: values.Encounter24HoursThis,
          Encounter24HoursOther: values.Encounter24HoursOther,
          Encounter24HoursOtherText: values.Encounter24HoursOtherText,
          Pain: values.Pain,
          QuarantineNoNeed: values.QuarantineNoNeed,
          QuarantineContact: values.QuarantineContact,
          QuarantineDrop: values.QuarantineDrop,
          QuarantineRespiratory: values.QuarantineRespiratory,
          PatientId_HIS: values.PatientId_HIS,
          AreaId: null,
          Weight: values.Weight,
          TriagePicDto: null,
          objDictionaryList: values.objDictionaryList,
          objTriageVital: null,
        },
        FieldExaminationEncounterHeaderId: null,
        MachineName: "",
        IsNotCompress: false,
      };
      debugger;
      //dispatch(postTriage(param));
    },
  });
  useEffect(() => {
    //check anonymous for deactive firstname and lastname
    if (formik.values.IsAnonymous) {
      //when user select anonymous fill fisrtname and lastname and disable them
      setActive(true);
      formik.setFieldValue("FirstName", "ناشناس");
      formik.setFieldValue("LastName", "ناشناس");
    } else {
      //when user unselect anonymous firstname and lastname will be enable
      setActive(false);
      formik.setFieldValue("FirstName", "");
      formik.setFieldValue("LastName", "");
    }
    //check IsMan for set false to pregnant
    if (formik.values.IsMan === false) {
      setHiddenIsPregnant(true);
    } else {
      formik.setFieldValue("IsPregnant", false);
      setHiddenIsPregnant(false);
    }
  }, [formik.values.IsAnonymous,formik.values.IsMan]);
  useEffect(() => {
    if (information) {
      dispatch(
        init({
          IsInitialize: false,
          BranchId: information.BranchId,
          UserId: information.UserId,
          EncounterId: 0,
          TriageId: 0,
          LocationIdSubmit: null,
          LocationIdDone: null,
          TriageDto: null,
          FieldExaminationEncounterHeaderId: null,
          MachineName: "",
          IsNotCompress: true,
        })
      );
      dispatch(fillTriage());
    }
  }, [information]);

  const handleCheckbox=(value)=>{
    formik.setFieldValue(value.target.name,value.target.checked);

  }
  const onSearchComplaint = (text) => {
    if (text.length > 2) {
      let cash = complaint.filter((item) => item.Name.indexOf(text) > -1);
      setComplaintOpt(cash);
    } else {
      setComplaintOpt([]);
    }
  };
  const onSelectComplaint = (param) => {
    setComplaintSelect(null);
    let convertedParam = null;
    try {
      convertedParam = JSON.parse(param);
    } catch {
      convertedParam = {
        Id: 0,
        ItemDictionaryId: 0,
        Name: param,
      };
    }

    let cash = [...complaintList, convertedParam];
    setComplaintList([...new Set(cash)]);
    setComplaintOpt([]);
  };
  const onDeleteComplaint = (word) => {
    let cash = [...complaintList];
    let itemIndex = cash.indexOf(word);
    cash.splice(itemIndex, 1);
    setComplaintList(cash);
  };
  //for allergy
  const [allergyOpt, setAllergyOpt] = useState([]);
  const [allergySelect, setAllergySelect] = useState(null);
  const [allergyList, setAllergyList] = useState([]);
  useEffect(()=>{
    let model = allergyList.map((item) => ({
      FieldExaminationItemId: item.Id,
      Note: item.Name,
      TriageDictionaryId: 0,
      TypeId: 2,
      TriageId: 0,
    }));
    formik.setFieldValue("objDictionaryList_allergy",model);
  },[allergyList]);
  const onSearchAllergy = (text) => {
    if (text.length > 2) {
      let cash = allergy.filter((item) => item.Name.indexOf(text) > -1);
      setAllergyOpt(cash);
    } else {
      setAllergyOpt([]);
    }
  };
  const onSelectAllergy = (i) => {
    setAllergySelect(null);
    let cash = [...allergyList, i];
    setAllergyList([...new Set(cash)]);
    setAllergyOpt([]);
  };
  const onDeleteAllergy = (word) => {
    let cash = [...allergyList];
    let itemIndex = cash.indexOf(word);
    cash.splice(itemIndex, 1);
    setAllergyList(cash);
  };
  //for medicalRecord
  const [medicalOpt, setMedicalOpt] = useState([]);
  const [medicalSelect, setMedicalSelect] = useState(null);
  const [medicalList, setMedicalList] = useState([]);
  const onSearchMedical = (text) => {
    if (text.length > 2) {
      let cash = medicalRecord.filter((item) => item.Name.indexOf(text) > -1);
      setMedicalOpt(cash);
    } else {
      setMedicalOpt([]);
    }
  };
  const onSelectMedical = (i) => {
    debugger;

    setMedicalSelect(null);
    let cash = [
      ...medicalList,
      {
        ItemDictionaryId: i,
        Name: medicalOpt.find((opt) => opt.ItemDictionaryId === i).Name,
      },
    ];
    setMedicalList([...new Set(cash)]);
    setMedicalOpt([]);
  };
  const onDeleteMedical = (index) => {
    let cash = [...medicalList];
    let itemIndex = cash.indexOf(
      cash.find((i) => i.ItemDictionaryId === index)
    );
    cash.splice(itemIndex, 1);
    setMedicalList(cash);
  };
  //for medical drug
  const [medicalNameOpt, setMedicalNameOpt] = useState([]);
  const [medicalNameSelect, setMedicalNameSelect] = useState(null);
  const [medicalNameList, setMedicalNameList] = useState([]);
  const onSearchMedicalName = async (text) => {
    if (text.length > 2) {
      let cash = await triage.searchDrug(text);
      if (cash.data) {
        setMedicalNameOpt(cash.data);
      } else {
        setMedicalNameOpt([]);
      }
    } else {
      setMedicalNameOpt([]);
    }
  };
  const onSelectMedicalName = (i) => {
    setMedicalNameSelect(null);
    let cash = [...medicalNameList, i];
    setMedicalNameList([...new Set(cash)]);
    setMedicalNameOpt([]);
  };
  const onDeleteMedicalName = (index) => {
    let cash = [...medicalList];
    let itemIndex = cash.indexOf(index);
    cash.splice(itemIndex, 1);
    setMedicalList(cash);
  };
  //handle action
  const handleOptionStatus=(e)=>{
    switch(e.target.value){
      case "HighDanger":
        formik.setFieldValue("HighDanger", true);
        formik.setFieldValue("Lethargy", false);
        formik.setFieldValue("HighDistress", false);
        setStatusCheckbox("HighDanger");
        break;
      case "Lethargy":
        formik.setFieldValue("HighDanger", false);
        formik.setFieldValue("Lethargy", true);
        formik.setFieldValue("HighDistress", false);
        setStatusCheckbox("Lethargy");
        break;
      case "HighDistress":
        formik.setFieldValue("HighDanger", false);
        formik.setFieldValue("Lethargy", false);
        formik.setFieldValue("HighDistress", true);
        setStatusCheckbox("HighDistress");
        break;
      default:
        break;
    }
  }
  const handleOption = (e) => {
    switch (e.target.value) {
      case "Encounter24HoursNothing":
        formik.setFieldValue("Encounter24HoursNothing", true);
        formik.setFieldValue("Encounter24HoursThis", false);
        formik.setFieldValue("Encounter24HoursOther", false);
        setEncounter("Encounter24HoursNothing");
        break;
      case "Encounter24HoursThis":
        formik.setFieldValue("Encounter24HoursNothing", false);
        formik.setFieldValue("Encounter24HoursThis", true);
        formik.setFieldValue("Encounter24HoursOther", false);
        setEncounter("Encounter24HoursThis");
        break;
      case "Encounter24HoursOther":
        formik.setFieldValue("Encounter24HoursNothing", false);
        formik.setFieldValue("Encounter24HoursThis", false);
        formik.setFieldValue("Encounter24HoursOther", true);
        setEncounter("Encounter24HoursOther");
        break;
      default:
        break;
    }
  };
  const handleQuarantine = (e) => {
    debugger;
    switch (e.target.value) {
      case "QuarantineNoNeed":
        formik.setFieldValue("QuarantineNoNeed", true);
        formik.setFieldValue("QuarantineContact", false);
        formik.setFieldValue("QuarantineDrop", false);
        formik.setFieldValue("QuarantineRespiratory", false);
        setQuarantine("QuarantineNoNeed");
        break;
      case "QuarantineContact":
        formik.setFieldValue("QuarantineNoNeed", false);
        formik.setFieldValue("QuarantineContact", true);
        formik.setFieldValue("QuarantineDrop", false);
        formik.setFieldValue("QuarantineRespiratory", false);
        setQuarantine("QuarantineContact");
        break;
      case "QuarantineDrop":
        formik.setFieldValue("QuarantineNoNeed", false);
        formik.setFieldValue("QuarantineContact", false);
        formik.setFieldValue("QuarantineDrop", true);
        formik.setFieldValue("QuarantineRespiratory", false);
        setQuarantine("QuarantineDrop");
        break;
      case "QuarantineRespiratory":
        formik.setFieldValue("QuarantineNoNeed", false);
        formik.setFieldValue("QuarantineContact", false);
        formik.setFieldValue("QuarantineDrop", false);
        formik.setFieldValue("QuarantineRespiratory", true);
        setQuarantine("QuarantineRespiratory");
        break;
      default:
        break;
    }
  };
  return (
    <Layout className={"layout triage"}>
      <Layout className={"body"}>
        <Layout.Sider className={"side"}>
          <SidebarTriage />
        </Layout.Sider>

        <Layout.Content className={"content"}>
          <Row className={"headerTriage"} gutter={[4, 4]}>
            <Col xs={24} md={6}>
              <div className={"showText"}>
                <span></span>
                <b>کدتریاژ</b>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className={"showText"}>
                <span></span>
                <b>نام بیمار</b>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className={"showText"}>
                <span></span>
                <b>سطح تریاژ</b>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className={"showText"}>
                <span></span>
                <b>ارجاع به</b>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className={"showText"}>
                <span></span>
                <b>تاریخ مراجعه</b>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className={"showText"}>
                <span></span>
                <b>علت مراجعه</b>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className={"showText"}>
                <span></span>
                <b>نحوه ورود</b>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className={"showText"}>
                <span></span>
                <b>تریاژ کننده</b>
              </div>
            </Col>
          </Row>
          <form  onSubmit={formik.handleSubmit} onKeyPress={e => {
                  if (e.key === 'Enter') e.preventDefault();
                }} >
            <Row>
              <Col xs={24} md={24}>
                <fieldset>
                  <legend>
                    <img src={account} height={32} alt={"اطلاعات فردی"} />
                    <div>اطلاعات فردی</div>
                  </legend>
                  <Row gutter={[6, 4]}>
                    <Col xs={12} md={3} className={"paddingTop"}>
                      <Checkbox
                        checked={formik.values.IsAnonymous}
                        name={"IsAnonymous"}
                        onChange={formik.handleChange}
                      >
                        فاقد هویت
                      </Checkbox>
                    </Col>
                    <Col xs={12} md={3}>
                      <Select
                        disabled={active}
                        defaultValue={formik.values.IsMan}
                        name={"IsMan"}
                        onChange={(e) => {
                          formik.setFieldValue("IsMan", e);
                        }}
                        size={"large"}
                        className={"full"}
                        placeholder={"جنسیت"}
                      >
                        <Select.Option key={true} value={true}>
                          مرد
                        </Select.Option>
                        <Select.Option key={false} value={false}>
                          زن
                        </Select.Option>
                      </Select>
                    </Col>
                    <Col xs={24} md={5}>
                      <Input
                        className={`${formik.touched.FirstName && Boolean(formik.errors.FirstName) && "error" } requried`}
                        disabled={active}
                        value={formik.values.FirstName}
                        name={"FirstName"}
                        onChange={formik.handleChange}
                        size={"large"}
                        placeholder={"نام"}
                      />
                      {formik.touched.FirstName && formik.errors.FirstName && (
                        <Alert
                          message={formik.errors.FirstName}
                          type="error"
                          showIcon
                        />
                      )}
                    </Col>
                    <Col xs={24} md={7}>
                      <Input
                        className={`${formik.touched.LastName && Boolean(formik.errors.LastName) && "error" } requried`}
                        disabled={active}
                        value={formik.values.LastName}
                        name={"LastName"}
                        onChange={formik.handleChange}
                        
                        size={"large"}
                        placeholder={"نام خانوادگی"}
                      />
                      {formik.touched.LastName && formik.errors.LastName && (
                        <Alert
                          message={formik.errors.LastName}
                          type="error"
                          showIcon
                        />
                      )}
                    </Col>
                    <Col xs={24} md={6}>
                      <AgeInput
                        className={`${formik.touched.age && Boolean(formik.errors.age) && "error" } requried`}
                        onChange={(e) => formik.setFieldValue("age", e)}
                      />
                      {formik.touched.age && formik.errors.age && (
                        <Alert
                          message={formik.errors.age}
                          type="error"
                          showIcon
                        />
                      )}
                    </Col>
                  </Row>
                  <Row gutter={[6, 4]}>
                    <Col xs={24} md={5}>
                      <Input
                        size={"large"}
                        value={formik.values.NationalCode}
                        name={"NationalCode"}
                        onChange={formik.handleChange}
                        placeholder={"کد ملی"}
                      />
                    </Col>
                    <Col xs={12} md={4}>
                      <Upload>
                        <Button>
                          <UploadOutlined  /> تصویر بیمار
                        </Button>
                      </Upload>
                    </Col>
                    <Col xs={24} md={5}>
                      <Input
                        value={formik.values.Tel1}
                        name={"Tel1"}
                        onChange={formik.handleChange}
                        size={"large"}
                        placeholder={"تلفن"}
                      />
                    </Col>
                    <Col xs={24} md={5}>
                      <Input
                        value={formik.values.FatherName}
                        name={"FatherName"}
                        onChange={formik.handleChange}
                        size={"large"}
                        placeholder={"نام پدر"}
                      />
                    </Col>
                    <Col xs={24} md={5}>
                      <Input
                        className={`${formik.touched.Weight && Boolean(formik.errors.Weight) && "error" } requried`}

                        value={formik.values.Weight}
                        name={"Weight"}
                        onChange={formik.handleChange}
                        type={"number"}
                        size={"large"}
                        placeholder={"وزن"}
                      />
                      {formik.touched.Weight && formik.errors.Weight && (
                        <Alert
                          message={formik.errors.Weight}
                          type="error"
                          showIcon
                        />
                      )}
                    </Col>
                  </Row>
                  <Row gutter={[6, 4]}>
                    <Col xs={24} md={5}>
                      <Input
                        value={formik.values.JobName}
                        name={"JobName"}
                        onChange={formik.handleChange}
                        size={"large"}
                        placeholder={"شغل"}
                      />
                    </Col>
                    <Col xs={24} md={14}>
                      <Input
                        value={formik.values.Address}
                        name={"Address"}
                        onChange={formik.handleChange}
                        type={"text"}
                        size={"large"}
                        placeholder={"آدرس"}
                      />
                    </Col>
                    {hiddenIsPregnant && (
                      <Col xs={24} md={2} className={"paddingTop"}>
                        <Checkbox
                          checked={formik.values.IsPregnant}
                          name={"IsPregnant"}
                          onChange={formik.handleChange}
                        >
                          باردار
                        </Checkbox>
                      </Col>
                    )}
                    <Col xs={24} md={5}>
                      <Select
                        name={"x"}
                        size={"large"}
                        className={"full"}
                        placeholder={"تابعیت"}
                      >
                        <Select.Option key={0}>ایرانی</Select.Option>
                        <Select.Option key={1}>افغانی</Select.Option>
                        <Select.Option key={2}>غیرایرانی</Select.Option>
                      </Select>
                    </Col>
                  </Row>
                </fieldset>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={24}>
                <fieldset>
                  <legend>
                    <img src={general} height={32} alt={"عمومی"} />
                    <div>عمومی</div>
                  </legend>
                  <Row gutter={[6, 4]}>
                    <Col xs={12} md={7}>
                      <Select
                        className={`full requried ${
                          formik.touched.EncounterReasonId &&
                          Boolean(formik.errors.EncounterReasonId) &&
                          "error"
                        }`}
                        name={"EncounterReasonId"}
                        onChange={(e) => {
                          formik.setFieldValue("EncounterReasonId", e);
                        }}
                        size={"large"}
                        placeholder={"علت مراجعه"}
                      >
                        {information &&
                          information.EncounterReasonsDto &&
                          information.EncounterReasonsDto.map((item) => (
                            <Select.Option
                              value={item.EncounterReasonId}
                              key={item.EncounterReasonId}
                            >
                              {item.EncounterReasonName}
                            </Select.Option>
                          ))}
                      </Select>
                      {formik.touched.EncounterReasonId &&
                        formik.errors.EncounterReasonId && (
                          <Alert
                            message={formik.errors.EncounterReasonId}
                            type="error"
                            showIcon
                          />
                        )}
                    </Col>
                    <Col xs={12} md={7}>
                      <Select
                        name={"TriageEntryMethodId"}
                        className={`full requried ${
                          formik.touched.TriageEntryMethodId &&
                          Boolean(formik.errors.TriageEntryMethodId) &&
                          "error"
                        }`}
                        onChange={(e) => {
                          formik.setFieldValue("TriageEntryMethodId", e);
                        }}
                        size={"large"}
                        placeholder={"نحوه ورود"}
                      >
                        {information &&
                          information.TriageEntryMethodsDto &&
                          information.TriageEntryMethodsDto.map((item) => (
                            <Select.Option
                              value={item.TriageEntryMethodId}
                              key={item.TriageEntryMethodId}
                            >
                              {item.TriageEntryMethodName}
                            </Select.Option>
                          ))}
                      </Select>
                      {formik.touched.TriageEntryMethodId &&
                        formik.errors.TriageEntryMethodId && (
                          <Alert
                            message={formik.errors.TriageEntryMethodId}
                            type="error"
                            showIcon
                          />
                        )}
                    </Col>
                    <Col xs={24} md={5}>
                      <Select
                        name={"TriageReferPattern_ID"}
                        className={`full requried ${
                          formik.touched.TriageReferPattern_ID &&
                          Boolean(formik.errors.TriageReferPattern_ID) &&
                          "error"
                        }`}
                        onChange={(e) => {
                          formik.setFieldValue("TriageReferPattern_ID", e);
                        }}
                        size={"large"}
                        placeholder={"نحوه مراجعه"}
                      >
                        {information &&
                          information.TriageReferPatternsDto &&
                          information.TriageReferPatternsDto.map((item) => (
                            <Select.Option
                              value={item.TriageReferPattern_ID}
                              key={item.TriageReferPattern_ID}
                            >
                              {item.TriageReferPattern_Name}
                            </Select.Option>
                          ))}
                      </Select>
                      {formik.touched.TriageReferPattern_ID &&
                        formik.errors.TriageReferPattern_ID && (
                          <Alert
                            message={formik.errors.TriageReferPattern_ID}
                            type="error"
                            showIcon
                          />
                        )}
                    </Col>
                    <Col xs={24} md={5}>
                      <Input
                        value={formik.values.AmbulanceCode}
                        name={"AmbulanceCode"}
                        onChange={formik.handleChange}
                        size={"large"}
                        placeholder={"کد آمبولانس"}
                      />
                    </Col>
                    <Col xs={24} md={16}>
                      <div className={"grayTitle"}>
                        <div className={"grayHead"}>مراجعه در 24 گذشته</div>
                        <div className={"grayContent"}>
                          <Radio.Group
                            name={"Encounter24"}
                            onChange={handleOption}
                            value={encounter}
                          >
                            <Radio value={"Encounter24HoursNothing"}>
                              ندارد
                            </Radio>
                            <Radio value={"Encounter24HoursThis"}>
                              همین بیمارستان
                            </Radio>
                            <Radio value={"Encounter24HoursOther"}>
                              بیمارستان
                            </Radio>
                          </Radio.Group>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} md={8}>
                      {formik.values.Encounter24HoursOther && (
                        <Input
                          onChange={formik.handleChange}
                          name="Encounter24HoursOtherText"
                          value={formik.values.Encounter24HoursOtherText}
                          size={"large"}
                          className={
                            formik.touched.Encounter24HoursOtherText &&
                            Boolean(formik.errors.Encounter24HoursOtherText) &&
                            "error"
                          }
                          placeholder={"نام بیمارستان"}
                        />
                      )}
                      {formik.touched.Encounter24HoursOtherText &&
                        formik.errors.Encounter24HoursOtherText && (
                          <Alert
                            message={formik.errors.Encounter24HoursOtherText}
                            type="error"
                            showIcon
                          />
                        )}
                    </Col>
                  </Row>
                  <Row gutter={[6, 4]}>
                    <Col xs={24} md={6}>
                      <Select
                        className={`full`}
                        size={"large"}
                        placeholder={"ارجاع درمانگاه"}
                      >
                        <Select.Option value={""} key={0}>
                            
                        </Select.Option>
                        <Select.Option value={1} key={1}>
                            از درمانگاه همین بیمارستان
                        </Select.Option>
                        <Select.Option value={2} key={2}>
                           از درمانگاه سایر بیمارستان ها
                        </Select.Option>
                      </Select>
                    </Col>
                    <Col xs={24} md={6}>
                      <Input size={"large"} placeholder={"از"} />
                    </Col>
                  </Row>
                </fieldset>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={24}>
                <fieldset>
                  <legend>
                    <img src={complainImg} height={32} alt={"شکایت اصلی"} />
                    <div>شکایت اصلی</div>
                  </legend>
                  <Row gutter={[6, 4]}>
                    <Col xs={24} md={12}>
                      <AutoComplete
                        className={`${formik.touched.objDictionaryList && Boolean(formik.errors.objDictionaryList) && "error" } requried`}
                        value={complaintSelect}
                        onChange={(i) => setComplaintSelect(i)}
                        style={{ width: "100%" }}
                        onSelect={onSelectComplaint}
                        onSearch={onSearchComplaint}
                        onKeyPress={(e) => {
                          if (e.charCode === 13 && complaintSelect.length > 1)
                            onSelectComplaint(complaintSelect);
                        }}
                        placeholder="جستجوی شکایت اصلی"
                      >
                        {complaintOpt.map((comItem) => (
                          <AutoComplete.Option value={JSON.stringify(comItem)}>
                            {comItem.Name}
                          </AutoComplete.Option>
                        ))}
                      </AutoComplete>
                      <Input
                        size={"large"}
                        placeholder={"شرح"}
                        className={"marginTop"}
                        name="Note2"
                        value={formik.values.Note2}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.objDictionaryList &&
                        formik.errors.objDictionaryList && (
                          <Alert
                            message={formik.errors.objDictionaryList}
                            type="error"
                            showIcon
                          />
                        )}
                    </Col>
                    <Col xs={24} md={12}>
                      <fieldset className={"inner"}>
                        <legend>لیست شکایات</legend>
                        {complaintList.map((item) => (
                          <Tag
                            key={item.Name}
                            closable
                            onClose={() => onDeleteComplaint(item)}
                          >
                            {item.Name}
                          </Tag>
                        ))}

                      </fieldset>
                    </Col>
                  </Row>
                </fieldset>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={24}>
                <fieldset>
                  <legend>
                    <img src={drug} height={32} alt={"سابقه حساسیت دارویی"} />
                    <div>سابقه حساسیت دارویی</div>
                  </legend>
                  <Row gutter={[6, 4]}>
                    <Col xs={24} md={12}>
                      <AutoComplete
                        value={allergySelect}
                        onChange={(i) => setAllergySelect(i)}
                        style={{ width: "100%" }}
                        onSelect={onSelectAllergy}
                        onSearch={onSearchAllergy}
                        onKeyPress={(e) => {
                          if (e.charCode === 13 && allergySelect.length > 3)
                            onSelectAllergy(allergySelect);
                        }}
                        placeholder="سابقه حساسیت دارویی"
                      >
                        {allergyOpt.map((comItem) => (
                          <AutoComplete.Option value={comItem.Name}>
                            {comItem.Name}
                          </AutoComplete.Option>
                        ))}
                      </AutoComplete>
                    </Col>
                    <Col xs={24} md={12}>
                      <fieldset className={"inner"}>
                        <legend>لیست موارد حساسیت</legend>
                        {allergyList.map((item) => (
                          <Tag
                            key={item}
                            closable
                            onClose={() => onDeleteAllergy(item)}
                          >
                            {item}
                          </Tag>
                        ))}
                      </fieldset>
                    </Col>
                  </Row>
                </fieldset>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={24}>
                <fieldset>
                  <legend className={"red"}>
                    <LeftOutlined />
                    <span>سطح یک</span>
                  </legend>
                  <div className={"grayTitle"}>
                    <div className={"grayHead"}>سطح هوشیاری بیمار</div>
                    <div className={"grayContent"}>
                      <Radio.Group value={formik.values.LevelConsciousness} onChange={(e) =>{formik.setFieldValue("LevelConsciousness",e.target.value)}}>
                        <Radio value={"A"}>A</Radio>
                        <Radio value={"V"}>V</Radio>
                        <Radio value={"P"}>P</Radio>
                        <Radio value={"U"}>U</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                  <Row className={"container"}>
                    <Col xs={24} sm={12} md={4}>
                      <Checkbox value={formik.values.DangerousRespire} name="DangerousRespire" onChange={e=>handleCheckbox(e)}>مخاطره راه هوایی</Checkbox>
                    </Col>
                    <Col xs={24} sm={12} md={4}>
                      <Checkbox value={formik.values.RespireDistress} name="RespireDistress" onChange={e=>handleCheckbox(e)}>دیسترس تنفسی</Checkbox>
                    </Col>
                    <Col xs={24} sm={12} md={4}>
                      <Checkbox value={formik.values.Sianosis} name="Sianosis" onChange={e=>handleCheckbox(e)}>سیانوز</Checkbox>
                    </Col>
                    <Col xs={24} sm={12} md={4}>
                      <Checkbox value={formik.values.Shock} name="Shock" onChange={e=>handleCheckbox(e)}>علائم شوک</Checkbox>
                    </Col>
                    <Col xs={24} sm={12} md={4}>
                      <Checkbox value={formik.values.SPO} name="SPO2" onChange={e=>handleCheckbox(e)}>SPO</Checkbox>
                    </Col>
                    <Col xs={24} sm={12} md={4}>
                      <Checkbox value={formik.values.Intubation} name="Intubation" onChange={e=>handleCheckbox(e)}>انتوباسیون</Checkbox>
                    </Col>
                  </Row>
                </fieldset>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={24}>
                <fieldset>
                  <legend className={"yellow"}>
                    <LeftOutlined />
                    <span>سطح دوم</span>
                  </legend>
                  <div className={"grayTitle"}>
                    <div className={"grayHead"}>شرایط</div>
                    <div className={"grayContent"}>
                      <Radio.Group
                        name={"status"}
                        onChange={handleOptionStatus}
                        value={statusCheckbox}
                      >
                        <Radio value={"HighDanger"}>پر خطر</Radio>
                        <Radio value={"Lethargy"}>لتاژی و خواب آلودگی</Radio>
                        <Radio value={"HighDistress"}>دیسترس شدید</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                  <Row gutter={[12, 12]}>
                    <Col xs={24} md={12}>
                      <div className={"toolbar"}>
                        <div className={"label"}>میزان درد</div>
                        <Slider
                          min={0}
                          max={10}
                          className={`bar ${
                            formik.touched.Pain &&
                            Boolean(formik.errors.Pain) &&
                            "error"
                          }`}
                          name="Pain"
                          onChange={e=>formik.setFieldValue("Pain",e)}
                        />
                        <div>
                          {formik.touched.Pain &&
                          formik.errors.Pain && (
                              <Alert
                                  message={formik.errors.Pain}
                                  type="error"
                                  showIcon
                              />
                          )}
                        </div>

                      </div>
                    </Col>
                    <Col xs={24} md={12}>
                      <div className={"toolbar"}>
                        <Input
                          name="BS"
                          onChange={formik.handleChange}
                          value={formik.values.BS}
                          prefix={
                            <span className={"grayText"}> میزان قند خون:</span>
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[12, 12]}>
                    {/* <Col xs={24} md={12}>
                      <label className={"paddingBottom"}>
                        سابقه دارویی
                      </label>
                      <AutoComplete
                        value={medicalNameSelect}
                        onChange={(i) => setMedicalNameSelect(i)}
                        style={{ width: "100%" }}
                        onSelect={onSelectMedicalName}
                        onSearch={onSearchMedicalName}
                        placeholder="سابقه دارویی"
                        onKeyPress={(e) => {
                          if (e.charCode === 13 && medicalNameSelect.length > 1)
                            onSelectMedicalName(medicalNameSelect);
                        }}
                      >
                        {medicalNameOpt.map((comItem) => (
                          <AutoComplete.Option value={comItem.Id}>
                            {comItem.Name}
                          </AutoComplete.Option>
                        ))}
                      </AutoComplete>
                    </Col> */}
                    <Col xs={24} md={12}>
                      <label className={"paddingBottom"}>سابقه پزشکی</label>
                      <AutoComplete
                        value={medicalSelect}
                        onChange={(i) => setMedicalSelect(i)}
                        style={{ width: "100%" }}
                        onSelect={onSelectMedical}
                        onSearch={onSearchMedical}
                        placeholder="جستجوی سابقه پزشکی"
                      >
                        {medicalOpt.map((comItem) => (
                          <AutoComplete.Option value={comItem.Name}>
                            {comItem.Name}
                          </AutoComplete.Option>
                        ))}
                      </AutoComplete>
                    </Col>
                  </Row>
                  <Row gutter={[12, 6]}>
                    {/* <Col xs={24} md={12}>
                      <fieldset className={"inner"}>
                        <legend>لیست داروها</legend>
                        {medicalNameList.map((item) => (
                          <Tag
                            key={item}
                            closable
                            onClose={() => onDeleteAllergy(item)}
                          >
                            {item}
                          </Tag>
                        ))}
                      </fieldset>
                    </Col> */}
                    <Col xs={24} md={12}>
                      <fieldset className={"inner"}>
                        <legend>لیست سابقه پزشکی</legend>
                        {medicalList.map((item) => (
                          <Tag
                            key={item}
                            closable
                            onClose={() => onDeleteMedicalName(item)}
                          >
                            {item}
                          </Tag>
                        ))}
                      </fieldset>
                    </Col>
                  </Row>
                </fieldset>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={24}>
                <fieldset>
                  <legend className={"gray"}>
                    <LeftOutlined />
                    <span>سطوح بالاتر</span>
                  </legend>
                  <Row gutter={[12, 6]}>
                    <Col xs={24} sm={24} md={24} lg={15}>
                      <div className={"grayTitle"}>
                        <div className={"grayHead"}>تعداد تسهیلات</div>
                        <div className={"grayContent"}>
                          <Radio.Group onChange={() => {}} value={1}>
                            <Radio value={1}>سطح سوم - دو مورد یا بیشتر</Radio>
                            <Radio value={2}>سطح چهارم - یک مورد بیشتر</Radio>
                            <Radio value={3}>سطح پنجم - هیچ</Radio>
                          </Radio.Group>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6}>
                      <Select
                        size={"large"}
                        placeholder={"سطح تریاژ"}
                        name="TriageLevel"
                        onChange={(e) => formik.setFieldValue("TriageLevel", e)}
                        className={`full requried ${
                          formik.touched.TriageLevel &&
                          Boolean(formik.errors.TriageLevel) &&
                          "error"
                        }`}
                      >
                        <Select.Option key={""} value={0}></Select.Option>
                        <Select.Option key={1} value={1}>
                          سطح یک
                        </Select.Option>
                        <Select.Option key={2} value={2}>
                          سطح دوم
                        </Select.Option>
                        <Select.Option key={3} value={3}>
                          سطح سوم
                        </Select.Option>
                        <Select.Option key={4} value={4}>
                          سطح چهارم
                        </Select.Option>
                        <Select.Option key={5} value={5}>
                          سطح پنجم
                        </Select.Option>
                      </Select>
                      {formik.touched.TriageLevel &&
                        formik.errors.TriageLevel && (
                          <Alert
                            message={formik.errors.TriageLevel}
                            type="error"
                            showIcon
                          />
                        )}
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={2}>
                      <Button color={"green"}>نظر پزشک</Button>
                    </Col>
                  </Row>
                </fieldset>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={24}>
                <fieldset>
                  <legend className={"green"}>
                    <HeartOutlined />
                    <span>علائم حیاتی</span>
                  </legend>
                  <Row>
                    <Col xs={24} md={4}>
                      <Button color={"red"}>نرمال</Button>
                    </Col>
                    <Col xs={24} md={20}>
                      <Row>
                        <Col xs={12} md={4}>
 
                          <Combo onChange={e=>formik.setFieldValue("BPS_value",e)} label={"BPS"} />
                        </Col>
                        <Col xs={12} md={4}>
                          <Combo onChange={e=>formik.setFieldValue("BPD_value",e)} label={"BPD"} />
                        </Col>
                        <Col xs={12} md={4}>
                          <Combo onChange={e=>formik.setFieldValue("PR_value",e)} label={"PR"}  />
                        </Col>
                        <Col xs={12} md={4}>
                          <Combo onChange={e=>formik.setFieldValue("RR_value",e)} label={"RR"} />
                        </Col>
                        <Col xs={12} md={4}>
                          <Combo onChange={e=>formik.setFieldValue("T_value",e)} label={"T"} />
                        </Col>
                        <Col xs={12} md={4}>
                          <Combo onChange={e=>formik.setFieldValue("SPO2_value",e)} label={"SPO2"} />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </fieldset>
              </Col>
            </Row>
            <Row className={"paddingBottom"}>
              <Col xs={24} md={24}>
                <fieldset>
                  <legend className={"gray"}>
                    <ColumnWidthOutlined />
                    <span>جداسازی</span>
                  </legend>
                  <Row gutter={[12, 6]}>
                    <Col xs={24} sm={24} md={24} lg={18}>
                      <div className={"grayTitle"}>
                        <div className={"grayHead"}>
                          جدا سازی و احتیاط بیشتر کنترل عفونت
                        </div>
                        <div className={"grayContent"}>
                          <Radio.Group onChange={handleQuarantine} value={quarantine}>
                            <Radio value={"QuarantineNoNeed"}>نیاز ندارد</Radio>
                            <Radio value={"QuarantineContact"}>تماسی</Radio>
                            <Radio value={"QuarantineDrop"}>قطره ای</Radio>
                            <Radio value={"QuarantineRespiratory"}>تنفسی</Radio>
                          </Radio.Group>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6}>
                      <div className={"flexInput"}>
                        <Input
                          size="large"
                          name="PatientId_HIS"
                          onChange={formik.handleChange}
                          value={formik.values.PatientId_HIS}
                          prefix={
                            <span className={"grayText"}>کد بیمار در HIS:</span>
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                </fieldset>
              </Col>
            </Row>
            <Row gutter={[12, 6]}>
              <Col xs={24} md={8}>
                <div className={"flexInput"}>
                  <Select
                    size={"large"}
                    className={"full"}
                    placeholder={"نحوه خروج و انصراف از درمان"}
                    name={"EncounterReasonId"}
                  >
                    <Select.Option value={1}>بلاتکلیف</Select.Option>
                    <Select.Option value={2}>
                      تشکیل پرونده در اچ ای اس
                    </Select.Option>
                    <Select.Option value={4}>ارجاع به مرکز دیگر</Select.Option>
                    <Select.Option value={5}>انصراف از درمان</Select.Option>
                    <Select.Option value={6}>رضایت شخصی</Select.Option>
                    <Select.Option value={7}>
                      ترخیص با دستور دارویی
                    </Select.Option>
                    <Select.Option value={8}>بستری در بخش</Select.Option>
                  </Select>
                  <Button>ثبت</Button>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <Select
                  size={"large"}
                  placeholder={"ارجاع به"}
                  name={"LocationId"}
                  onChange={(e) => formik.setFieldValue("LocationId", e)}
                  className={`full requried ${
                    formik.touched.LocationId &&
                    Boolean(formik.errors.LocationId) &&
                    "error"
                  }`}
                >
                  <Select.Option value={115114}>CPR</Select.Option>
                  <Select.Option value={115115}>درمانگاه</Select.Option>
                  <Select.Option value={115223}>اورژانس</Select.Option>
                </Select>
                {formik.touched.LocationId && formik.errors.LocationId && (
                  <Alert
                    message={formik.errors.LocationId}
                    type="error"
                    showIcon
                  />
                )}
              </Col>
              <Col xs={24} md={4}>
                <Input
                  size={"large"}
                  prefix={
                    <span className={"grayText"}> زمان و تاریخ تریاژ:</span>
                  }
                />
              </Col>
              <Col xs={24} md={4}>
                <Button block htmlType="submit" color={"red"}>
                  ثبت
                </Button>
              </Col>
            </Row>
          </form>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
export default Triage;
