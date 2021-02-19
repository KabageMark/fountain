import React from 'react'
import './Events.css'
import event from './image/poster2.jpg'

function Events() {
    return (
        <div className="events">
            <h1>News and Events</h1>
            <div className="events__row">
            <img src ={event} alt="" />
            <img src ={event} alt="" />
            </div>
            
        </div>
    )
}

export default Events
