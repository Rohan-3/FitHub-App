import { useState,useEffect } from "react";
import BlogsCard from "./BlogsCard";
import '../assets/styles/CreateBlogs.css'

const Blogs=()=>
{
    
    let [data,setData] = useState([]);
   
    useEffect(()=>{
        fetch("http://localhost:4000/Blogs")
        .then((temp)=> temp.json())
        .then((temp) => setData(temp))
        .catch((err)=>console.log(err));
    },[])

    return(<>
      <div className="main">
          {
            [...data].reverse().map((temp)=> <BlogsCard title={temp.title} description={temp.description} dnt={temp.dnt} uname={temp.uname} id={temp.id} />)
          }
  
      </div>
          
      </>)
  
}

export default Blogs;