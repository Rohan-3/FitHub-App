import React, { useState } from 'react'

const CrudDiet = () => {
  const [data, setData] = useState()
    const [data2, setData2] = useState()
    const [id, setId] = useState()
    const [category, setCategory] = useState()
    const [imageurl, setImageurl] = useState()
    const [imageurl2, setImageurl2] = useState()
    const [title, setTitle] = useState()
    const [vidUrl, setVidUrl] = useState()
    const [description, setDescription] = useState()

    const postDietCategory=()=>{
 
        fetch("http://localhost:4000/diet",
        {
            method:"POST",
            body: JSON.stringify({
              category:category,
              image:imageurl,
            }),
        })
        .then((temp)=> temp.json())
        .then((data)=> setData(data))
        .catch((err)=> console.log(err))

      }

  return (
    <>
    <div className='crudPage'>
    <h1>Diet</h1>
    <div>
   <span> Category :</span> <input className='winputs' type='number' placeholder='WorkOut Id' onChange={(e)=> setId(e.target.value)} />
    <input className='winputs' type='text' placeholder='Category Name' onChange={(e)=> setCategory(e.target.value)} />
    <input className='winputs' type='text' placeholder='Image Url' onChange={(e)=> setImageurl(e.target.value)} />
    <button onClick={postDietCategory}>Add Category</button>
    </div>
    <div className='workoutInfo'>
    <span> Diet Info :</span> <input className='winputs' type='text' placeholder='Title'  onChange={(e)=> setTitle(e.target.value)}  />
    <input className='winputs' type='text' placeholder='Video URL' onChange={(e)=> setVidUrl(e.target.value)}  />
    <input className='winputs' type='text' placeholder='Image URL' onChange={(e)=> setImageurl2(e.target.value)}  />
    <input className='winputs' type='text' placeholder='Description' onChange={(e)=> setDescription(e.target.value)}  />
    <button>Add All data</button>
    </div>
    </div>
    </>
  )
}

export default CrudDiet