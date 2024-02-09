import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState,useEffect} from 'react';

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
    
    return(<div style={{display:'flex', flexWrap:'wrap'}}>

     {
       data.map((temp)=> <Link style={{color:"black", textDecoration:"none"}} state={{category:temp._id}} to="/user_workout"> <Card sx={{width:"400px", heigth:"400px" }}>
       <CardActionArea style={{width:"400px", heigth:"400px" }}>
         <CardMedia
           component="img"
           height="350"
           image={temp.image}
           alt="Category Image"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             <div style={{textAlign:'center', fontSize:"45px"}}>
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