import React, { useState } from 'react'
import './../App.css'
import { useDispatch } from 'react-redux'
import { SignupSuccess, SignupFailure } from '../Redux/Actions/Actions'
import { useNavigate } from 'react-router-dom'
function SignUp() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if (fname === '' || lname === '' || email === '' || password === '') {
            alert('Please fill in all fields');
            return;
          }
        const userData = {
            fname: fname,
            lname: lname,
            email: email,
            password: password
        }
        try {
            dispatch(SignupSuccess(userData))
            alert("Register Successfully")
            setFname('')
            setLname('')
            setEmail('')
            setPassword('')
            navigate('/login')
            console.log(userData,"signup")
        } catch (error) {
            dispatch(SignupFailure)
        }
    }
    return (
        <>
            <div className='signupcont'>
                <h1>SignUp Here</h1>
                <form onSubmit={handleSubmit}>
          <input type='text' placeholder='FirstName' value={fname} onChange={(e) => setFname(e.target.value)} required />
          <input type='text' placeholder='LastName' value={lname} onChange={(e) => setLname(e.target.value)} required />
          <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type='submit'>Signup</button>
        </form>
            </div>
        </>
    )
}

export default SignUp
