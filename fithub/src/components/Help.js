import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Help=(props)=>
{
    let [w,setW] =useState([]);
    let[d,setD] = useState([]);
    let [flag1,setFlag1] = useState(false);
    let [flag2,setFlag2] = useState(false);
    let [disbablebtn,setDisablebtn] = useState(false);

    const workouts=()=>
    {
      setW(props.actions.workouts());
      setDisablebtn(true);
      setFlag1(true)
    }

    const diet=()=>
    {
        setD(props.actions.diet());
        setDisablebtn(true);
        setFlag2(true);
   }

   const store=(diet)=>
   {
      localStorage.setItem("diet",JSON.stringify(diet))
   }

   

    return(<>
    
    <div style={{display:'flex'}}>
        <button className="otherbtn" onClick={workouts} disabled={disbablebtn}>Workout</button>
        <button className="otherbtn" onClick={diet} disabled={disbablebtn}>Diet</button>
    </div>
    <div style={{marginLeft:"53px",marginTop:"10px"}}>
        <table>
        {flag1 &&
    w.map((temp) => (
      <tr key={temp.video}>
        <td style={{border:"1px solid blueviolet", backgroundColor:"#f5c7f7", borderRadius:"5px", padding:"5px", width:"200px", textAlign:"center", fontWeight:"bolder", marginBottom:"10px"}}>
          <a
            href={temp.video}
            target="_blank"
            rel="noopener noreferrer"
            style={{color:"blueviolet"}}
          >
            {temp.title}
          </a>
        </td>
      </tr>
    ))}
        </table>
    </div>
    <div style={{marginLeft:"53px",marginTop:"10px"}}>
      <table  >
        {
          flag2?d.map((temp)=>{ store(temp.routine); return <tr><td style={{border:"1px solid blueviolet", borderRadius:"5px", padding:"5px", width:"200px", textAlign:"center", fontWeight:"bolder", backgroundColor:"#f5c7f7"}}><Link to="http://localhost:3000/botdiet" target="_blank" style={{color:"blueviolet"}} >{temp.category}</Link></td></tr>}) :null
        }
      </table>
      
    </div>
    </>)
}

export default Help;