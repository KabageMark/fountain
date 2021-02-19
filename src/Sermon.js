import React from 'react'
import './Sermon.css'
import sermon from './image/SERIES.jpg'


function Sermon() {
    return (
        <div className="sermon">
            <h1>Sermons</h1>
            <div className="sermon__row">
            <img src ={sermon} alt="" />
            <span> First Service 9:00am - 11:00am</span>
            <span> Second Service 11:30am - 12:30pm</span>
            </div>
            
        </div>
    )
}

export default Sermon
