import { SET_NAV_ENVIRONMENT} from "./actionTypes"

export function selectNavEnvironment(NavEnv){
  return{
    type : SET_NAV_ENVIRONMENT,
    payload : NavEnv
  }
}
