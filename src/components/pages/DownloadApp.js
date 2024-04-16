import React from 'react';
import '../../App.css';
import './DownloadApp.css'
import {FooterWithSocials} from "../../footers/Footers";
import {Button, Form} from "react-bootstrap";

import beOurVipTextSVG from '../../assets/download-app/be-our-vip.svg'
import iPhoneMockup from '../../assets/download-app/iphone-app.png'
import checkMarkSVG from '../../assets/download-app/check-mark.svg'

import getFromPlayStoreImage from '../../assets/download-app/googleplaystore.png'
import getFromAppStoreImage from '../../assets/download-app/app-store-logo.png'
import * as emailjs from 'emailjs-com'

function DownloadAppPage() {

    const [vip_form_name, set_vip_form_name] = React.useState('');
    const [vip_form_email, set_vip_form_email] = React.useState('');

    function signUp(e){

        let templateParams = {
            memberName: vip_form_name,
            memberEmail: vip_form_email
        };
        emailjs.send(
            'smtp_server',
            'vip_subscription',
            templateParams,
            'user_WZYbRfKevl81CEBUZOGwO'
        );

        alert('Thank You! You have been registered successfully!');
        set_vip_form_name('');
        set_vip_form_email('');

    }

    return (
        <div className={"downloads-page-content-container"}>

            <div className={"app-dowload-banner-container"}>
                <div className={"iPhone-mockup-container"}>
                    <img src={iPhoneMockup} alt={""}/>
                </div>
                <div className={"download-links-container"}>
                    <h2>Download today,
                        discount forever
                    </h2>
                    <div className={"app-benefits-container"}>
                        <div className={"app-benefit"}>
                            <span><img src={checkMarkSVG} alt={""}/></span> &nbsp; <span>Enjoy the new member sign up discount</span>
                        </div>

                        <div className={"app-benefit"}>
                            <span><img src={checkMarkSVG} alt={""}/></span> &nbsp; <span>Continuous susprise gift for current members</span>
                        </div>
                        <Button className={"down-load-app-button"}>
                            Download App
                        </Button>
                    </div>
                    <div className={"mobile-app-store-buttons-container"}>
                        <span><img src={getFromAppStoreImage} alt={""}/></span>
                        <span><img src={getFromPlayStoreImage} alt={""}/></span>
                    </div>

                </div>
            </div>

            <div className={"be-our-vip-container"}>
                <h2 className={"referral-gift-heading"}>Referral Gift</h2>
                <img src={beOurVipTextSVG} className={"be-our-vip-text-svg"} alt={""}/>
                <p className={"be"}>Be a member of Sho Sushi Kitchen & Bar, and we will send member discounts
                    and exclusive birthday gifts from time to time.</p>
                <div className={"be-our-vip-form"}>

                    <Form.Control type="Text" placeholder="Your Name"  value={vip_form_name} onInput={e => set_vip_form_name(e.target.value)}/>
                    <Form.Control type="email" placeholder="Your email"  value={vip_form_email} onInput={e => set_vip_form_email(e.target.value)}/>
                </div>
                <Button onClick={signUp} className={"sign-up-button"}>
                    Sign Up
                </Button>
            </div>
            <FooterWithSocials/>
        </div>
    );
}



export default DownloadAppPage;