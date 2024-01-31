import React, { useState } from "react";
import { FaStar } from "react-icons/fa"

const Rating=()=>
{
    const [rating,setRating] = useState(null)
    const [rateColor,setRateColor] = useState(null)
    return(
    <div  style={{display:"flex", flexWrap:"wrap"}}>

        {
            [...Array(5)].map((star,index)=>{
                const currentRate=index+1
                return(
                    <div>
                    <div>
                        <label>
                        <input type="radio" name="rate"
                        value={currentRate}
                        onClick={()=>setRating(currentRate)}
                        style={{display:"none"}}/>
                        <FaStar size={25}
                        style={{cursor:"pointer"}}
                        color={currentRate <= (rateColor || rating) ? "#ffc60b" : "grey"} />
                        </label>
                    </div>
                    </div>
                )
            })
        }

    </div>)
}
export default Rating