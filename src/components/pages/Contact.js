import React, { Component } from 'react';
import '../../App.css';
import './Contact.css'
import TokyoStylePNG from '../../assets/contact/tokyo-style-banner.svg'
import {FooterReservations} from "../../footers/Footers";

class ContactPage extends Component{
    render() {
        return (
            <div>
                <div className="contact-page-content">
                    <div className={"contact-page-banner-container"}>
                        <img alt={""} src={TokyoStylePNG}/>
                    </div>


                    <div className={"contact-page-banner-container-2"}>
                        <p>
                            The floor, walls, ceiling, tables and sushi bar are composed of japanese famous food destination in Tokyo.
                            Slightly different clear finishes and a geometric grid pattern on a few of the wall surfaces create a sense of dimension and groundedness.
                            The airy interior is a haven from the noise and grit of the city outside. Tucked away on East Forty-Third Street between Second and Third Avenues,
                            the inside can be seen from the street through the clean, Mondrian-like design of the vast main window. The street view is visible looking east and
                            Grand Central Station is visible to the west.
                        </p>
                        <p> Private dinning is available at the upper floor for the entire street view on Macleod Trail</p>
                        <p>
                            Amenities such as a presentation-ready flat screen TV with a computer, state-of-the-art surround sound audio,
                            secure Wi-Fi and customized menus can also be provided. Please contact our private coordinator to create your customized dining experience.
                        </p>
                    </div>

                </div>

                <FooterReservations/></div>
        );
    }


}

export default ContactPage;