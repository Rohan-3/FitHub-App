import { useEffect, useState } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Favorite=()=>
{
    let [fav,setFav]=useState([])
    let nav=useNavigate()
    useEffect(()=>{
        let local=JSON.parse(localStorage.getItem("userno"))

        fetch("http://localhost:4000/favorite")
        .then((temp)=> temp.json())
        .then((temp) => {
            let fav=temp.filter((favdata)=>favdata.phone===local.phoneno)
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
        <div>
        {
            [...fav].reverse().map((temp,index)=>
            <div >
            <Card sx={{ maxWidth: 450 }} onClick={()=>handlelink(temp)}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="400"
                    image={temp.image}
                    alt=""
                    />
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