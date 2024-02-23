import React from 'react'
import { useEffect, useState } from 'react'
import '../assets/styles/ResgistrationForm.css'
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-number-input'
import { MdVerified } from "react-icons/md";
import { auth } from './Firebase';
import { useRef } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth';


const ResgistrationForm = () => {
  
  let [userid,setUserid] = useState("");
  // let [email,setEmail] = useState("");
  let [phone,setPhone] = useState(0);
  let [age,setAge] = useState(0);
  const [otp,setOtp] = useState("");
  const [user,setUser] = useState(null);
  let [gender,setGender] = useState("")
  let [height,setHeight] = useState(0);
  let [weight,setWeight] = useState(0);
  let [BMI,setBMI] = useState(0);
  let [msg,setmsg] = useState("");
  let [users,setUsers] = useState(JSON.parse(localStorage.getItem("u"))||[]);
  let [mssg,setMssg] =useState("");
  const myRef = useRef(null);
  let [flag, setFlag] = useState(false);
  let [send, setSend] = useState(true);
  let [resend,setResend] = useState(false);
  let [sub,setSub] = useState(false);
  let [logo,setLogo] = useState(false);
  // var recaptchaWidgetId;

  const validForm=()=>
  {
    if(!userid || !phone || !age || !height || !weight )
    {
      alert("Please fill all fields");
      return false;
    }

    return true;
  }

  const sendOtp=async()=>
  {
    
      try
      {
        setFlag(true);
        setSend(false);
        setResend(true);
        const phoneNumber = "+" + phone;
        const recaptcha =new RecaptchaVerifier(auth,"recaptcha",{size:"invisible"})
        //recaptchaWidgetId = await recaptcha.render();
        const confirmationResult = await signInWithPhoneNumber(auth,phoneNumber,recaptcha)
          console.log(confirmationResult)
          setUser(confirmationResult)
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
      setFlag(false)
      setResend(false)
      setSub(true)
      setLogo(true) 
    }
    catch(err)
    {
      setMssg("Incorrect OTP, please try again!!!!")
      // clearCaptcha();
      console.log(err);
    }
  }

  // const clearCaptcha=()=>
  // {
  //   myRef.current.innerHTML = "";
  //   myRef.current = document.createElement("div");
  //   myRef.current.id = "captcha";
  // }

  const resendOtp=async()=>
  {
    try
    {
      const phoneNumber = "+" + phone;
      const recaptcha =new RecaptchaVerifier(auth,"recaptcha-resend",{size:"invisible"})
      // recaptcha.reset(recaptchaWidgetId);
      // recaptchaWidgetId = await recaptcha.render();
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
      console.log(confirmationResult)
      setUser(confirmationResult)
    }
    catch(err)
    {
      console.log(err)
    }
  }

  useEffect(() => {
    calBMI();
  }, [weight, height]);
  
  const calBMI=()=>
  {
    let h=height/100;
    let bmi=weight/(h*h);
    setBMI((weight/(h*h)).toFixed(2));
    if( bmi <= 18.5 )
    {
      setmsg("under weight");
    }
    else if( bmi > 18.5 && bmi <= 25 )
    {
      setmsg("normal weight");
    }
    else if( bmi > 25 && bmi <= 29.9 )
    {
      setmsg("over weight");
    }
    else 
    {
      setmsg("obese");
    }
  }

  const storeBmi=()=>
  {
    let d = new Date();
    let date=d.toLocaleDateString();
    let newbmi={phone,weight,height,BMI,date}
    fetch("http://localhost:4000/BMIChart",
        {
            method: "POST",
            body: JSON.stringify(newbmi)
        })
        .then((data) => data.json())
        .then((data) => console.log(data))
        .catch((err)=> console.log(err))
  }
  const submit=(e)=>
  {
    console.log();
    e.preventDefault();
    if(!validForm())
    {
      return;
    }
    else
    {
      let data=users.filter((temp)=>temp.phone===phone);
      if(data.length>0)
      {
        alert("user already exist, please retry with new user id");
      }
      else
      {
        let newuser = {userid,phone,age,gender,height,weight,BMI};
        setUsers([...users,newuser]);
        localStorage.setItem("u",JSON.stringify([...users,newuser]));
        storeBmi();
        alert("Registered successful")
        console.log(`your BMI is ${BMI} and your weight is ${mssg}`)
      }
    }
  }


  return (
    <div>
    
    <div className='main'>
      <form className='regis-form'>
      <h2 className='register-Header'>Register Here !</h2>
     <div className='segregate'>
  
      <div className='leftsideForm'>
        <label>Username</label> <br/>
        <input className='regis-inp' type='text' placeholder='username' required onChange={(e)=>setUserid(e.target.value)}/> <br/>
        {/* <label>Email</label> <br/>
        <input type='email' placeholder='email' required onChange={(e)=>setEmail(e.target.value)}/> <br/> */}
        
        <label>age</label> <br/>
        <input className='regis-inp' type='number' placeholder='age' required onChange={(e)=>setAge(e.target.value)}/> <br/>
        <label>gender</label> <br/>
        <select className='gender' name="gender" onChange={(e)=>setGender(e.target.value)}>
          <option>Select</option>
          <option value="Male" >Male</option>
          <option value="Female">Female</option>
        </select>
        <br></br>
        
        
        </div>

       <div className='rightsideForm'>      
          <label>height (in cms)</label> <br/>
          <input className='regis-inp' type='number' placeholder='height in cms' required onChange={(e)=>setHeight(parseInt(e.target.value))}/> <br/>
          <label>weight</label> <br/>
          <input className='regis-inp' type='number' placeholder='weight' required onChange={(e)=>setWeight(parseInt(e.target.value))}/> <br/>


          <div className='radioBtn'>
          <label className='phone-number-label'>Phone Number</label> <br/>
          <div>
          <PhoneInput
            placeholder="Enter phone number"
            country={"in"}
            value={phone}
            onChange={setPhone}
          /> <span style={{visibility: logo ? "visible" : "hidden" }}><MdVerified /></span> <br/>
          <div id="recaptcha"></div>
          <div id="recaptcha-resend"></div>
          <div>
          
              <button type='button' className='sendOTP' onClick={resendOtp} style={{visibility: resend ? "visible" : "hidden" }}>Re-send OTP</button> 
              <button type='button' className='sendOTP' onClick={sendOtp} style={{visibility: send ? "visible" : "hidden" }}>Send OTP</button>
          <br/>
          <div style={{visibility: flag ? "visible" : "hidden" }}>
          <label>Enter OTP</label>
          <OtpInput
          className='regis-inp'
            numInputs={6}
            value={otp}
            onChange={setOtp}
            renderSeparator={<pre> </pre>}
            renderInput={(props) => <input {...props} />}
          />
          <p>{mssg}</p>
          <button type='button' onClick={verifyOtp}>Verify OTP</button>
          </div> 
          </div>
          </div>        
          </div>
            

          </div>
          </div>
          <button className='regisBtn' onClick={submit} style={{visibility: sub ? "visible" : "hidden" }}>submit</button>
                </form>
          
    </div>
    </div>
  )
}

export default ResgistrationForm;