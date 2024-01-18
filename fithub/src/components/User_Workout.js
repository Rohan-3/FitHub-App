import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';


const UserWorkout=()=>
{
    let [data,setData] = useState([])
    useEffect(()=>{
       fetch("../workout.json")
       .then((temp)=> temp.json())
       .then((temp) => setData(temp))
       .catch((err)=>console.log(err))
   },[])
    let k= useLocation();
    let {category} = k.state; 
    return(<>
    <div style={{display:'flex', flexWrap:'wrap'}}>

    {
        data.filter((temp)=>temp.category===category)
        .map((temp)=><Link to="/video" state={{video:temp.video}} style={{color:"black", textDecoration:"none"}}><Card sx={{ width: "450px" }}>
        <CardActionArea style={{height:"500px"}}>
          <CardMedia
            component="img"
            height="400"
            image={temp.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {temp.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{height:"150px"}}>
              {temp.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions> */}
      </Card>
      </Link>
  )
    }
    </div>
    
    </>)
}

export default UserWorkout;