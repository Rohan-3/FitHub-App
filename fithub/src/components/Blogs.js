import { useState,useEffect } from "react";
import BlogsCard from "./BlogsCard";
import CreateBlog from "./Create_Blog";
const Blogs=()=>
{
    let [data,setData] = useState([]);
    useEffect(()=>{
        fetch("../blogs.json")
        .then((temp)=> temp.json())
        .then((temp) => setData(temp))
        .catch((err)=>console.log(err));
    },[])

    const addBlog=(data1)=>
    {
        setData([...data,data1])
    }

    return(<>

      <CreateBlog addBlog={addBlog}/>
           
    {
        data.map((temp)=><BlogsCard uname={temp.uname} dnt={temp.dnt} title={temp.title} description={temp.description} />)
    }
    </>)
}

export default Blogs;