import React, { useState } from 'react'
import { LoginSuccess, LoginFailure } from '../Redux/Actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.user)
    console.log(userData,'hii')
    function handleLogin() {
        try {
            dispatch(LoginSuccess(userData))
            console.log(userData,'hello')
        } catch (error) {
            dispatch(LoginFailure)
        }
    }
    return (
        <div className='logincont'>
            <h1>Login Here</h1>
            <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
