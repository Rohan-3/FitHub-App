import {React,useState,useEffect} from 'react'
// import workoutJson from '../../public/workout.json'
const WorkoutData = () => {
  const [apidata, setApidata] = useState()
    useEffect(()=>{
      fetch("../../public/workout.json")
      .then((temp)=> temp.json())
      .then((data) => console.log(data))
      .catch((err)=>console.log(err))
  },[])
  return (
    <div>
        <p>{apidata}</p>
    </div>
  )
}
export default WorkoutData