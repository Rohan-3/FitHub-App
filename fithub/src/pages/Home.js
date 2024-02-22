import React from 'react'
import './styles/HomePage.css'
import BackgroundVideo from '../components/LandingSection'
import WhatsApp from '../components/WhatsApp'
import GymGuy from '../assets/images/GymGuy.png'
import Workout from '../assets/images/Workout.png'
import Diet from '../assets/images/Diet.png'
import community  from '../assets/images/community.png'


const Home = () => {
  return (
    <div>
    <BackgroundVideo/>
    <div className='services'> 
    <div className='serviceHead'>
      <h2>Fitness is the dance your body craves !</h2>
    </div>
    <div className='serveQuote'>
    "Push yourself. It's not about being better than someone else; it's about being better than you were yesterday." 
    </div>
    </div>
    <div className='aboutSection'>
    <div>
    <img className='aboutImg' src={GymGuy} alt='GymGuy'/>
    </div>
    <div className='aboutDecs'>
    <h1 className='aboutHome-head'>About us !</h1>
    <p>Unleash your inner athlete and discover a personalized path to fitness at FITHUB ! We're not just a gym, we're a community dedicated to helping you reach your goals through diverse offerings.<br></br> <br></br> Explore invigorating yoga sessions, sculpt your physique with strength training, or master the art of bodyweight movement with calisthenics. And it doesn't stop there! We empower your journey with expert nutritional guidance, ensuring your diet fuels your success. Join us and experience fitness, redefined.</p>

    <h4>"Move with freedom, fuel with purpose. Unleash your potential at FITHUB !."</h4>
    <button className='home-about-btn'> <a href='http://localhost:3000/about'> Know more</a></button>
    </div>
    </div>

       
    <div className='services'> 
    <div className='serviceHead'>
      <h2>Unlesh Potential !</h2>
    </div>
    <div className='serveQuote'>
    "Life's a journey, not a destination. Seize the present, move your body, nourish your soul. Find your fitness flow at FITHUB !."
    </div>
    </div>
    <div className='service-info'>
      <div>
      <a href='http://localhost:3000/user_cat'><img className='serviceImg' src={Workout} alt='Workout'/></a> 
      </div>
      <div>
      <a href='http://localhost:3000/diet_cat'> <img className='serviceImg' src={Diet} alt='diet'/></a> 

      </div>
      <div>
    <a href='http://localhost:3000/blogs'> <img className='serviceImg' src={community} alt=''/></a> 

      </div>
    </div>
    <div className='service-info'>
      <div>
      <h2 > Workout</h2>
      </div>
      <div>
      <h2>Diet</h2>
      </div>
      <div>
      <h2>Community</h2>
      </div>
    </div>
    <div className='services'> 
    <div className='serviceHead'>
      <h2>Health Is Wealth !</h2>
    </div>
    <div className='serveQuote'>
    "Life's a journey, not a destination. Seize the present, move your body, nourish your soul. Find your fitness flow at FITHUB !."
    </div>
    </div>
    <WhatsApp/>
    </div>
  )
}

export default Home