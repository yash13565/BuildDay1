import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Logout } from '../Redux/Actions/Actions'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  const { user } = useSelector((state) => state.reducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  function handleLogout(){
    // alert('hii')
    dispatch(Logout());
    alert('logout success')
    navigate('/')
  }

  return (
    <>
      <h1>Welcome User , {user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;

