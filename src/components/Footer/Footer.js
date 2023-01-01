import React, {Component} from 'react';

import './Footer.css';

import {faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component{

    render(){
        return(
            <div className="Footer">
                 <ul>
                    <li><a href='https://github.com/hunter-williams'><FontAwesomeIcon icon={faGithub} size="4x" /></a></li>
                    <li><a href='https://www.linkedin.com/in/h-williams/'><FontAwesomeIcon icon={faLinkedin} size="4x" /></a></li>
                    <li><a href='https://www.instagram.com/a_toxic_soul/'><FontAwesomeIcon icon={faInstagram} size="4x" /></a></li>
                    
                 </ul>
            </div>
        )
    }
} 

export default Footer;