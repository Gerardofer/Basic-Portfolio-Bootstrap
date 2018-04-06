import React, { Component } from 'react';
import Portfolio from "./Portfolio";
import './Card.css';
    
class Card extends Component {
    render(){
        const {image, title, info, website} = this.props;
    
        return (
            <div className="container">
                <div className="col s7 m3">
                    <div className="card z-depth-3">
                        <div className='card-image waves-effect waves-block waves-light'>
                            <img className="activator" src={image} alt={title}/>
                        </div>
                        <div className="card-content white-text">
                            <span className="card-title activator grey-text text-darken-4">{title} (See the back!)<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                             <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                             <p>{info}</p>
                             <p><a href={website} target='_blank' rel="noopener noreferrer">Take a look!</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
        )    
    }
}

export default Card;