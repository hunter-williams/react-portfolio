import React, {Component} from 'react';

import './Header.css';

class Header extends Component{

    render(){
        return(
            <div className="Header">
                <h1>Hunter Williams</h1>
                 <ul>
                    <li><a href='#AboutMe'>About Me</a></li>
                    <li><a href='#Portfolio'>Portfolio</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                    {/* <li><a href='#Resume'>Resume</a></li> */}
                 </ul>
            </div>
        )
    }
} 

export default Header;