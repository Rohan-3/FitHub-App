import { useEffect, useState } from "react";
import CreateBlogsCard from "./Create_blogs_card";
const CreateBlog=()=>{

    const [data, setData] = useState([])
    const [data1,setData1] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    let [details,setDetails] = useState()

    useEffect(()=>{
        fetch("http://localhost:4000/Blogs")
        .then((temp)=> temp.json())
        .then((temp) => setData1(temp))
        .catch((err)=>console.log(err));
        let data=JSON.parse(localStorage.getItem("userno"))
        setDetails(data)
    },[data])
    const Post = ()=>{
        let d = new Date();
        let dnt=d.toLocaleString()
        let uname=details.userid
        let phone=details.phoneno
        let id=parseInt(data1[data1.length-1].id)+1;
        let newpost = {
            id:id.toString(),
            title:title,
            description:description,
            dnt:dnt,
            uname:uname,
            phone:phone
        }
        fetch("http://localhost:4000/Blogs",
        {
            method: "POST",
            body: JSON.stringify(newpost)
        })
        .then((data) => data.json())
        .then((data) => setData(data))
        .catch((err)=> console.log(err))
        alert(`blog posted sucessfully`)
        window.location.reload();
    }
    
    

   
    return(<>
            <h1>Create Blogs</h1>
            <div>
            <p><input type="text" placeholder="Enter your title" onChange={(e)=> setTitle(e.target.value)}/></p>
            <textarea placeholder="Enter your description" onChange={(e)=> setDescription(e.target.value)} style={{height:"300px", width:"900px"}}></textarea>
            <p><button onClick={Post}> Create/Post</button></p>
            </div>
        {
            [...data1].reverse().filter((temp)=>temp.phone===details.phoneno).map((temp)=> <CreateBlogsCard title={temp.title} description={temp.description} dnt={temp.dnt} uname={temp.uname} id={temp.id} />)
        }
    </>)

}

export default CreateBlog;