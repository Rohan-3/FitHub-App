import { useEffect, useState } from "react";
import BMILineChart from "./BMI_Line_Chart";

const User=()=>
{
    const [Data,setData] = useState([]);
    let [userDetails,setUserDetails] = useState([])
    const [userData,setUserData] = useState({
        labels: [],
                datasets: [{
                    label: "User BMI",
                    data: [],
                }],
    })
    const [userWeight,setUserWeight] = useState({
        labels: [],
                datasets: [{
                    label: "User Weight",
                    data: [],
                }],
    })
    useEffect(()=>{
        fetch("http://localhost:4000/BMIChart")
        .then((temp)=> temp.json())
        .then((temp) => setData(temp))
        .catch((err)=>console.log(err));
        setUserDetails(JSON.parse(localStorage.getItem("userno")))
    },[])

   
    useEffect(()=>{
        let data1=Data.filter((temp)=>temp.phone===userDetails.phoneno)
        setUserData(
            {
                labels: data1.map((temp)=>temp.date),
                datasets: [{
                    label: "BMI",
                    data: data1.map((temp)=>temp.BMI),
                }],
            }
        );
    },[Data])

    useEffect(()=>{
        let data1=Data.filter((temp)=>temp.phone===userDetails.phoneno)
        setUserWeight(
            {
                labels: data1.map((temp)=>temp.date),
                datasets: [{
                    label: "Weight",
                    data: data1.map((temp)=>temp.weight),
                }],
            }
        );
    },[Data])

   return(<>
   <h1>Login Successfully</h1>
   <div style={{display:"flex", columnGap:"6rem"}}>
   {Data.length > 0 ? <div style={{width:"700px",height:"600px"}}><BMILineChart chartData={userData}/></div>:<div>no data</div>}
   {Data.length > 0 ? <div style={{width:"700px",height:"600px"}}><BMILineChart chartData={userWeight}/></div>:<div>no data</div>}
   </div>
   
   
    </>)
}

export default User;