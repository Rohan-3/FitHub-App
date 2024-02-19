
import { useLocation } from "react-router-dom"
const WorkoutVideo=()=>
{
    let k= useLocation();
    let {video} = k.state;
    
    return(<div style={{position:'relative'}}>
    
    <iframe width="100%" height="600vh" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

    </iframe>
    
    </div>)
}

export default WorkoutVideo;