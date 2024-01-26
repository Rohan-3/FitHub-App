import { useState, useEffect } from "react";
const CreateBlog=()=>{

    const [data, setData] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const Post = ()=>{
        
        fetch("http://localhost:4000/Blogs",
        {
            method: "POST",
            body: JSON.stringify({
                title:title,
                description:description
            })
        })
        .then((data) => data.json())
        .then((data) => setData(data))
        .catch((err)=> console.log(err))
    }

   
    return(<>
          <h1>Create Blogs</h1>
          {console.log(title)}
          {console.log(description)}
    
    <div>
    
        <p><input type="text" placeholder="Enter your title" onChange={(e)=> setTitle(e.target.value)}/></p>

        <textarea placeholder="Enter your description" onChange={(e)=> setDescription(e.target.value)} style={{height:"300px", width:"900px"}}></textarea>
        <p><button onClick={Post}> Create/Post</button></p>
    </div>
    </>)

}

export default CreateBlog;