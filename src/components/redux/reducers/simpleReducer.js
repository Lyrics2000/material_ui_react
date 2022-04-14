
import { OVERUNDER } from "../action_types/ActionTypes"

export default (state = {}, action) => {
    switch (action.type) {
     case OVERUNDER:
      return {
       result: action.payload
      }
     default:
      return state
    }
   }