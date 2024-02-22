import React from "react";
import "../assets/styles/Footer.css"

const Footer=()=>{

    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="logo">
                        <img src="logo.jpeg" alt=" " />
                       <div> <h2>Fithub</h2>
                    </div>
                    <div className="sb_footer-links_div">
                         <div className="socialmedia"></div>
                        <p><img src="./insta.png" alt=""/></p>
                        <p><img src="./twitter.png" alt=""/></p>
                        <p><img src="./fb.png" alt=""/></p>
                        <p><img src="./whatsapp.png" alt=""/></p>
                        </div>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>WORKOUTS</h4>
                        <ul>
                            <li>
                            <a className="demi" href="https://youtu.be/IT94xC35u6k?si=7jHB3gWidwQMMU_M">Workout Video</a>
                            </li>
                            <li>
                            <a className="demi" href="https://youtu.be/AUu4-JRddHE?si=0xpcItBDiwIW5c-r">Custom Workouts</a>
                            </li>
                            <li>
                            <a className="demi" href="https://youtu.be/uZX14W4rVCU?si=kxKqGVr6ztzJMZ5I">Programs</a>
                            </li>
                            <li>
                            <a className="demi" href="https://youtu.be/zYUUZxEi8A8?si=-IBgNgQyM5LbHQHE">Workouts Programs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>HEALTHY LIVING</h4>
                        <ul>
                        <li>
                            <a className="demi" href="https://youtu.be/B5a03YsCgD0?si=AMlSYP5efPEBUHQ9">Meal Plans</a>
                            </li>
                            <li>
                            <a className="demi" href="https://youtu.be/Vu_NnDWxKY4?si=Txxi8cH5CVSFMbZz">Yoga workouts</a>
                            </li>
                            <li>
                            <a className="demi" href="/Workouts">Diet</a>
                            </li>
                            <li>
                            <a className="demi" href="/Workouts">Workouts</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>COMPANY</h4>
                        <a class="demi" href="/about">
                            <p>About</p>

                        </a>
                        <a className="demi" href="/about">
                            <p>Carrer</p>
                            
                        </a>
                        <a className="demi" href="/about">
                            <p>FAQ</p>
                            
                        </a>
                        <a className="demi" href="/about">
                            <p>Memership</p>           
                        </a>
                    </div>

                    </div>
                </div>           
            <hr></hr>
            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                    Copyright@{new Date().getFullYear()} Fithub. All rights reserved.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                <a href="/terms"><div><span><p>Terms & conditions</p></span></div></a><whitespace></whitespace>
                <a href="/terms"><div><p>Privacy policy<whitespace></whitespace></p></div></a>
                <a href="/terms"><div><p>Security <whitespace></whitespace></p></div></a>
                </div>
            </div>
        </div>

    )
}
export default Footer;