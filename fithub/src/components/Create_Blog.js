import { useState, useEffect } from "react";
const CreateBlog=()=>
{

    let [title,setTitle] = useState("");
    let [description,setDes] = useState("");
    let [data2,setData2] = useState([]);
    useEffect(()=>{
        fetch("../blogs.json")
        .then((temp)=> temp.json())
        .then((temp) => setData2(temp))
        .catch((err)=>console.log(err));
    },[])

   

    const post=()=>
    {
        let details = JSON.parse(localStorage.getItem("userno"));
        console.log(details.userid)
        let uname=details.userid;
        let d = new Date();
        let dnt=d.toLocaleDateString();
        let id=parseInt(data2[data2.length-1].id)+1;
       let data1={id,uname,dnt,title,description};
       alert("Posted successfully");
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