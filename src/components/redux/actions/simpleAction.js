
import { OVERUNDER,BOTHTEAMSTOSCORE, } from "../action_types/ActionTypes"
export const simpleAction = () => dispatch => {
    console.log("over under")
    dispatch({
     type: OVERUNDER,
     
     payload: "OVER Under"
    })
   }

