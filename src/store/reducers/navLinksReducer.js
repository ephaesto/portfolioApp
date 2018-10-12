import { SET_NAV_ENVIRONMENT } from "../actions/actionTypes"

const initialState =  [
    { name : "Accueil", link : "/", id:1  } ,
    { name : "Compétence", link : "/competence", id:2 }
  ]


export default function NavLinksReducer(state = initialState, action){
  switch(action.type){
    case SET_NAV_ENVIRONMENT :
      if(action.payload === "admin" ){
        return [
          { name : "Accueil", link : "/", id:1  } ,
        ]
      }else{
        return [
          { name : "Accueil", link : "/", id:1  } ,
          { name : "Compétence", link : "/competence", id:2 }
        ]
      }
    default :
      return state
  }
}
