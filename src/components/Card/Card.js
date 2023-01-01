import React, {Component} from 'react';

import './Card.css';

class Card extends Component{

    render(){
        if (this.props.LiveLink){

            return(
                <section className="Card">
                    <img src={this.props.imgSrc} alt="Project"></img>
                    <div className='Description'>
                        <h2>{this.props.Title}</h2>
                        <p>{this.props.Description}</p>
                        <div>
                            
                            <a href={this.props.LiveLink}>Live</a>
                            <a href={this.props.CodeLink}>Github</a>
                        </div>
                    </div>
                </section>
            )
        } else if (this.props.DemoLink) {

            return(
                <section className="Card">
                    <img src={this.props.imgSrc} alt="Project"></img>
                    <div className='Description'>
                        <h2>{this.props.Title}</h2>
                        <p>{this.props.Description}</p>
                        <div>
                            
                            <a href={this.props.DemoLink}>Demo</a>
                            <a href={this.props.CodeLink}>Github</a>
                        </div>
                    </div>
                </section>
            )
        }  else {
            return(
                <section className="Card">
                    <img src={this.props.imgSrc} alt="Project"></img>
                    <div className='Description'>
                        <h2>{this.props.Title}</h2>
                        <p>{this.props.Description}</p>
                        <div>
                            
                            {/* <a href={this.props.DemoLink}>Demo</a> */}
                            <a href={this.props.CodeLink}>Github</a>
                        </div>
                    </div>
                </section>
            )
        }
    }
} 

export default Card;