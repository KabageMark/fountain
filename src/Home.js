import React from 'react'
import './Home.css'
import founders from './image/founders.JPG'
import youtubepage from './image/youtube.png'

function Home() {
    return (
        <div className="home">
            
                 <div className="home__headline">
                     <span>
                     <p className="headline__heading">Fountain Worship Centre</p>
                     <p className="headline__subheading"> A Place To Belong</p>

                     </span>
              
                 <img className="headline__image" src = {founders} alt="" />

               
                 </div>
               
                 <div className="home__sermons">
                 <img className="home__sermonsImage" src = {youtubepage} alt="" />
                      <div className="home__sermonright">
                      <span className="home__services" > First Service 9:00am - 11:00am</span>
                      <span className="home__services" > Second Service 11:30am - 12:30pm</span>
                      <span className="home__services" >Full English service will be uploaded on Youtube</span>

                      </div>
                 </div>
            
        </div>
    )
}

export default Home
