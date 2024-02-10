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
  let admin=["+919967990416"]
  

  const nav= useNavigate();

  const sendOtp=async()=>
  {
    
      try
      {
        const phoneNumber = "+" + phone;
      
        let userData = JSON.parse(localStorage.getItem("u")) || []; 
        let filteredUser = userData.filter((temp)=> temp.phone === phone);
        let adminlogin=admin.filter((temp)=>temp===phone);
        console.log(`adminno:${adminlogin}`);
        console.log(`userno:${filteredUser}`);

        if (filteredUser.length===0 && adminlogin.length===0 )
        {
          alert("Register FIRST !")
        }
        else
        {
          const recaptcha =new RecaptchaVerifier(auth,"recaptcha",{size:"invisible"})
          const confirmationResult = await signInWithPhoneNumber(auth,phoneNumber,recaptcha)
          console.log(confirmationResult)
          setUser(confirmationResult)
          setFlag(true)
        }
      }
      catch(err)
      {
        console.log(err)
      }
  }

  const verifyOtp=async()=>
  {
    alert("PReesed OTP")
    try
    {
      // phone==="+919967990416" || 
      await  user.confirm(otp)
      let adminlogin=admin.filter((temp)=>temp===phone);
      console.log(`adminlogin in otp ${adminlogin}`)
      if (adminlogin.length!==0)
      {
        localStorage.setItem('adminno', phone)
        nav("/admin")
      }
      else
      {
        let ldata=JSON.parse(localStorage.getItem('u'));
        let data=ldata.filter((temp)=>temp.phone===phone);
        let login={phoneno:phone,userid:data[0].userid}
        localStorage.setItem('userno',JSON.stringify(login))
        nav("/user")
      }
        
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
            onKeyDown={(e) => {
          if (e.key === "Enter")
          sendOtp();
        }}
          />
          <button onClick={sendOtp}>Send OTP</button>
      
        </div>

      }
      
      <div id="recaptcha"></div>
    </div>
  )
}

export default Login