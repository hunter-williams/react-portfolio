import React, {Component} from 'react';

import logo from '../../assets/toxic-logo.jpg'
import tiletopia from '../../assets/tiletopia.png'
import htmlgen from '../../assets/htmlgen.png'
import readmegen from '../../assets/readmegen.png'
import Card from '../Card/Card';
import './Body.css';

import Resume from '../../assets/Hunter-Williams-Resume.pdf'


class Body extends Component{

    render(){
        return(
            <div className="Body">
                <section id="AboutMe">
                    <div>
                        <small>Hello, i am </small>
                        <h1>Hunter Williams</h1>
                        <p>a Software Developer with a background in QA Testing and Gaming</p>
                        <a href={Resume} download="Hunter-Williams-Resume.pdf">Download Resume</a>
                    </div>
                    
                    <img src={logo} alt='img'></img>
                </section>

                <section id="Portfolio">
                    <h1>Projects</h1>

                    <div className='ProjectContainer'>
                        <Card 
                            className="Hero"
                            imgSrc={tiletopia}
                            Title='TileTopia'
                            Description="React js idle miner web game"
                            // LiveLink='/'
                            CodeLink='https://github.com/Tiletopia/tiletopia'
                        ></Card>
                        <Card 
                            className="Secondary"
                            imgSrc={logo}
                            Title='Employee Tracker'
                            Description="Node CLI to manage employee relations in SQL DB"
                            // LiveLink='/'
                            CodeLink='https://github.com/hunter-williams/employee-tracker'
                        ></Card>
                        <Card 
                            className="Secondary"                        
                            imgSrc={readmegen}
                            Title='README generator'
                            Description="Node CLI prompts to create and save a markdown file"
                            // LiveLink='/'
                            CodeLink='https://github.com/hunter-williams/readme-gen'
                        ></Card>
                        <Card 
                            className="third"
                            imgSrc={htmlgen}
                            Title='HTML Team Generator'
                            Description="Node CLI to generate Visual diagram for a team"
                            DemoLink='https://drive.google.com/file/d/1PdlxPUbvcOw40sdwAyLx9qFYbSmnIZ-d/view?usp=sharing'
                            CodeLink='https://github.com/hunter-williams/team-gen'
                        ></Card>
                        <Card 
                            className="third"
                            imgSrc={logo}
                            Title='title'
                            Description="description"
                            LiveLink='/'
                            CodeLink='/'
                        ></Card>
                        <Card 
                            className="third"
                            imgSrc={logo}
                            Title='title'
                            Description="description"
                            LiveLink='/'
                            CodeLink='/'
                        ></Card>
                    </div>
                </section>

                <section id="Contact">
                    <h1>Contact Me</h1>
                    <form action="mailto:dragynson@gmail.com" method="post" encType="text/plain">
                        <div className='formHeader'>
                            <input type="text" name="name" id="name" placeholder='Name' required/>
                         
                            <input type="email" name="email" id="email" placeholder='Email'  required/>
                        </div>
                        <div>
                            <textarea name="comments" rows="12" cols="35" placeholder='Your message here.' required></textarea>
                        </div>
                        <div className='formFooter'>
                            <input type="submit" name="submit" value="Send" />
                            <input type="reset" name="reset" value="Clear" />
                        </div>
                    </form>
                </section>
 
            </div>
        )
    }
} 

export default Body;