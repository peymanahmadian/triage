import {TriageActionType} from "../models/actionTypes";
let model={
    init:{
    },
    complaint:[],
    allergy:[],
    medicalRecord:[],
    nursingReport:[],
    other:[]
}

const TriageReducer=(state=model, action)=>{
    switch (action.type) {
        case TriageActionType.setInit:
           return{
                ...state,
                init:action.param
            }
        case TriageActionType.fillSicknessList:
            return {
                ...state,
                complaint:action.param.FieldExaminationEncounterDictionariesDtoComplaint,
                allergy:action.param.FieldExaminationEncounterDictionariesDtoDrugAllergy,
                medicalRecord:action.param.FieldExaminationEncounterDictionariesDtoMedicalRecord,
                nursingReport:action.param.FieldExaminationEncounterDictionariesDtoNursingReport,
                other:action.param.FieldExaminationEncounterDictionariesDtoOthers,
            }
        default:
            return{
                ...state
            }
    }
}
export default TriageReducer;