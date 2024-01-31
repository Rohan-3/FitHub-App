import { FaStar , FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar} from "react-icons/ai"

const OverallRating=({stars,reviews})=>
{
    const ratingStar=Array.from({length:5},(element, index)=>{
        let number = index + 1;
        return <span>
            {
                stars >= number ? <FaStar/> : stars > number - 0.5 ? <FaStarHalfAlt/> : <AiOutlineStar/>
            }
        </span>
    })
    return(
    <div>
        <p>{ratingStar} {reviews} reviews</p>
    </div>)
}
export default OverallRating;