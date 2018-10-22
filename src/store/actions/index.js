import { SET_NAV_ENVIRONMENT,GET_LIST_TECHNO,GET_LIST_CREATION,GET_LIST_CREA_TO_TECH,SUBMIT_EMAIL_CONTACT,GET_ACCUEIL} from "./actionTypes"


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

export function getListCreaToTech(){
  return{
    type : GET_LIST_CREA_TO_TECH
  }
}


export function submitEmailContact(credentials){
  console.log(credentials)
  return{
    type : SUBMIT_EMAIL_CONTACT
  }
}


export function getAcceuil(){
  return{
    type : GET_ACCUEIL
  }
}
