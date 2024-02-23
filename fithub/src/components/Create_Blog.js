import { useEffect, useState } from "react";
import CreateBlogsCard from "./Create_blogs_card";
import '../assets/styles/CreateBlogs.css'
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
        let admin=JSON.parse(localStorage.getItem("adminno"))
        admin?setDetails(admin):setDetails(data)
        
    },[data])
    const Post = ()=>{
        let d = new Date();
        let dnt=d.toLocaleString()
        let uname=details.userid
        let phone=details.phoneno
        let id=parseInt(data1[data1.length-1].id)+1;
       if(title.length>0 && description.length>0)
       {
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
        window.location.reload();
       }
    }
    
    

   
    return(<div>
    <div className="blg" >

     {
            [...data1].reverse().filter((temp)=>temp.phone===details.phoneno).map((temp)=> <CreateBlogsCard title={temp.title} description={temp.description} dnt={temp.dnt} uname={temp.uname} id={temp.id} />)
        }

           <div className="textBlog">
            <h1 style={{marginLeft:"40px", marginTop:"10px"}}>New Post</h1>
            <input type="text" placeholder="Enter your title" onChange={(e)=> setTitle(e.target.value)} className="editTitle" style={{border:"black 1px solid", marginRight:"40px",marginLeft:"40px"}}/> <button onClick={Post}> Post</button> <br/>
            <textarea placeholder="Enter your description" onChange={(e)=> setDescription(e.target.value)} style={{height:"300px", width:"900px", border:"black 1px solid", marginLeft:"40px", marginBottom:"10px"}}></textarea>
            </div>

    </div> 
           
    </div>)

}

export default CreateBlog;