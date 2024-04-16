import React from 'react';
import '../../../App.css';
import './DessertBanner.css'

import cakeBg from '../../../assets/dessert-banner/cakeBg.png'
import rockBg from '../../../assets/dessert-banner/rockbg.png'
import {Button} from "react-bootstrap";

function DessertBanner() {


    return (
        <div className={"dessert-banner-content-container"}>

            <div className={"cakeBg-container"}>
                <img src={cakeBg} alt={""}/>
            </div>

            <div className={"banner-info-container"}>
                <div className={"banner-text-container"}>
                    <h2>
                        Have a sweet tooth
                    </h2>
                    <h3>
                        甘い瞬間
                    </h3>
                    <p className={"descriptive-Text"}>
                        Your reluctance to end the meal may just be an excuse for your food cravings. Decide today that you want to enjoy the supreme! Savor the sweet taste so that you end the meal with utmost satisfaction.
                    </p>
                    <Button className={"contact-us-button"}>
                        Contact Us
                    </Button>

                </div>

            </div>

        </div>
    );
}



export default DessertBanner;