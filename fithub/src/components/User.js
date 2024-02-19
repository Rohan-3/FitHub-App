import { useState, useEffect } from "react";
import BarChart from "./BarChart";
import GChart from "./GChart";
import ChatBotModal from "./ChatBotModal";
import UserProfile from "./User_Profile";


const User=()=>
{
   let [data,setData] = useState([]);
   let [chartData,setchartData] = useState({})
   let [weight,setWeight] = useState();
   let [height, setHeight] = useState();
   let [bMI,setBMI] = useState(0);
   let [mssg,setMssg] = useState("");
   let [D,setDate] = useState("");
   let [b,setB] = useState({});
   

   const fetchData= async ()=>
   {
      try
      {
        let details = JSON.parse(localStorage.getItem("userno"));
         const response = await fetch("http://localhost:4000/BMIChart");
         const data = await response.json();
         setData(data.filter((temp)=>temp.phone==details.phoneno)); 
      }

      catch(error)
      {
        console.log(error);
      }
   }

   const createChart=()=>
   {
        setchartData({
            labels: data.map((temp) => temp.date), 
            datasets: [
              {
                label: "BMI",
                data: data.map((temp) => temp.BMI),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                ],
                borderColor: "black",
                borderWidth: 2
              }
            ]
         })
   }

   const ChangeDate=()=>
   {
      let d= D.split("-");
      let str="";
      for(let i=d.length-1;i>=0;i--)
      {
        if(i!==0)
        {
            let a = d[i].split("");
            for(let j=0;j<=1;j++)
            {
                if(j!=0 || a[0]!='0')
                {
                    str+=a[j]+"/";
                }
            }
        
        }
        else
        {
            str+=d[i];
        }
      }
      return str;
   }

   const bmi=()=>
   {
    let h=height/100;
    let b= weight/(h*h);
    setBMI(b.toFixed(2));
    if( b <= 18.5 )
    {
        setMssg("under weight");
    }
    else if( b > 18.5 && b <= 25 )
    {
        setMssg("normal weight");
    }
    else if( b > 25 && b <= 29.9 )
    {
        setMssg("over weight");
    }
    else 
    {
        setMssg("obese");
    }

   }

  

   const storeBmi=()=>
   {
     let details = JSON.parse(localStorage.getItem("userno"))
     let phone= details.phoneno;
     let date=ChangeDate();
     let BMI=bMI;
     let newbmi={phone,weight,height,BMI,date}
     fetch("http://localhost:4000/BMIChart",
         {
             method: "POST",
             body: JSON.stringify(newbmi)
         })
         .then((data) => data.json())
         .then((data) => console.log(data))
         .catch((err)=> console.log(err))

         setData([...data,newbmi])

         alert("Submitted Successfully!!!")
   }

   const showBmi = () => {
    if (data && data.length > 0) {
      let a = data[data.length - 1];
      setB(a);
    } else {
      setB(0); 
    }
  };

   useEffect(()=>{fetchData()},[]);

   useEffect(()=>{createChart();showBmi()},[data]);

   useEffect(() => {bmi(); }, [weight, height]);


   return(<>

   <h1>Logged in Successfully</h1>
   
   <UserProfile/>

   <ChatBotModal/>

      <div style={{display:"flex"}}>

     <div  style={{width:"500px", heigth:"300px"}}>
      {
      data.length>0?<BarChart chartData={chartData}/>:<h1>Data is loading</h1>
      }
     </div>

     <div style={{width:"500px", heigth:"300px"}}>
        <GChart bmi={b.BMI}/>
        <h3 >Your BMI is {b.BMI} </h3>
     </div>

     <div>
        
     </div>

     </div> 
   

    <div style={{width:"500px", heigth:"300px"}}>
      <h2>Track Your Fitness Progress Here !!!!</h2>

      <p>Enter you weight:<input type="number" onChange={(e)=>setWeight(e.target.value)}/></p>
      <p>Date:<input type="date" onChange={(e)=>setDate(e.target.value)}/></p>
      <p>Enter your height:<input type="number" onChange={(e)=>setHeight(e.target.value)}/></p>
      <p><button onClick={storeBmi}>Submit</button></p>

   </div> 
        
    </>)
}

export default User;