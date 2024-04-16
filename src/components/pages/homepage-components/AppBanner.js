import React from 'react';
import '../../../App.css';
import './AppBanner.css'
import {Button, Form} from "react-bootstrap";

import iPhoneMockup from '../../../assets/download-app/iphone-app.png'
import checkMarkSVG from '../../../assets/download-app/check-mark.svg'

import getFromPlayStoreImage from '../../../assets/download-app/googleplaystore.png'
import getFromAppStoreImage from '../../../assets/download-app/app-store-logo.png'

function AppBanner() {

    function signUp(e){
        //TODO: Implement this function s
        alert("Please implement signUp() function in DownloadApp.js");
    }

    return (
        <div className={"downloads-page-content-container-homepage"}>

            <div className={"app-dowload-banner-container"}>
                <div className={"iPhone-mockup-container"}>
                    <img src={iPhoneMockup} alt={""}/>
                </div>
                <div className={"download-links-container"}>
                    <h2>
                        It is no place else like us
                    </h2>
                    <h3>
                        私たちのような
                    </h3>
                    <Button className={"down-load-app-button"}>
                        Download App
                    </Button>

                </div>
            </div>

        </div>
    );
}



export default AppBanner;