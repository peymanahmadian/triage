const base="http://46.209.148.202:8087";
export const URL={
    getToken:`${base}/TriageSystem/api/User/Authenticate`,
    getUser:`${base}/TriageSystem/api/User/GetUser`,
    getPatients:`${base}/TriageSystem/api/Procedure/sp_Triage_WinTriageList`,
    getTriageInit:`${base}/TriageSystem/api/TriageField/Init`,
    getTriageDictionarySearchAll:`${base}/TriageSystem/api/TriageField/FillTriageDictionarySearchAllNotCompress`

}
