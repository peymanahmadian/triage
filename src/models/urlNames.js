let baseUrl=window.baseUrl;
export const URL={
    getToken:`${baseUrl}/TriageSystem/api/User/Authenticate`,
    getUser:`${baseUrl}/TriageSystem/api/User/GetUser`,
    getPatients:`${baseUrl}/TriageSystem/api/Procedure/sp_Triage_WinTriageList`,
    getTriageInit:`${baseUrl}/TriageSystem/api/TriageField/Init`,
    getTriageDictionarySearchAll:`${baseUrl}/TriageSystem/api/TriageField/FillTriageDictionarySearchAllNotCompress`,
    getTriageList:`${baseUrl}/TriageSystem/api/Procedure/sp_Triage_WinTriageList`,
    getExaminationItemSearch:`${baseUrl}/TriageSystem/api/FieldExamination/FieldExaminationItemSearch`,
    saveTriage:`${baseUrl}/TriageSystem/api/TriageField/SaveTriage`,
    getPatientsInformation:`${baseUrl}/TriageSystem/api/Report/RptInTriage`
}
