import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Link } from '@material-ui/core';


function Footer() {
    return (
        <div className="footer">

            <div className="footer__contacts">
                        
            <span className="footer__contactsTitle" >Address:</span><Link href="https://goo.gl/maps/b21F4X9pzNQppwkP8"><span className="footer__contactsContent">P.O BOX 12516 Nakuru</span></Link>
            <span className="footer__contactsTitle">Phone:</span><Link href="tel:0722788373"> <span className="footer__contactsContent" >0722788373</span></Link>
            <span className="footer__contactsTitle">Email:</span><Link href="mailto:fountainworshipcentre@gmail.com"><span className="footer__contactsContent" >fountainworshipcentre@gmail.com</span></Link>
        </div>

        <div className="footer__social">
        <Link  href="https://web.facebook.com/fountainworshipcentre/"> < FacebookIcon className="footer__icons"/> </Link> 
        <Link  href="https://twitter.com/FountainNakuru"> < TwitterIcon className="footer__icons"/> </Link> 
        <Link  href="https://www.youtube.com/results?search_query=fountain+worship+centre"> < YouTubeIcon className="footer__icons"/> </Link> 
        <Link  href="https://wa.me/254722788373"> < WhatsAppIcon className="footer__icons"/> </Link>   
        </div>
     
        </div>
    )
}

export default Footer
