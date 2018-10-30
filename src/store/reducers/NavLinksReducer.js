import { SET_NAV_ENVIRONMENT } from "../actions/actionTypes"

const initialState =  [
    { name : "Bienvenue ", link : "/", id:1  } ,
    { name : "Mes Compétences", link : "/competence", id:2 },
    { name : "Mes Créations", link : "/listCreation", id:3 },
    { name : "Contactez-moi", link : "/contact", id:4 }
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
            { name : "Bienvenue ", link : "/", id:1  } ,
            { name : "Mes Compétences", link : "/competence", id:2 },
            { name : "Mes Créations", link : "/listCreation", id:3 },
            { name : "Contactez-moi", link : "/contact", id:4 }
          ]
      }
    default :
      return state
  }
}
