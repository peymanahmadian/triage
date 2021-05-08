export const header=(hasToken)=>{
   if(hasToken){
       let token=localStorage.getItem("triageToken")
       return{
           "Content-Type":"application/json",
            "Authorization":token
       }
   }else{
       return{
           "Content-Type":"application/json"
       }
   }


};
export const urls={
  getPatients:"http://46.209.148.202:8087/TriageSystem/api/Procedure/sp_Triage_WinTriageList"
};