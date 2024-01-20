import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const DietCategory=()=>
{
    let [data,setData] = useState([])
     useEffect(()=>{
        fetch("../diet.json")
        .then((temp)=> temp.json())
        .then((temp) => setData(temp))
        .catch((err)=>console.log(err))
    },[])
    
    return(<>

    {

        data.map((temp)=><Link to="/diet" style={{textDecoration:"none"}} state={{routine:temp.routine}}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={temp.image}
          alt="Paella dish"
        />
        <CardContent style={{height:"50px"}}>
          <h1 style={{position:'relative',top:"0"}}><span style={{textAlign:"center"}}>{temp.category}</span> <IconButton aria-label="add to favorites" style={{boxShadow:"none", width:"auto"}}>
            <FavoriteIcon />
          </IconButton></h1>
        </CardContent>
      </Card>
        
        </Link>)

    }
    </>);
}

export default DietCategory;