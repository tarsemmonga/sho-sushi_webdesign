import React from 'react'
import {Button} from "react-bootstrap";
import "./MainAttractionsBanner.css"
import MainAttractionsBannerImage from "../../../assets/main-attractions-banner/main-attraction-image.png"

class MainAttractionsBanner extends React.Component{
    render() {

        return (<div className={"Main-Attractions-Banner-Container"}>
            <div className={"Main-Attraction-Banner-Description-Container"}>
                <h2>
                    Main Attractions
                </h2>
                <h3>
                    アトラクション
                </h3>
                <p className={"descriptive-Text"}>
                    6 categories of main course generate boundless combinations. Savor a healthy meal without MSG, and feel the unforgettable delicious taste.
                </p>
                <Button className={"main-attractions-banner-button down-load-app-button"}>
                    Special for today
                </Button>

            </div>
            <div className={"Main-Attractions-Banner-Image-Container"}>
                <img src={MainAttractionsBannerImage} alt={""}/>
            </div>
        </div>);
    }
}

export default MainAttractionsBanner;