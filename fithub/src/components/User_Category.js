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
        fetch("../workout_category.json")
        .then((temp)=> temp.json())
        .then((temp) => setData(temp))
        .catch((err)=>console.log(err))
    },[])
    
    return(<div style={{display:'flex', flexWrap:'wrap'}}>

     {
       data.map((temp)=> <Card sx={{width:"400px", heigth:"400px" }}>
       <CardActionArea style={{width:"400px", heigth:"400px" }}>
         <CardMedia
           component="img"
           height="195"
           image={temp.image}
           alt="green iguana"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             <div style={{textAlign:'center', fontSize:"45px"}}>
               <Link style={{color:"black", textDecoration:"none"}} state={{category:temp.category}} to="/user_workout">{temp.category}</Link>
             </div>
           </Typography>
         </CardContent>
       </CardActionArea>
     </Card>)
     }
    
    </div>)
}

export default UserCategory;