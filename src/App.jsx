import React, { useState } from 'react'
import PhoneNumber from './component/PhoneNumber'
import { Route, Routes } from 'react-router-dom'
import Otp from './component/Otp';

const App = () => {

  const [phoneNumber,setPhoneNumber]=useState(0);

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-400'>
      <div className='h-[90%] w-[90%] bg-slate-100 rounded-xl flex justify-center items-center'>
        <Routes>
        <Route path='/' element={<PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>}></Route>
        <Route path='/otp' element={<Otp length={5} phoneNumber={phoneNumber}/>}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
