import { GET_LIST_CREA_TO_TECH } from "../actions/actionTypes"



export default function ListCreaToTechReducer(state = [], action){
  switch(action.type){
    case GET_LIST_CREA_TO_TECH :
      return [
            { id : 1,idTechno : 1,idCrea : 3},
            { id:2,idTechno : 2,idCrea : 3},
            { id:3,idTechno : 4,idCrea : 4},
            { id:4,idTechno : 6,idCrea : 1},
            { id:3,idTechno : 5,idCrea : 2}
          ]

    default :
      return state
  }
}
