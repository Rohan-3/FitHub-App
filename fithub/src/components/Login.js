import React from 'react'
import OtpInput from 'react-otp-input';
import { auth } from './Firebase';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  
  const [phone,setPhone] = useState("");
  const [user,setUser] = useState(null);
  const [otp,setOtp] = useState("");
  let [flag,setFlag] = useState(false);
  const nav= useNavigate();
  const sendOtp=async()=>
  {
     try
     {
      const phoneNumber = "+" + phone;
      const recaptcha =new RecaptchaVerifier(auth,"recaptcha",{})
      const confirmationResult = await signInWithPhoneNumber(auth,phoneNumber,recaptcha)
      console.log(confirmationResult)
      setUser(confirmationResult)
      setFlag(true)
     }
     catch(err)
     {
        console.log(err)
     }
  }

  const verifyOtp=async()=>
  {
    try
    {
      await  user.confirm(otp)
      nav("/user")
        
    }
    catch(err)
    {
       console.log(err);
    }
  }

  return (
    <div>
      {
        flag  ? 
        <div>
        <h1>Verify OTP</h1>
        <OtpInput
         numInputs={6}
         value={otp}
         onChange={setOtp}
        renderSeparator={<pre> </pre>}
        renderInput={(props) => <input {...props} />}
    />
        <button onClick={verifyOtp} >Verify OTP</button>
      </div>
      :
       
      <div>
      <h1>Login with your Phone Number</h1>
      <PhoneInput
      placeholder="Enter phone number"
      country={"in"}
      value={phone}
      onChange={setPhone}
      />
      <button onClick={sendOtp}>Send OTP</button>
      
      </div>

      }
      
      <div id="recaptcha"></div>
    </div>
  )
}

export default Login