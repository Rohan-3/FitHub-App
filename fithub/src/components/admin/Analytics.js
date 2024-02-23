import React, { useEffect, useState } from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar, Line, Doughnut, Pie} from "react-chartjs-2"
import './Analytics.css'

const Analytics = () => {

  

  
        const [category, setCategory] = useState([])
        const [title, setTitle] = useState([])
        const [blogs, setBlogs] = useState([])
        const [dietCategory, setDietCategory] = useState([])
        const [engagment, setEngagment] = useState([])
        const [favorites, setFavorites] = useState([])
        const [noOfusers, setNoOfusers] = useState([])


        useEffect(()=>{
          fetch('http://localhost:4000/workout_category')
          .then((data)=> data.json())
          .then((data)=> setCategory(data))
          .catch((err)=> console.log(err))
        },[category])

        useEffect(()=>{
          fetch('http://localhost:4000/workouts')
          .then((data)=> data.json())
          .then((data)=> setTitle(data))
          .catch((err)=> console.log(err))
        },[title])

        useEffect(()=>{
          fetch('http://localhost:4000/Blogs')
          .then((data)=> data.json())
          .then((data)=> setBlogs(data))
          .catch((err)=> console.log(err))
        },[blogs])
        useEffect(()=>{
          fetch('http://localhost:4000/Comments')
          .then((data)=> data.json())
          .then((data)=> setEngagment(data))
          .catch((err)=> console.log(err))
        },[engagment])

        useEffect(()=>{
          fetch('http://localhost:4000/diet')
          .then((data)=> data.json())
          .then((data)=> setDietCategory(data))
          .catch((err)=> console.log(err))
        },[dietCategory])

        useEffect(()=>{
          fetch('http://localhost:4000/favorite')
          .then((data)=> data.json())
          .then((data)=> setFavorites(data))
          .catch((err)=> console.log(err))
        },[favorites])


        
        useEffect(()=>{
          let users = JSON.parse(localStorage.getItem('u'))
           setNoOfusers(users.length)

        },[])

      
        
        

    //  let users =  JSON.parse(localStorage.getItem('u'))
    //  if (users.length >0) {
    //     console.log(users.length);
    //  }else{
    //   console.log("NO user");
    //  }
        
        
        let noOfCategory = category.length;
        let noOfWorkoutTitle = title.length;
        let noOfDietCategory = dietCategory.length;
        let noOfBlogs = blogs.length;
        let noOfEngagment = engagment.length;
        let noOfFavorites = favorites.length;

    // const data = [
    //   {name: "Workout Categories", value:{noOfCategory}},
    //   {name: "Diet Categories", value:{noOfDietCategory}},
    //   {name: "Blogs", value:{noOfBlogs}}
    // ]
   
  return (
    <div className='analytics-container'>

    <div className='crudPage'>
      <h2>Analytics</h2>
      <div className='numbers'>
      <h4>Categories : {noOfCategory}</h4>
      <h4>Titles : {title.length}</h4>
      <h4>Blogs : {blogs.length}</h4>
      <h4>Diet category : {noOfDietCategory}</h4>
     </div>
     <hr></hr>

     <div className='uperCharts'>
     
    <div className='bar'>

     <Bar
      data={{
        labels:["Workout Category", "Diet Category"],
        datasets:[
          {
            label:"Total",
            data:[noOfCategory,noOfDietCategory],
          },
          {
            label:"title",
            data:[noOfWorkoutTitle],
          }
        ]
      }}
    />
  </div>
  <div className='pieChart'>
     <Pie
      data={{
        labels:["No Of Users", "favorites"],
        datasets:[
          {
            label:"Total",
            data:[noOfusers,noOfFavorites],
          },

          
        ]
      }}
    />
    </div>
     </div>
     <div className='Charts'>
  
  <div className='doughnut'>
  <Doughnut
      data={{
        labels:["Blogs","User Engagment on Blogs"],
        datasets:[
          {
            label:"Total",
            data:[noOfEngagment,noOfBlogs]
          }
        ]
      }}
    />
        
  </div>
     </div>


    </div>
</div>
  )
}

export default Analytics