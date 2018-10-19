import { GET_LIST_TECHNO } from "../actions/actionTypes"



export default function NavLinksReducer(state = [], action){
  switch(action.type){
    case GET_LIST_TECHNO :
      return [
            { id:1,  name : "billeterie du louvre"},
            { id:2,  name : "Billlet simple pour l'alaska"},
            { id:3,  name : "Mairie de Yenne"},
            { id:4,  name : "Portfolio"}
          ]

    default :
      return state
  }
}
