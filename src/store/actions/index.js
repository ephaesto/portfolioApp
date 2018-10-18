import { SET_NAV_ENVIRONMENT,GET_LIST_TECHNO,GET_LIST_CREATION} from "./actionTypes"


export function selectNavEnvironment(NavEnv){
  return{
    type : SET_NAV_ENVIRONMENT,
    payload : NavEnv
  }
}

export function getListTechno(){
  return{
    type : GET_LIST_TECHNO

  }
}

export function getListCreation(){
  return{
    type : GET_LIST_CREATION
  }
}
