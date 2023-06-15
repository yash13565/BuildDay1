import './App.css';
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { Provider, useSelector } from 'react-redux';
import { store } from './Redux/Store/Store';


function AppRouter() {
   const navigate = useNavigate()
   const{ user} = useSelector(state=>state.reducers)
   console.log(user,'appuser')
  const [isauth,setIsAuth]= useState(true)

  
  useEffect(()=>{
    setIsAuth(user.email)
  },[user])


   useEffect(()=>{
 if(!isauth){
   navigate('/')
}
  },[isauth,navigate])



  return (

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<SignUp/>}/>
        {
          isauth?
        <Route path='/home' element={<Home/>}/>:null
        }
      </Routes>
   
  );

}

function App(){
  return(
  <BrowserRouter>
  <AppRouter/>
  </BrowserRouter>)
}
 function wrapper(){
  return(
  <Provider store={store}>
    <App/>
  </Provider>)
 }
 export default wrapper;