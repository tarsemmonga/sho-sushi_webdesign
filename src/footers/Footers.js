import React from 'react';
import '../App.css';
import './Footer.css'
import logo_png from '../assets/logo.png'
import {Button} from "react-bootstrap";

class GeneralFooter extends React.Component{
  render() {
     return <div className={"main-footer"}>
         <div className={"footer-contents-container"}>
             <div>
                 <img src={logo_png} className={"footer-logo"}/>
             </div>
             <div>
                 <p className={"footer-address"}>
                     Sho Sushi Bar & Kitchen<br/>
                     7212 Macleod Trail SE, Calgary, AB T2H 0L9<br/>
                     Ph: <a href={"tel:403-252-5199"} style={{color:"White", textDecoration:"underline"}}>(403) 252-5199</a><br/>
                 </p>


             </div>
         </div>
     </div>;
  };
};



class FooterWithSocials extends React.Component{
    render() {
        return <div className={"main-footer socials-footer"}>
            <div className={"footer-contents-container"}>
                <div>
                    <img src={logo_png} className={"footer-logo"}/>
                </div>
                <div>
                    <p className={"footer-address"}>
                        Sho Sushi Bar & Kitchen<br/>
                        7212 Macleod Trail SE, Calgary, AB T2H 0L9<br/>
                        Ph: <a href={"tel:403-252-5199"} style={{color:"White", textDecoration:"underline"}}>(403) 252-5199</a><br/>
                    </p>
                    <a href={"https://www.facebook.com/Sho-Sushi-Bar-Kitchen-313160498760864/"}> <i className="fab fa-facebook"></i></a>
                    <a href={"https://www.facebook.com/Sho-Sushi-Bar-Kitchen-313160498760864/"}><i className="fab fa-instagram"></i></a>

                    <p className={"footer-promo-text"}>
                        “The first restaurant with a high rise chamber in the middle of most popular
                        Mcleod Trail, which demonstrates the majestic presence of its flagship structure”
                    </p>

                </div>
            </div>
        </div>;
    };
};


class FooterReservations extends React.Component{
    render() {
        return <div className={"main-footer socials-footer reservations-footer"}>
            <h2> INFO </h2>
            <div className={"footer-contents-container"}>
                <div>
                    <img src={logo_png} className={"footer-logo"}/>
                </div>
                <div>
                    <p className={"footer-address"}>
                        Sho Sushi Bar & Kitchen<br/>
                        7212 Macleod Trail SE, Calgary, AB T2H 0L9<br/>
                        Ph: <a href={"tel:403-252-5199"} style={{color:"White", textDecoration:"underline"}}>(403) 252-5199</a><br/>
                    </p>
                    <a href={"https://www.facebook.com/Sho-Sushi-Bar-Kitchen-313160498760864/"}> <i className="fab fa-facebook"></i></a>
                    <a href={"https://www.facebook.com/Sho-Sushi-Bar-Kitchen-313160498760864/"}><i className="fab fa-instagram"></i></a>
                    <div className={"footer-button-promo-text-container"}>
                        <Button variant="outline-primary" className={"make-reservation-button"}><span className={"make-reservation-span"}>Make a Reservation</span> <span>予約する</span></Button>
                        <p className={"footer-promo-text"}>
                            “The first restaurant with a high rise chamber in the middle of most popular
                            Mcleod Trail, which demonstrates the majestic presence of its flagship structure”
                        </p>

                    </div>


                </div>
            </div>
        </div>;
    };
};

export {GeneralFooter, FooterWithSocials, FooterReservations};