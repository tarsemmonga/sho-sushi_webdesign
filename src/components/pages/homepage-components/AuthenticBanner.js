import React from 'react'
import {Button} from "react-bootstrap";
import  './AuthenticBanner.css'

import AuthenticJapaneseImage from "../../../assets/authentic-banner/authentic-japanese-text.png"
import subtitleTextSVG from "../../../assets/authentic-banner/its-our-soul.svg"

class AuthenticBanner extends React.Component{
    render() {
        return (
            <div className={"Authentic-Banner-Container"}>
                <div className={"Main-Attraction-Banner-Description-Container Authentic-Banner-Description-Container"}>



                    <h2>
                        Authentic
                    </h2>
                    <div className={"authentic-subtitle"}>
                        <img src={subtitleTextSVG}/>
                    </div>
                    <p className={"descriptive-Text"}>
                        Le Ble d'Or's exclusively crafted dishes, especially those prepared with beer, add another layer to these dishes. Made using the most traditional cooking techniques, along with our chefs' culinary creativity, do not miss the most popular meals, which have been served in our restaurants over the years.                    </p>
                    <Button className={"main-attractions-banner-button down-load-app-button"}>
                        Know more about us
                    </Button>

                </div>
            </div>
        );
    }
}

export default AuthenticBanner;