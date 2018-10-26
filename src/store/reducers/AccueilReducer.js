import { GET_ACCUEIL  } from "../actions/actionTypes"

const initialState = [{ id:"",
    titlePresentation : "",
    imgPresentation:"",
    altImgPresentation:"",
    titleMonPasse :"",
    imgMonPasse:"",
    altImgMonPasse:"",
    textMonPasse:"",
    titleMonAvenir :"",
    imgMonAvenir:"",
    altImgMonAvenir:"",
    textMonAvenir:""
  }]

export default function AccueilReducer(state = [initialState], action){
  switch(action.type){
    case GET_ACCUEIL :
      return action.payload

    default :
      return state
  }
}
