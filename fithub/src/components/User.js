import { useEffect, useState } from "react";
import BMILineChart from "./BMI_Line_Chart";

const User=()=>
{
    let [Data,setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/BMIChart")
        .then((temp)=> temp.json())
        .then((temp) => setData(temp))
        .catch((err)=>console.log(err));
    },[])

   const [userData,setUserData] = useState()

   const linedata=()=>
   {
        setUserData(
            {
                labels: Data.map((temp)=>temp.date),
                datasets: [{
                    label: "User BMI",
                    data: Data.map((temp)=>temp.BMI),
                }],
            }
        )
        return(userData)
   }

   return(<>
   <h1>Login Successfully</h1>
   
   {Data.length > 0 ? <div><BMILineChart chartData={linedata}/>{console.log('no data')}</div>:null}
   {console.log(Data)}
    
    </>)
}

export default User;