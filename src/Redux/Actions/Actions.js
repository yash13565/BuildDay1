



export const SignupSuccess = (userData) => {
    console.log(userData,"actions")
   return (dispatch) =>{
    dispatch({
        type:'SIGNUP_SUCCESS',
        payload:userData,
    })
   }
}
export const LoginSuccess = (userData) => {
   return (dispatch) =>{
    dispatch({
        type:'LOGIN_SUCCESS',
        payload:userData,
    })
   }
}
export const SignupFailure = (err) => {
   return (dispatch) =>{
    dispatch({
        type:'SIGNUP_FAILURE',
        payload:err,
    })
   }
}
export const LoginFailure = (err) => {
   return (dispatch) =>{
    dispatch({
        type:'LOGIN_FAILURE',
        payload:err,
    })
   }
}
export const Logout = (userData)=>{
    return (dispatch)=>{
        dispatch({
            type:'LOGOUT',
            payload:userData,
        })
    }
}