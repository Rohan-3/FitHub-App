import { useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
const WorkoutVideo=()=>
{
    let [data,setData] = useState([])
    useEffect(()=>{
       fetch("../workout.json")
       .then((temp)=> temp.json())
       .then((temp) => setData(temp))
       .catch((err)=>console.log(err))
   },[])
    let k= useLocation();
    let {video} = k.state;
    
    return(<div>
    
    <iframe width="800" height="600" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

    </iframe>
    
    </div>)
}

export default WorkoutVideo;