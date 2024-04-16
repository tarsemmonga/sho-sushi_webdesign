import React from 'react';
import '../../../App.css';
import './DrinksBanner.css'

import beerGlassPng from '../../../assets/drinks-banner/beer-glass.png'

function DrinksBanner() {


    return (
        <div className={"drinks-banner-content-container"}>

            <div className={"drinks-banner-container"}>
                <div className={"drinks-banner-text-container"}>
                    <h2>
                        Every Moment<br/> &nbsp; &nbsp;  &nbsp;  &nbsp;is a masterpiece
                    </h2>
                    <h3>
                        すべての瞬間は傑作です
                    </h3>
                    <p className={"descriptive-Text"}>
                        Made with Taiwan's special longan honey, its distinctive floral fragrance, along with a malt candy-like texture, and the unique sweetness of honey, make you addicted to drinking it.
                    </p>

                </div>

                <div className={"beerGlass-container"}>
                    <img src={beerGlassPng} alt={""}/>
                </div>
            </div>

        </div>
    );
}



export default DrinksBanner;