import "../App.css";
import { useState } from "react";

const Start=(props)=>
{
    let [disbablebtn,setDisablebtn] = useState(false);

    const initialAction=()=>
    {
        props.actions.initialAction();
        setDisablebtn(true);
    }

    return(<>
    
     <button  className="StartBtn" onClick={()=>initialAction()} disabled={disbablebtn}>Let's get started</button>
       
    
    </>)
}

export default Start;