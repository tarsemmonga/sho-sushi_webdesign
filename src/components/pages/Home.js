import React, { Component } from 'react';
import '../../App.css';
import './Home.css'
import {GeneralFooter} from "../../footers/Footers";

import HomepageCarousel from "./homepage-components/HomepageCarousel";
import AuthenticBanner from "./homepage-components/AuthenticBanner";
import FreshnFresherBanner from "./homepage-components/FreshnFresherBanner";
import MainAttractionsBanner from "./homepage-components/MainAttractionsBanner"
import DessertBanner from "./homepage-components/DessertBanner";
import DrinksBanner from "./homepage-components/DrinksBanner";
import AppBanner from "./homepage-components/AppBanner";
class HomePage extends Component{
    render() {
        return (
            <div className={"home-content-container"}>
                <HomepageCarousel/>
                <AuthenticBanner/>
                <FreshnFresherBanner/>
                <MainAttractionsBanner/>
                <DessertBanner/>
                <DrinksBanner/>
                <AppBanner/>
                <GeneralFooter/>
            </div>
        );
    }

}

export default HomePage;