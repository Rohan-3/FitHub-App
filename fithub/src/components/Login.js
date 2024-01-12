import React from 'react'
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
const Login = () => {

  const [otp, setOtp] = useState('');
  const [value, setValue] = useState()
  return (
    <div>
      <div>
      <h1>Login with your Phone Number</h1>
      <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
      <button>Send OTP</button>
      </div>
      <div>
        <h1>Verify OTP</h1>
        <OtpInput
        value={otp}
         numInputs={6}
        renderSeparator={<pre> </pre>}
        renderInput={(props) => <input {...props} />}
    />
        <button>Verify OTP</button>
      </div>
    </div>
  )
}

export default Login