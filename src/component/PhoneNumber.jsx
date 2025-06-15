import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PhoneNumber = ({ phoneNumber, setPhoneNumber }) => {

    const [inputVal, setInputVal] = useState("");
    const navigate = useNavigate();

    function handlePhoneNumber() {
        if (!inputVal) return
        if (inputVal.length < 10 && inputVal.length > 10) return;
        setPhoneNumber(inputVal);
        navigate('/otp')
    }

    function keyHandler(e) {
        if (e.key === "Enter") {
            if (!inputVal) return
            if (inputVal.length < 10 && inputVal.length > 10) return;
            setPhoneNumber(inputVal);
            navigate('/otp')
        }
    }

    return (
        <div>
            <div className='font-bold text-xl mb-3'>Enter Phone Number</div>
            <input onKeyDown={(e) => keyHandler(e)} onChange={(e) => setInputVal(e.target.value)} className='w-[100%] p-3 border border-slate-400 rounded-xl' type='string'></input>
            <button onClick={() => handlePhoneNumber()} className='p-2 flex justify-center rounded-xl bg-slate-600 text-white w-[100%] mt-5'>Submit</button>
        </div>
    )
}

export default PhoneNumber
