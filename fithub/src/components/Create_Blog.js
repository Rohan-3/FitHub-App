import { useState, useEffect } from "react";
const CreateBlog=()=>
{
    

    let [title,setTitle] = useState("");
    let [description,setDes] = useState("");
    let [data,setData] = useState([]);
    let [blog,setBlog] = useState();

    useEffect(()=>{
        fetch("http://localhost:4000/Blogs", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        blog
        })
        }).then(response => response.json())
        .then(console.log(data))
            },[])

            useEffect(()=>{
                fetch("http://localhost:4000/Blogs")
                .then((temp)=> temp.json())
                .then((temp) => setData(temp))
                .catch((err)=>console.log(err));
            },[])
    
    const post=()=>
   {
      let details = JSON.parse(localStorage.getItem("userno"))
      let d= new Date();
      let dnt = d.toLocaleString();
      let id=data.length>0?data[data.length-1].id+1:1;
       setBlog({id:id,uname:details.userid,dnt:dnt,title:title,description:description})
      console.log(data);
      setData([blog,...data])
      
      alert("Posted successfully")
   }
    return(<>
    
    <div>
        <p><input type="text" placeholder="Enter your title" onChange={(e)=>setTitle(e.target.value)}/></p>
        <textarea placeholder="Enter your description" style={{height:"300px", width:"900px"}} onChange={(e)=>setDes(e.target.value)}></textarea>
        <p><button onClick={post}>Post</button></p>
    </div>
    </>)
}

export default CreateBlog;