import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Diet.css'

const DietCategory=()=>
{
    let [data,setData] = useState([])
    let [fav,setFav] = useState([])
    let [diet,setDiet] = useState([])
    let [phone,setPhone] = useState()
    let nav=useNavigate()
     useEffect(()=>
     {
        let local=JSON.parse(localStorage.getItem("userno"))
        let admin=JSON.parse(localStorage.getItem("adminno"))
        admin ? setPhone(admin.phoneno) : setPhone(local.phoneno)

        fetch("http://localhost:4000/diet")
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

    useEffect(()=>{
      setDiet(data.map((item)=>({
        ...item,
        isFav:fav.some((favItem)=>favItem.title===item.category)
      })))
    },[data,fav])

    useEffect(()=>{
      fetch("http://localhost:4000/favorite")
      .then((temp)=> temp.json())
      .then((temp) => {
        let fav=temp.filter((favdata)=>favdata.phone===phone)
        setFav(fav)
      })
      .catch((err)=>console.log(err))
    },[diet])

    const handlefavorite=(e,index)=>
    {
      e.stopPropagation()

      const clickedDiet = diet[index]
      const phoneno=phone
      const isFav=clickedDiet.isFav

      const toggleFavorite=(newIsFav)=>{
        setDiet((prevDiet)=>{
          const updateDiet=[...prevDiet];
          updateDiet[index]={...updateDiet[index],isFav:!updateDiet[index].isFav}
          return updateDiet;
        })
      }

      if(isFav)
      {
        let favdata=fav.filter((temp)=>temp.title===clickedDiet.category)
        fetch(`http://localhost:4000/favorite/${favdata[0].id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        toggleFavorite(false)
      }
      else
      {
        let category = "diet"
        let title = clickedDiet.category
        let image = clickedDiet.image
        let routine = clickedDiet.routine
        let phone = phoneno
        let addfav ={
          category:category,
          title:title,
          image:image,
          routine:routine,
          phone:phone
        }
        fetch("http://localhost:4000/favorite",
        {
            method: "POST",
            body: JSON.stringify(addfav)
        })
        .then((data) => data.json())
        .then(() => toggleFavorite(true))
        .catch((err)=> console.log(err))
      }
    }

    const handlelink=(temp)=>
    {
      nav("/diet",{state:{routine:temp.routine}})
    }

    
    return(<>

      <div className='Alldiet'>
        {
          diet.map((temp,index)=>
            //<Link to="/diet" style={{textDecoration:"none"}} state={{routine:temp.routine}}>
            <Card sx={{width:"400px", heigth:"400px", marginTop:"40px",backgroundColor:"black", color:"white", boxShadow:"10px 10px 20px rgba(0, 0, 0, 0.5)"}} onClick={()=>handlelink(temp)}>
              {/* <CardMedia
                component="img"
                height="194"
                image={temp.image}
                alt="Paella dish"
              /> */}

                  <img src={temp.image} alt={temp.category} className='DietImage'/>

              <CardContent style={{height:"50px"}}>
                <h1 style={{position:'relative',top:"0"}}>
                  <span className='DietContent'>{temp.category}</span>
                  { temp.isFav ? <MdOutlineFavorite onClick={(e)=>handlefavorite(e,index)} style={{color:"red"}} /> : <MdOutlineFavoriteBorder onClick={(e)=>handlefavorite(e,index)} style={{color:"grey"}} />  } 
                </h1>
              </CardContent>
            </Card>

            //</Link>
          )
        }
      </div>
    
    </>);
}

export default DietCategory;