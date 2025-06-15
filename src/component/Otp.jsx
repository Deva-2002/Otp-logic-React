import React, { useEffect, useRef, useState } from 'react';

const Otp = ({ phoneNumber, length }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const otpRef = useRef([]);

  useEffect(() => {
    otpRef.current[0]?.focus();
  }, []);

  function keyHandler(index, e) {
    if (e.key === "Enter" || e.key === "ArrowRight") {
      if (index < length - 1) {
        otpRef.current[index + 1]?.focus();
      }
    }

    if (e.key === "Backspace") {
      if (index > 0 && !otp[index]) {
        otpRef.current[index - 1]?.focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      otpRef.current[index - 1]?.focus();
    }
  }

  function valueHandler(e, index) {
    const val = e.target.value;
    if (!/^[0-9a-zA-Z]?$/.test(val)) return; 

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (val && index < length - 1) {
      otpRef.current[index + 1]?.focus();
    }
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-400'>
      <div className='h-[90%] w-[90%] bg-slate-100 rounded-xl flex flex-col justify-center items-center'>
        <div className='text-lg font-bold'>OTP sent to {phoneNumber}</div>
        <div className='flex gap-2 mt-5'>
          {otp.map((val, index) => (
            <input
              key={index}
              type='text'
              maxLength={1}
              value={val}
              onChange={(e) => valueHandler(e, index)}
              ref={(el) => (otpRef.current[index] = el)}
              className='h-12 w-12 text-center text-xl rounded-xl p-3 border border-black'
              onKeyDown={(e) => keyHandler(index, e)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Otp;
