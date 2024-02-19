import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CardActionArea } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import '../assets/styles/Workouts.css';


const UserWorkout=()=>
{
    let [data,setData] = useState([])
    let [fav,setFav] = useState([])
    let [work,setWork]=useState([])
    let [phone,setPhone] = useState()
    let nav=useNavigate()
    useEffect(()=>
    {
      let local=JSON.parse(localStorage.getItem("userno"))
      let admin=JSON.parse(localStorage.getItem("adminno"))
      admin ? setPhone(admin.phoneno) : setPhone(local.phoneno)
      


      fetch("http://localhost:4000/workouts")
      .then((temp)=> temp.json())
      .then((temp) => setData(temp))
      .catch((err)=>console.log(err))


      fetch("http://localhost:4000/favorite")
      .then((temp)=> temp.json())
      .then((temp) => {
        let fav=temp.filter((favdata)=>favdata.phone===local.phoneno)
        setFav(fav)
      })
      .catch((err)=>console.log(err))
    },[])
    let k= useLocation();
    let {category} = k.state; 

    useEffect(()=>{
      let workout=data.filter((temp)=>temp.category===category)
      setWork(
        workout.map((item)=>({
          ...item,
          isFav:fav.some((favItem)=>favItem.title===item.title)
        }))
      )
    },[category,data,fav])

    useEffect(()=>{
      fetch("http://localhost:4000/favorite")
      .then((temp)=> temp.json())
      .then((temp) => {
        let fav=temp.filter((favdata)=>favdata.phone===phone)
        setFav(fav)
      })
      .catch((err)=>console.log(err))
    },[work])

    const handlefavorite=(e,index)=>
    {
      e.stopPropagation()

      const clickedWorkout = work[index]
      let phoneno=phone


      if(clickedWorkout.isFav)
      {
        let favdata=fav.filter((temp)=>temp.title===clickedWorkout.title)
        fetch(`http://localhost:4000/favorite/${favdata[0].id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        setWork((prevWork)=>{
          const updateWork=[...prevWork];
          updateWork[index]={...updateWork[index],isFav:!updateWork[index].isFav}
          return updateWork;
        })
      }
      else
      {
        let category = "workout"
        let title = clickedWorkout.title
        let image = clickedWorkout.image
        let video = clickedWorkout.video
        let phone = phoneno
        let addfav = {
          category:category,
          title:title,
          image:image,
          video:video,
          phone:phone
        }
        fetch("http://localhost:4000/favorite",
        {
            method: "POST",
            body: JSON.stringify(addfav)
        })
        .then((data) => data.json())
        .then((data) => console.log(data))
        .catch((err)=> console.log(err))
        setWork((prevWork)=>{
          const updateWork=[...prevWork];
          updateWork[index]={...updateWork[index],isFav:!updateWork[index].isFav}
          return updateWork;
        })
      }
    }

    const handlelink=(temp)=>
    {
      nav("/video",{state:{video:temp.video}})
    }


    return(<>
    <div className='main1'>

    {
      work.map((temp,index)=>
        <Card sx={{width:"450px", marginTop:"40px",backgroundColor:"black", color:"white", boxShadow:"10px 10px 20px rgba(0, 0, 0, 0.5)"}} onClick={()=>handlelink(temp)}>
          <CardActionArea style={{height:"450px"}}>
            {/* <CardMedia
              component="img"
              height="300"
              image={temp.image}
              alt=""
            /> */}
  
              <img src={temp.image} alt={temp.category} className='Image2'/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" >
                <div className='content1'>
                <div className='Title'>{temp.title} 
                <span> { temp.isFav ? <MdOutlineFavorite onClick={(e)=>handlefavorite(e,index)} style={{color:"red"}} /> : <MdOutlineFavoriteBorder onClick={(e)=>handlefavorite(e,index)} style={{color:"white"}} />  }
                </span>
               </div>
                </div>
              </Typography>
              <Typography variant="body2"  style={{height:"150px"}}>
                <div className='Title1'>{temp.description}</div>              
                </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
    }
    </div>
    
    </>)
}

export default UserWorkout;