import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
      <h1>Login with your Phone Number</h1>
      <input type="text" placeholder='Enter your phone number'/>
      <button>Send OTP</button>
      </div>
      <div>
        <h1>Verify OTP</h1>
        <input type="text" placeholder="Enter OTP" />
        <button>Verify OTP</button>
      </div>
    </div>
  )
}

export default Login