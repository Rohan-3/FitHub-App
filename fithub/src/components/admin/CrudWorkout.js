// fetch("http://localhost:4000/workouts")
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './SideBar.css'


const CrudWorkout = () => {
    const [data, setData] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [CategorySucc, setCategorySucc] = useState(0)
    const [id, setId] = useState()
    const [category, setCategory] = useState()
    const [benefits, setBenefits] = useState([])
    const [imageurl, setImageurl] = useState()
    const [imageurl2, setImageurl2] = useState()
    const [title, setTitle] = useState()
    const [vidUrl, setVidUrl] = useState()
    const [description, setDescription] = useState()
    
    
    useEffect(()=>{
        fetch("http://localhost:4000/workout_category")
        .then((temp)=> temp.json())
        .then((data)=> setCategoryList(data))
        .catch((err)=> console.log(err))
    },[CategorySucc])

    useEffect(()=>{
        fetch("http://localhost:4000/workouts")
        .then((temp)=> temp.json())
        .then((data)=> setData(data))
        .catch((err)=> console.log(err))
    },[])



    // Add category
    const postWorkoutCategory=()=>{    
        fetch("http://localhost:4000/workout_category",
        {
            method:"POST",
            body: JSON.stringify({
                _id:uuidv4(),
                id:id,
                category:category,
                image:imageurl
            })
        })
        .then((temp)=> temp.json())
        .then((data)=> {setCategorySucc((prev)=> prev++);  alert("Category added !")})
        .catch((err)=> console.log(err))        
}

    // Add Info as per category
const addInfo =()=>{
    fetch("http://localhost:4000/workouts",
    {
        method:"POST",
        body: JSON.stringify({
            _id:uuidv4(),
            categoryId:selectedCategory._id,
            category:selectedCategory.category,
            title:title,
            image:imageurl2,
            video:vidUrl,
            description:description,
            benefits:benefits
        })
    })
    .then((temp)=> temp.json())
    .then((data)=> alert("Information Added"))
    .catch((err)=> console.log(err))

  
}

    const getData = ()=>{
        // fetch("http://localhost:4000/workouts")
        // .then((temp)=> temp.json())
        // .then((data)=> setData(data))
        // .catch((err)=> console.log(err))

      let getTitle =  data.filter((data)=> data.title === title)
      
      if (getTitle.length > 0) {
          updateInfo(getTitle[0].id)
          
          
      }else{
        alert("No Title/Data")
      }
        
    }
  
    // Update Info as per category
    
    const updateInfo =(id)=>{
        fetch(`http://localhost:4000/workouts/${id}/`,{ 
        
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:id,
          category:category,
          title:title,
          image:imageurl2,
          video:vidUrl,
          description:description,
          benefits:benefits
        })

      }).then((res)=> res.json())
      .then((data)=> alert(" Data Updated"))
      .catch((err)=> console.log(err))
    }

    const removeInfo =()=>{
      let getTitle = data.filter((info)=> info.title === title)

      if (getTitle.length > 0) {

        removeWInfo(getTitle[0].id);

      }else{
        alert("NO Title")
      }
    }
    const removeWInfo=(id)=>
    {
        fetch(`http://localhost:4000/workouts/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        alert("DATA REMOVED")

    }
// GET CATEGORY FOR UPDATING IMAGE
const getcat =()=>{
  let getCategory = categoryList.filter((info)=> info.category === category)
      
      if (getCategory.length > 0) {

        updateCategory(getCategory[0].id);
      }else{
        alert("NO Category")
      }
    
}

// UPDATE CATEGORY
const updateCategory =(id)=>{
  fetch(`http://localhost:4000/workout_category/${id}/`,{ 
  
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    image:imageurl
  })

}).then((res)=> res.json())
.then((data)=> alert(" Category Image Updated"))
.catch((err)=> console.log(err))
}



    // REMOVE CATEGORY
    const removeCategory =()=>{
      let getCategory = categoryList.filter((info)=> info.category === category)
      
      if (getCategory.length > 0) {

        removeCat(getCategory[0].id);

      }else{
        alert("NO Category")
      }
    }


  // REMOVE CATEGORY

    const removeCat=(id)=>
    {
        fetch(`http://localhost:4000/workout_category/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        alert("Category REMOVED")

    }
    


  return (
    <>
    <div className='crudPage'>
    <div className='crudcategory'>
   <h2> Category :</h2> <input className='workout-crud-input' type='number' placeholder='WorkOut Id' onChange={(e)=> setId(e.target.value)} />
    <input className='workout-crud-input'  type='text' placeholder='Category Name' onChange={(e)=> setCategory(e.target.value)} />
    <input  className='workout-crud-input'  type='text' placeholder='Image Url' onChange={(e)=> setImageurl(e.target.value)} />
    <br></br>
    <button className='crudcategorybtn' onClick={postWorkoutCategory}>Add Category</button>
    <button className='crudcategorybtn' onClick={removeCategory}>Delete Category</button>
    <button className='crudcategorybtn' onClick={getcat}>Update Category</button>
    </div>
    <div className='workoutInfo'>
    <h2> Workout Info :</h2> 

    {/* <label>Select Category</label>  */}

    <select className='workout-crud-input' name="category" id="category" >
    {categoryList.map((temp)=> {
        return (
            <option onClick={()=>setSelectedCategory(temp)}>{temp.category}</option>
        )
    })}
  
    </select>
    <br></br>
    <input className='workout-crud-input' type='text' placeholder='Title'  onChange={(e)=> setTitle(e.target.value)}  />
    <input className='workout-crud-input' type='text' placeholder='Benifit'  onChange={(e)=> setBenefits(e.target.value)}  /><br></br>
    <input className='workout-crud-input' type='text' placeholder='Video URL' onChange={(e)=> setVidUrl(e.target.value)}  /> 
    <input className='workout-crud-input' type='text' placeholder='Image URL' onChange={(e)=> setImageurl2(e.target.value)}  />
    <input className='workout-crud-input' type='text' placeholder='Description' onChange={(e)=> setDescription(e.target.value)}  />
    <br></br>
    <br></br>
    <button className='crudInfobtn' onClick={addInfo}> Add Info</button>
    <button className='crudInfobtn' onClick={getData}> Update Info</button>
    <button className='crudInfobtn' onClick={removeInfo}> Delete Info</button>
    </div>
    </div>
    </>
  )
}

export default CrudWorkout