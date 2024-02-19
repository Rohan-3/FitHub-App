
import { useState } from "react";


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

<div>

<h1>Day{count}</h1>
<table border="2px solid">

<tr><th>Time</th><th>Diet</th></tr>

{
  routine.days.filter((temp) => temp.d==count)
  .map((temp)=>temp.day.map((t)=><tr> <td>{t.time}</td><td>{t.diet}</td></tr>))
}   

</table>

<button onClick={subCount} style={{visibility:sub}}>Previous</button><button onClick={addCount} style={{visibility:add}}>Next</button>

</div>
    
    
    </>)
}

export default BotDiet;