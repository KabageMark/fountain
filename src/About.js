import React from 'react';
import './About.css';
import bishop from './image/DSC_8195.JPG';


function About() {
    return (
        <div className="">
            <h1 className="about__title">About Us</h1>

             <div className="about">
             <h2 className="about__title">Vision</h2>
             <p className="about__content">
                To reach the unreached and tell the untold of the love of God and the saving grace of our Lord and savior Jesus Christ under the leading of the Holy Spirit with the guidance and direction of the Holy Scriptures.
            </p>
             
            
             <div className="about__mission">
             <h2 className="about__title">Mission</h2>
                <p className="about__content">
                To provide every opportunity for the involvementof believers in the fulfillment of the great commandment(Matthew 22:36-40)and the Great commission(Matthew 28:19-20) by teaching, training and equipping them with word of God.
                </p>
             </div>

             <div className="about__history">
             <h2 className="about__title">History</h2>
            <p className="about__content">
            On 10th June 2001-The ministry was launched and the 1st
             Sunday service was held at Eldorado Hotel with 13 people in attendance.
            (Pastor Steve Ngethe wife Esther Ngethe and their children, Pastor Gacheru and Family, Bro.Waweru and Family and 2 other invited friends).
            Membership has grown gradually and we are grateful to God for all those who came and joined us.
            The purpose of Fountain Worship Centre church is to glorify God by making disciples of Jesus Christ. 
            As His disciples, we are called to participate in finishing the Great commission as we EXALT God, EDIFY one another, EVANGELIZE the people and EXTENDcompassion to all.
              </p>
             </div>
           
            <div className="about__motto">
            <h2 className="about__title">Motto</h2>
            <p className="about__content">
                Equipping the Saints for the Harvest(Eph 4:12).
            </p>
            </div>
            
            <div className="about__purpose">
            <h2 className="about__title">Purpose</h2>
            <p className="about__content">
            The purpose of Fountain Worship Centre church is to glorify God by making disciples of Jesus Christ. As His disciples, we are called to participate in finishing the Great commission as we EXALT God, EDIFY one another, EVANGELIZE the people and EXTENDcompassion to all.
           </p>
            </div>
         </div>
           
           
          
        <div className="about__team">
        <h2 className="about__title">Our Team</h2>
        <div className="about__teamMembers">
             
        <div className="about__Teamleft">
            <div className="about__teamMembersDetails">
                         
                         <img className="about__teamMembersImage" src = {bishop} alt=""/>
                         <span className="about__teamMembersName" >Esther Ngethe</span>
                         <span className="about__teamMembersTitle">Bishop</span>
            </div>

            <div className="about__teamMembersDetails">
                         
                         <img className="about__teamMembersImage" src = {bishop} alt=""/>
                         <span className="about__teamMembersName" >Ernesto Kamau</span>
                         <span className="about__teamMembersTitle">Senior Pastor</span>
            </div>
            </div>
        <div className="about__Teamright">
        <div className="about__teamMembersDetails">
                         
                         <img className="about__teamMembersImage" src = {bishop} alt=""/>
                         <span className="about__teamMembersName" >Pastor George</span>
                         <span className="about__teamMembersTitle">Senior Pastor</span>
            </div>

            <div className="about__teamMembersDetails">
                         
                         <img className="about__teamMembersImage" src = {bishop} alt=""/>
                         <span className="about__teamMembersName" >Pastor Esther Ngethe</span>
                         <span className="about__teamMembersTitle"> Lead Pastor</span>
             </div>
           </div>
        </div>
    </div>      
</div>
    )
}

export default About
