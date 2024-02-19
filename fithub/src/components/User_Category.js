import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState,useEffect} from 'react';
import '../assets/styles/Workouts.css'

const UserCategory=()=>
{
//    let data = useFetch("../workout.json");
     let [data,setData] = useState([])
     useEffect(()=>{
        fetch("http://localhost:4000/workout_category")
        .then((temp)=> temp.json())  
        .then((temp) => setData(temp))
        .catch((err)=>console.log(err))
    },[])
    
    return(<div className="main1">

     {
       data.map((temp)=> <Link className='link' state={{category:temp.category}} to="/user_workout"> <Card sx={{width:"400px", heigth:"400px", marginTop:"40px",backgroundColor:"black", color:"white", boxShadow:"10px 10px 20px rgba(0, 0, 0, 0.5)"}}>
       <CardActionArea style={{width:"400px", heigth:"400px"}}>
         {/* <CardMedia
           component="img"
           heigth="350"
           image={temp.image}
           alt="Category Image"
          //  style={{borderRadius:"5px", width:"90%", position:"relative", left:"5%",top:"5%"}}
         /> */}
         <img src={temp.image} alt={temp.category} className='Image' />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             <div className='cardContent'>
               {temp.category}
             </div>
           </Typography>
         </CardContent>
       </CardActionArea>
     </Card> </Link>)
     }
    
    </div>)
}

export default UserCategory;