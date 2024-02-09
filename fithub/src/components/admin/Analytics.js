import React, { useEffect, useState } from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar} from "react-chartjs-2"
import './Analytics.css'

const Analytics = () => {

  

  
        const [category, setCategory] = useState([])
        const [title, setTitle] = useState([])
        const [blogs, setBlogs] = useState([])
        const [dietCategory, setDietCategory] = useState([])

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
          fetch('http://localhost:4000/diet')
          .then((data)=> data.json())
          .then((data)=> setDietCategory(data))
          .catch((err)=> console.log(err))
        },[dietCategory])
        

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

    const data = [
      {name: "Workout Categories", value:{noOfCategory}},
      {name: "Diet Categories", value:{noOfDietCategory}},
      {name: "Blogs", value:{noOfBlogs}}
    ]
   
  return (
    <div className='crudPage'>
    <h2>Analytics</h2>
    <div className='numbers'>
    <h4>Categories : {noOfCategory}</h4>
    <h4>Titles : {title.length}</h4>
    <h4>Blogs : {blogs.length}</h4>
    <h4>Diet category : {noOfDietCategory}</h4>
    
        </div>

    <div className='charts'>
    <div className='categoryChart'>
    <Bar
      data={{
        labels:["Workout Category", "Diet Category", "Blogs"],
        datasets:[
          {
            label:"Total",
            data:[noOfCategory,noOfDietCategory,noOfBlogs],
          },
          {
            label:"title",
            data:[noOfWorkoutTitle],
          }
        ]
      }}
    />

    </div>
    </div>
    </div>
  )
}

export default Analytics