import React, { Component } from "react";
import PropTypes from "prop-types"
import Card from "./Card";
import "./Portfolio.css";

class Portfolio extends Component {
    
    static defaultProps = {
        pages: [{
            image: "https://cdn.pixabay.com/photo/2016/07/07/16/46/roll-the-dice-1502706_1280.jpg",
            title: "Crystal Collector",
            info: "Crystal Collector is a simple math game consisting on accumulating crystals without exceeding the maximum value. The game was fully built on JQuery and you can see the site by following this.",
            website: "https://gerardofer.github.io/jQuery-Game/"
        },
        {
            image: "https://cdn.pixabay.com/photo/2016/05/01/12/58/egg-1364869_1280.jpg",
            title: "GifTastic",
            info: "GifTastic is a Front End application that makes API calls to a GIF repository based ob the characters you provide.  It could be you favorite hero, villain, Sitcome character, etc.  Or maybe you'd like to see a more serious character become the center of a GIF stunt? Take GifTastic for a spin to see what you come up with!.",
            website: "https://gerardofer.github.io/GifTastic/"
        },
        {
            image: "https://cdn.pixabay.com/photo/2013/12/01/22/54/locomotive-222174_1280.jpg",
            title: "Train Time",
            info: "This application leverages the use of real time updates available in Firebase to display a certain train time and information.  No API calls are necessary since Firebase is a database that runs simultaneously with browser activity.",
            website: "https://gerardofer.github.io/TrainTime/"
        },
        {
            image: "https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_1280.jpg",
            title: "FriendFinder",
            info: "As it's name say it, this application is a friend matching website.  After answering a few questions, FriendFinder will look within its database (temporary data base since it lives in the broswer session) and select the best suitable candidate.  Please use the link below to see the repo in Github.",
            website: "https://github.com/Gerardofer/friendFinder"
        },
        {
            image: "https://cdn.pixabay.com/photo/2012/02/29/12/26/space-19070_1280.jpg",
            title: "Liri-CLI",
            info: "Liri-CLI is like Siri but with written commands.  The application uses API calls to twitter, OMDB, and Spotify and shows the reponses back in the console.  You can see the repo for the application following the link.",
            website: "https://github.com/Gerardofer/liri-node-app"
        },
        {
            image: "https://cdn.pixabay.com/photo/2017/09/18/16/59/burger-2762431_1280.jpg",
            title: "Eat Da Burger",
            info: "This is a full stack application that saves user input into a MySQL data base, and makes a call to the database to display all of the information available.  You can see the app deployed in Heroku.",
            website: "https://frozen-tundra-47604.herokuapp.com/"
        }]
    }
    
    
    
    static propTypes = {
        pages: PropTypes.checkPropTypes(PropTypes.object)
    }
    
    
    
    render(){
        const pages = this.props.pages.map((page, index) => (
            <Card key={index} {...page}/>
        ))
        
        return(
            <div className="row">
                <div className="col">
                <h3>Things I've built</h3>
                    {pages}
                </div>
            </div>
        )
    }
}

export default Portfolio;
