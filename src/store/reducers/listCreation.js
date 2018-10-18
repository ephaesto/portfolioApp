import { GET_LIST_TECHNO } from "../actions/actionTypes"



export default function NavLinksReducer(state = [], action){
  switch(action.type){
    case GET_LIST_TECHNO :
      return [
            { id:1,  name : "billeterie du louvre",idTechno:6},
            { id:1,  name : "Billlet simple pour l'alaska",idTechno:5},
            { id:1,  name : "Mairie de Yenne",idTechno:1}
          ]

    default :
      return state
  }
}
