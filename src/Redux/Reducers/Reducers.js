
const intialState = {
    user:[],
    error:null
}

export const reducers = (state=intialState,action)=>{
    switch(action.type){
        case "SIGNUP_SUCCESS":
        return {
            ...state,
           user:action.payload
        }
        case "LOGIN_SUCCESS":
        return {
            ...state,
           user:action.payload
        }
        case "SIGNUP_FAILURE":
        return {
            ...state,
            user:[],
           error:action.payload
        }
        case "LOGIN_FAILURE":
        return {
            ...state,
            user:[],
           error:action.payload
        }
        default: return state
    }
}