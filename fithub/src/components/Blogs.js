import { useState,useEffect } from "react";
import BlogsCard from "./BlogsCard";

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
      
          <h1>Display Blogs</h1>
          {
            data.map((temp)=> <BlogsCard title={temp.title} description={temp.description} />)
          }
  
      </>)
  
}

export default Blogs;