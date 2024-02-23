import {React} from 'react'
import '../assets/styles/BgVideo.css'
import {useTypewriter} from 'react-simple-typewriter'
import BgVideo from '../assets/videos/BgVideo.mp4'
import { Link } from 'react-router-dom'

const LandingSection = () => {
  const [typeEffect] = useTypewriter({
    words:['FitHub !', 'fitHub !!'],
    loop:{},
    typeSpeed: 200,
    delaySpeed:130
  })
  return (

    <div className='landing'>
        <video src={BgVideo} autoPlay muted loop />
        <div className='content'>
            <h1>Welcome to <span>{typeEffect}</span></h1>
            <p className='intro-para'>"Step into a world of fitness and wellness. Your transformation begins now!"</p>
       <Link to="/Contact"> <button className='home-about-btn'>Enquire Now !</button> </Link>   

        </div>
    </div>
    
  )
}

export default LandingSection