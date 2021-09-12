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

};