
import { useState } from "react";
import '../assets/styles/Diet.css';

const BotDiet=()=>
{
    let routine= JSON.parse(localStorage.getItem("diet"))
    console.log(routine)
   let [count,setCount] = useState(1)
   let [add,setAdd] = useState("visible")
   let [sub,setSub] = useState("hidden")

   const addCount=()=>
   {
      if(count<routine.days.length)
      {
         let c=count+1
         setCount(c)
         if(c==routine.days.length)
         {
            setAdd("hidden")
         }
      }
      setSub("visible")
   }

   const subCount=()=>
   {
      if(count>1)
      {
         let c=count-1
         setCount(c)
        if(c==1)
        {
            setSub("hidden")
        }
      }
      setAdd("visible")
   }


    return(<>

<div className="dietPlan">

<h1 className="days">Day{count}</h1>
<table className="dietTable">

<tr className="dietRow"><th>Time</th><th>Diet</th></tr>

{
  routine.days.filter((temp) => temp.d==count)
  .map((temp)=>temp.day.map((t)=><tr className="dietRow" > <td className="timecol">{t.time}</td><td className="dietcol">{t.diet}</td></tr>))
}   

<div className="dietButton">
<button onClick={subCount} style={{visibility:sub}} className="prev">Previous</button><button onClick={addCount} style={{visibility:add}} className="next">Next</button>
</div>

</table>



</div>
    
    
    </>)
}

export default BotDiet;