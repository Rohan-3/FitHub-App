import { useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
const WorkoutVideo=()=>
{
    let [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/workouts")
       .then((temp)=> temp.json())
       .then((temp) => setData(temp))
       .catch((err)=>console.log(err))
   },[])
    let k= useLocation();
    let {video} = k.state;
    
    return(<div style={{position:'relative', top:'40px'}}>
    
    <iframe width="100%" height="800vh" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

    </iframe>
    
    </div>)
}

export default WorkoutVideo;