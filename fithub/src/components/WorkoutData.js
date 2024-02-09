import {React,useState,useEffect} from 'react'
const WorkoutData = () => {
    useEffect(()=>{
      fetch("http://localhost:4000/workouts")
      .then((temp)=> temp.json())
      .then((data) => console.log(data))
      .catch((err)=>console.log(err))
  },[])
  return (
    <div>
        
    </div>
  )
}
export default WorkoutData