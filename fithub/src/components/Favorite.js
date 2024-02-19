import { useEffect, useState } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../assets/styles/Favourites.css'

const Favorite=()=>
{
    let [fav,setFav]=useState([])
    let nav=useNavigate()
    useEffect(()=>{
        let local=JSON.parse(localStorage.getItem("userno"))
        let admin=JSON.parse(localStorage.getItem("adminno"))
        let phone
        admin?phone=admin.phoneno:phone=local.phoneno

        fetch("http://localhost:4000/favorite")
        .then((temp)=> temp.json())
        .then((temp) => {
            let fav=temp.filter((favdata)=>favdata.phone===phone)
            setFav(fav)
        })
        .catch((err)=>console.log(err))
    },[])

    const handlelink=(temp)=>
    {
        if(temp.category==="workout")
        {
            nav("/video",{state:{video:temp.video}})
        }
        else
        {
            nav("/diet",{state:{routine:temp.routine}})
        }
    }


    return(
    <div >
        <div className="favourites">
        {
            [...fav].reverse().map((temp,index)=>
            <div >
            <Card sx={{width:"400px", heigth:"400px", marginTop:"40px",backgroundColor:"black", color:"white", boxShadow:"10px 10px 20px rgba(0, 0, 0, 0.5)"}} onClick={()=>handlelink(temp)}>
                <CardActionArea>
                    {/* <CardMedia
                    component="img"
                    height="400"
                    image={temp.image}
                    alt=""
                    /> */}
                    <img src={temp.image} alt={temp.category} className='FImage'/>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {temp.title}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>)
        }
        </div>
        
    </div>)
}
export default Favorite