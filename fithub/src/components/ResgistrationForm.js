import React from 'react'
import { useEffect, useState } from 'react'
import '../assets/styles/ResgistrationForm.css'
import { auth } from './Firebase';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const ResgistrationForm = () => {
  
  let [userid,setUserid] = useState("");
  let [email,setEmail] = useState("");
  let [phone,setPhone] = useState(0);
  let [age,setAge] = useState(0);
  let [gender,setGender] = useState("")
  let [height,setHeight] = useState(0);
  let [weight,setWeight] = useState(0);
  let [BMI,setBMI] = useState(0);
  let [msg,setmsg] = useState("");
  let [users,setUsers] = useState(JSON.parse(localStorage.getItem("u"))||[]);

  const validForm=()=>
  {
    if(!userid || !email || !phone || !age || !height || !weight )
    {
      alert("Please fill all fields");
      return false;
    }

    return true;
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
      let data=users.filter((temp)=>temp.userid===userid);
      if(data.length>0)
      {
        alert("user already exist, please retry with new user id");
      }
      else
      {
        calBMI();
        let newuser = {userid,email,phone,age,gender,height,weight,BMI};
        setUsers([...users,newuser]);
        localStorage.setItem("u",JSON.stringify([...users,newuser]));
        alert("Registered successful")
        console.log(`your BMI is ${BMI} and your weight is ${msg}`)
      }
    }
  }


  return (
    <div>
    <div className='main'>
      <form className='form'>
      <h1 className='register-Header'>Register Here !</h1>
  <div className='segregate'>
  
      <div className='leftsideForm'>
        <label>Username</label> <br/>
        <input type='text' placeholder='username' required onChange={(e)=>setUserid(e.target.value)}/> <br/>
        <label>Email</label> <br/>
        <input type='email' placeholder='email' required onChange={(e)=>setEmail(e.target.value)}/> <br/>
        
        <label>age</label> <br/>
        <input type='number' placeholder='age' required onChange={(e)=>setAge(e.target.value)}/> <br/>
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
          <input type='number' placeholder='height in cms' required onChange={(e)=>setHeight(parseInt(e.target.value))}/> <br/>
          <label>weight</label> <br/>
          <input type='number' placeholder='weight' required onChange={(e)=>setWeight(parseInt(e.target.value))}/> <br/>


          <div className='radioBtn'>
          <label>Phone Number</label> <br/>
        <input type='text' placeholder='phone number' required onChange={(e)=>setPhone(e.target.value)}/> <br/>
        <button className='sendOTP'>Send OTP</button>
          
          </div>
          

        </div>
</div>
<button className='regisBtn' onClick={submit}>submit</button>
      </form>
          
    </div>
    </div>
  )
}

export default ResgistrationForm;