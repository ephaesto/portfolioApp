import axios from "axios"
import { SET_NAV_ENVIRONMENT,
  GET_LIST_TECHNO,
  GET_LIST_CREATION,
  GET_LIST_CREA_TO_TECH,
  SUBMIT_EMAIL_CONTACT,
  GET_ACCUEIL,
  GET_CREATION} from "./actionTypes"

const END_POINT ="http://localhost:8000"

export function getAcceuil(id){
    return function(dispatch){
        axios.get(`${END_POINT}/api/accueils/${id}`, { headers: { Accept: "application/json"} }).then((response)=>{
          dispatch({type :GET_ACCUEIL, payload : response.data})
        })
      }

}
export function selectNavEnvironment(NavEnv){
  return{
    type : SET_NAV_ENVIRONMENT,
    payload : NavEnv
  }
}

export function getListTechno(){
  return function(dispatch){
      axios.get(`${END_POINT}/api/technos`, { headers: { Accept: "application/json"} }).then((response)=>{
        dispatch({type :GET_LIST_TECHNO, payload : response.data})
      })
    }
}



export function getListCreation(){
  return function(dispatch){
      axios.get(`${END_POINT}/api/creations`, { headers: { Accept: "application/json"} }).then((response)=>{
        dispatch({type :GET_LIST_CREATION, payload : response.data})
      })
    }
}

export function getCreation(id){
  return function(dispatch){
      axios.get(`${END_POINT}/api/creations/${id}`, { headers: { Accept: "application/json"} }).then((response)=>{
        dispatch({type :GET_CREATION, payload : response.data})
      })
    }
}

export function getListCreaToTech(){
  return function(dispatch){
      axios.get(`${END_POINT}/api/crea_to_teches`, { headers: { Accept: "application/json"} }).then((response)=>{
        response.data=response.data.map((data)=>{
          data.idTechno =data.idTechno.split('/')
          data.idTechno = parseInt(data.idTechno[data.idTechno.length - 1])
          data.idCrea =data.idCrea.split('/')
          data.idCrea =parseInt(data.idCrea[data.idCrea.length - 1])
          return data
        })
        dispatch({type :GET_LIST_CREA_TO_TECH, payload : response.data})
      })
    }
}


export function submitEmailContact(email){
  return function(dispatch){
      axios.post(`${END_POINT}/api/contact/email`,
        {
          name: email.name,
          email: email.email,
          subject: email.subject,
          message: email.message
        }
      ).then((response)=>{
        const myData = {
          name:"",
          email:"",
          subject:"",
          message:""
        }
        dispatch({type :SUBMIT_EMAIL_CONTACT, payload : myData })
      })
    }
}
