import React, { useEffect, useState } from 'react'

import '../assets/styles/ResgistrationForm.css'

const ResgistrationForm = () => {
  
  let [userid,setUserid] = useState("");
  let [email,setEmail] = useState("");
  let [phone,setPhone] = useState(0);
  let [age,setAge] = useState(0);
  let [gender,setGender] = useState("male")
  let [height,setHeight] = useState(0);
  let [weight,setWeight] = useState(0);
  let [pass,setPass] = useState("");
  let [cpass,setCpass] = useState("");
  let [passmsg,setPassmsg] = useState("");
  let [BMI,setBMI] = useState(0);
  let [msg,setmsg] = useState("");
  let [users,setUsers] = useState(JSON.parse(localStorage.getItem("u"))||[]);

  const validForm=()=>
  {
    if(!userid || !email || !phone || !age || !height || !weight || !pass || !cpass )
    {
      alert("Please fill all fields");
      return false;
    }
    if (pass !== cpass)
    {
      alert("Passwords doesn't match, please re enter");
      return false;
    }
    return true;
  }
  useEffect(()=>{
    if( pass !== cpass)
    {
      setPassmsg("password doesnot match")
    }
    else
    {
      setPassmsg("")
    }
  },[cpass,pass])

  const calBMI=()=>
  {
    let h = height/100
    let bmi = (weight/(h * h)).toFixed(2);
    setBMI(bmi);
    console.log(`bmi:${BMI}`)
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
    else if( bmi >= 30)
    {
      setmsg("obese");
    }
  }
  const submit=(e)=>
  {
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
        let newuser = {userid,email,phone,age,gender,height,weight,pass,BMI};
        setUsers([...users,newuser]);
        localStorage.setItem("u",JSON.stringify([...users,newuser]));
        alert("Registered successful")
        console.log(`your BMI is ${BMI} and your weight is ${msg}`)
      }
    }
  }


  return (
    <div className='main'>
      <form className='form'>
        <h1>Resgistration</h1>
        <div className="field-group">
  <span >Username</span>
  <input className='leftsideInput' type="text" placeholder="username" required onChange={(e) => setUserid(e.target.value)} />
  <span className='rightsideInput' >Email</span>
  <input type="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} /><br></br>
</div>
<div className='field-group'>
  <span>Phone</span>
  <input type="number" placeholder="phone number" required onChange={(e) => setPhone(e.target.value)} />
  <span className='rightsideInput'>Age</span>
  <input type="number" placeholder="age" required onChange={(e) => setAge(e.target.value)} />
</div>
        
      <div className='field-group'>
       <span>height</span>
        <input type='number' placeholder='height in cms' required onChange={(e)=>setHeight(e.target.value)}/> 
        <span className='rightsideInput'>weight</span>
        <input type='number' placeholder='weight' required onChange={(e)=>setWeight(e.target.value)}/> <br/><br/>
      </div>
        <span>Password</span>
        <input className='leftsideInput' type='password' placeholder='password' required onChange={(e)=>setPass(e.target.value)}/><br/>
        <span > Confirm Password</span>
        <input className='leftsideInput' type='password' placeholder='re-enter password' required onChange={(e)=>setCpass(e.target.value)}/>
        <h5>{passmsg}</h5>
        <button onClick={submit}>submit</button>
      </form>
    </div>
  )
}

export default ResgistrationForm;