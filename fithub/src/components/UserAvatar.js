import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";

const UserAvatar=()=>
{
    let [color,setColor]=useState()
    let [details,setDetails]=useState()
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
  
  
    const generateHSL = (name) =>
    {
      const hash = getHashOfString(name);
      const h =normalizaHash(hash, hRange[0], hRange[1]);
      const s =normalizaHash(hash, sRange[0], sRange[1]);
      const l =normalizaHash(hash, lRange[0], lRange[1]);
      return `hsl(${h},${s}%,${l}%)`;
    }
  
     useEffect(()=>{
      let data=JSON.parse(localStorage.getItem("userno"))
      setDetails(data)
      setColor(generateHSL(data.userid));
    },[]);

    return(<>
    
    <Avatar sx={{ bgcolor: color, width:"50px", height:"50px", marginLeft:"7px" , border:"1px solid grey"}}>
            {details?details.userid[0].toUpperCase():null}
        </Avatar>
    
    </>)
}

export default UserAvatar;