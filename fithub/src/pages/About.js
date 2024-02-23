import './styles/About.css'
import image1 from '../assets/images/IntroImages/image1.jpg'
import image3 from '../assets/images/IntroImages/image3.jpg'
import image4 from '../assets/images/IntroImages/image4.jpg'
import image5 from '../assets/images/IntroImages/image5.jpg'
import image6 from '../assets/images/IntroImages/image6.jpg'
import image2 from '../assets/images/IntroImages/image2.jpg'
import image7 from '../assets/images/IntroImages/image7.webp'

import React from "react"
export const About=()=>{


    return(
        <div>
            <div className='about-head'>
            <h2 className="about-head-line">Don't ever give up on your dreams,dreams will give up you</h2>
                <img  className="img" src="https://www.goldsgym.com/wp-content/uploads/sites/1/2018/09/group-exercise-golds-gym-blog.jpg"/>

            </div>
            <div className="container">
           <h3 className='container-text'>Our goal is to make health and fitness attainable, affordable and approachable.</h3>
           <p className='container-text'>We believe fitness should be accessible to everyone, everywhere, regardless of income level or 
            access to a gym. That's why we offer hundreds of free, full-length workout videos, the most affordable
            and effective workout programs on the web, meal plans, and helpful health, nutrition and fitness information.</p>
            </div>
            <div>
            <iframe className="video" src="https://www.youtube.com/embed/s_A9K7rE1vc?si=QtM6Yvjmbq3lDMjY" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="lcontainer">
           <h4 className='lcontainer-text' > We believe in unbiased, gimmick-free, research-backed information.
            The only thing we endorse is eating unprocessed, whole foods, and working out for a strong, 
            healthy body. As a business, we believe good things happen when you put people before profit.</h4>
           </div>
            <div>
    <div >
         <img  className="img1" src={image2}/>
        <img className="img1" src={image5} alt=""/>
        <img  className="img1" src={image3} alt=""/>
     </div>
     <div className="img2">
     <img src={image4} alt=""/>
        <img src={image7}alt=""/>
        <img src={image6} alt=""/>
     </div>
            </div>
            {/* <ul>
        <li className="column-container">
           <h4 className="caps-half-demi">Powered by You</h4>
          <p >Fithub has reached tens of millions around the globe, all from word of
            mouth; happy viewers sharing our content with friends and family.</p>
        </li>
        <li className="column-container" >
          <i className="icon -about-programs" aria-hidden="true"></i>
          <h4 className="caps-half-demi">Programs that Work</h4>
          <p >Our workout plans use our online fitness calendar to provide detailed, day-by-day
            plans, creating incredible, sustainable results.</p>
        </li>
        <li className="column-container">
          <i className="icon -about-workouts" aria-hidden="true"></i>
          <h4 className="caps-half-demi">500+ Free Workouts</h4>
          <p >Over 500 free workouts range from 10-85 minutes long, from beginner level to elite
            athlete, from HIIT to Pilates, and strength training to bodyweight.</p>
        </li>
      </ul> */}

        </div>
    )
       
}
