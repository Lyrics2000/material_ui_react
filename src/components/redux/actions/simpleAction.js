
import { OVERUNDER,BOTHTEAMSTOSCORE,DEFAULTACTIONTYPE} from "../action_types/ActionTypes"
import { getSSE } from "../../common/important_functions"
export const simpleAction = (action) => dispatch => {

    switch(action.type){
        case OVERUNDER:
        
            getSSE(action.payload).then((k)=>{
                return  (
                    dispatch({
                        type: OVERUNDER,
                        
                        payload:k
                       })
                )
            }).catch((error)=>{
                console.log("eror occured over under")
            })
            

        default:
            return  (
                dispatch({
                    type: DEFAULTACTIONTYPE,
                    
                    payload: "default"
                   })
            )

    }

    console.log("over under")
    
   }

