import React, { useState } from 'react'
import { LoginSuccess, LoginFailure } from '../Redux/Actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector((state) =>state.reducers)
    console.log(user,'hii')
    function handleLogin() {
        const validCredentials = {
            email:email,
            password:password,
        }
        if(user && user.email === validCredentials.email && user.password === validCredentials.password){
        try {
            dispatch(LoginSuccess(user))
            console.log(user,'hello')
            alert('Sucessfully Login')
            navigate('/home')
        } catch (error) {
            dispatch(LoginFailure)
            alert('Login Failed Invalid Credentials')
        }
    }else{
        alert('Login Failed Invalid Credentials')
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
