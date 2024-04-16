import React from 'react'
import {Button} from "react-bootstrap";
import "./FreshnFresherBanner.css"
import FreshBannerImage from "../../../assets/fresh-banner/fresh-banner-img.png"

class FreshnFresherBanner extends React.Component{
     render() {
         return (<div className={"Fresh-n-Fresher-Banner-Container"}>
             <div className={"Fresh-n-Fresher-Banner-Image-Container"}>
                 <img src={FreshBannerImage} alt={""}/>
             </div>
             <div className={"Fresh-n-Fresher-Banner-Description-Container"}>
                 <h2>
                     Fresh & Fresher
                 </h2>
                 <h3>
                     フレッシュ＆フレッシュ
                 </h3>
                 <p className={"descriptive-Text"}>
                     Fresh and crispy, refreshing and savory, deep fried and flavorful, whichever dish you choose, will gently awaken your taste buds, thereby kickstarting a memorable feast.
                 </p>
                 <Button className={"Fresh-n-Fresher-banner-button down-load-app-button"}>
                     Order Now
                 </Button>

             </div>
         </div>);
     }
     
}


export default FreshnFresherBanner;