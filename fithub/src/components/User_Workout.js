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
      let admin=localStorage.getItem("adminno")
      admin ? setPhone(admin) : setPhone(local.phoneno)
      


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
    <div style={{display:'flex', flexWrap:'wrap'}}>

    {
      work.map((temp,index)=>
        <Card sx={{ width: "450px" }} onClick={()=>handlelink(temp)}>
          <CardActionArea style={{height:"550px"}}>
            <CardMedia
              component="img"
              height="400"
              image={temp.image}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {temp.title} 
                { temp.isFav ? <MdOutlineFavorite onClick={(e)=>handlefavorite(e,index)} style={{color:"red"}} /> : <MdOutlineFavoriteBorder onClick={(e)=>handlefavorite(e,index)} style={{color:"grey"}} />  }
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{height:"150px"}}>
                {temp.description}
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