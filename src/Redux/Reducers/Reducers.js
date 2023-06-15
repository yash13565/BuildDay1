
const intialState = {
    user:[],
    error:null,
    isAuthenticated:false,
}

export const reducers = (state=intialState,action)=>{
    switch(action.type){
        case "SIGNUP_SUCCESS":
        return {
            ...state,
           user:action.payload,
           isAuthenticated:true
        }
        case "LOGIN_SUCCESS":
        return {
            ...state,
           user:action.payload,
           isAuthenticated:true
        }
        case "SIGNUP_FAILURE":
        return {
            ...state,
            user:[],
           error:action.payload,
           isAuthenticated:false
        }
        case "LOGIN_FAILURE":
        return {
            ...state,
            user:[],
           error:action.payload,
           isAuthenticated:false
        }
        case "LOGOUT":
            return{
                ...state,
                user:[],
                isAuthenticated:false
            }
        default: return state
    }
}