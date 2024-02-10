import { useEffect, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import { FiLogOut } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


const UserProfile=()=>
{
    let nav=useNavigate()
    const profileRef = useRef()
    const menuRef=useRef()
    let [color,setColor]=useState()
    let [details,setDetails]=useState()
    let [open,setOpen]=useState(false)
    let [flag,setFlag]=useState(false)
    let [uname,setUname]=useState("")
    let [userdetails,setUserDetails]= useState()
    const [commentsData,setCommentsData]=useState([])
    const [blogsData,setBlogsData] = useState([])

    useEffect(()=>{
        let data=JSON.parse(localStorage.getItem("userno"))
        let data1=JSON.parse(localStorage.getItem("u"))
        setDetails(data)
        setUserDetails(data1)
        setColor(generateHSL(data.userid));
        setUname(data.userid)

        //comments api -------------------
        fetch("http://localhost:4000/Comments")
        .then((temp)=> temp.json())
        .then((temp) => setCommentsData(temp))
        .catch((err)=>console.log(err));
        //---------------------------------

        //blogs api------------------------
        fetch("http://localhost:4000/Blogs")
        .then((temp)=> temp.json())
        .then((temp) => setBlogsData(temp))
        .catch((err)=>console.log(err));
        //---------------------------------
    },[])

    window.addEventListener("click",(e)=>{
        if(e.target !== profileRef.current && e.target === menuRef.current)
        {
            setOpen(false)
        }
    })

    const getHashOfString=(str)=>
    {
        let hash = 0;
        for(let i=0;i<str.length;i++)
        {
        hash = str.charCodeAt(i) + ((hash<<5)-hash);
        }
        hash = Math.abs(hash);
        return hash;
    }

    const normalizaHash = (hash,min,max)=>
    {
        return Math.floor((hash % (max - min)) + min);
    }

    const hRange = [0, 360];
    const sRange = [35, 75];
    const lRange = [10, 50];

    const generateHSL = (str) =>
    {
        const hash = getHashOfString(str);
        const h =normalizaHash(hash, hRange[0], hRange[1]);
        const s =normalizaHash(hash, sRange[0], sRange[1]);
        const l =normalizaHash(hash, lRange[0], lRange[1]);
        return `hsl(${h},${s}%,${l}%)`;
    }

    const handleUserLogout=()=>
    {
        localStorage.removeItem('userno');
        alert("user logout");
        nav("/auth");
    }

    const handleUserName=()=>
    {
        //-------userno localStorage----------------
        let login={phoneno:details.phoneno,userid:uname}
        localStorage.setItem('userno',JSON.stringify(login))
        //------------------------------------------


        //--------u localStorage--------------------
        let udata=[]
        udata=userdetails.filter((temp)=>temp.phone===details.phoneno)
        let n=userdetails.indexOf(udata[0])
        userdetails[n]={userid:uname,email:udata[0].email,
            phone:udata[0].phone,age:udata[0].age,
            gender:udata[0].gender,height:udata[0].height,
            weight:udata[0].weight,BMI:udata[0].BMI}
        localStorage.setItem('u',JSON.stringify(userdetails))
        //-------------------------------------------


        EditUserName()  // blogs and comments
        generateHSL(uname)
        setFlag(false)
    }

    const EditUserName=()=>
    {
        let comments=[]
        let blogs=[]
        let userName=uname
        comments=commentsData.filter((temp)=>temp.phone===details.phoneno)
        blogs=blogsData.filter((temp)=>temp.phone===details.phoneno)
        comments.map((temp)=>
        {
            fetch(`http://localhost:4000/Comments/${temp.id}`,
            {
                method: "PATCH",
                headers:
                {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    uname:userName
                })
            })
            .then((data)=>data.json())
            .then((data)=>console.log(data))
            .catch((err)=>console.log(err))
        })

        blogs.map((temp)=>
        {
            fetch(`http://localhost:4000/Blogs/${temp.id}`,
            {
                method: "PATCH",
                headers:
                {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    uname:userName
                })
            })
            .then((data)=>data.json())
            .then((data)=>console.log(data))
            .catch((err)=>console.log(err))
        })
        details.userid=uname
        setColor(generateHSL(userName));
        
    }

    return(
    <div style={{marginTop:"20px"}}>

        <Avatar sx={{ bgcolor: color, width:"50px", height:"50px", cursor:"pointer"}} onClick={()=>setOpen(!open)} ref={profileRef} >
            {details?details.userid[0].toUpperCase():null}
        </Avatar>

        {
            open ?
                <div ref={menuRef}>
                    <ul style={{cursor:"pointer"}} onClick={()=>setOpen(true)}>
                        <li style={{textDecoration:"none", color:"black"}}>
                            {flag===false ? 
                            <div>{details?details.userid:null}<MdEdit onClick={()=>setFlag(true)}/></div>
                            :
                            <div><input type="text" value={uname} onChange={(e)=>setUname(e.target.value)} style={{width:"150px"}} /><MdDone onClick={handleUserName} /></div>}
                        </li>
                        <li>
                            <Link to='/auth' onClick={handleUserLogout} style={{textDecoration:"none", color:"black"}}>Logout<FiLogOut/></Link>
                        </li>
                    </ul>
                </div>
            :null
        }
        
    </div>)
}
export default UserProfile