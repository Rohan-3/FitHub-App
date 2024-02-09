import { useEffect, useState } from "react";
import BMILineChart from "./BMI_Line_Chart";
import UserProfile from "./User_Profile";

const User=()=>
{
    const [Data,setData] = useState([]);
    const [userDetails,setUserDetails] = useState([])
    const [userData,setUserData] = useState({
        labels: [],
                datasets: [{
                    label: "",
                    data: [],
                }],
    })
    const [userWeight,setUserWeight] = useState({
        labels: [],
                datasets: [{
                    label: "",
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
   <UserProfile/>
   <div style={{display:"flex", columnGap:"6rem"}}>
   {Data.length > 0 ? <div style={{width:"700px",height:"600px"}}><BMILineChart chartData={userData}/></div>:<div>no data</div>}
   {Data.length > 0 ? <div style={{width:"700px",height:"600px"}}><BMILineChart chartData={userWeight}/></div>:<div>no data</div>}
   </div>
    </>)
}

export default User;