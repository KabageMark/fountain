import React from 'react'
import './Header.css'
import logo from './image/FWC Logo.png'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
             <Link to='/'>
             <img className="header__logo" src = {logo}  alt=""/> 
             </Link>
          
    
           <div className="header__nav">
               <Link to='/About'>
                <span className="header__pages">About</span>
                </Link>
         
               <span  className="header__pages">Events</span>
        
               <span  className="header__pages">Giving</span>
        
               <span  className="header__pages">Sermons</span>
           
        </div>
        </div>
    )
}

export default Header
