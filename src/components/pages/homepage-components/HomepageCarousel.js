import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import './HomepageCarousel.css'
import Tilt from 'react-tilt'
import logoPng from '../../../assets/logo.png'

const CarouselImage0 = require( "../../../assets/homepage-carousel/img-1.jpg");
const CarouselImage1 = require( "../../../assets/homepage-carousel/img-2.JPG");
const CarouselImage2 = require( "../../../assets/homepage-carousel/img-3.JPG");
const CarouselImage3 = require( "../../../assets/homepage-carousel/img-4.JPG");



function CarouselImage(props){
    var background = props.src;
    return (<div className={"carousel-image-div"} style={{'background':`url('${background}')`}}>
            </div>);
}

class HomepageCarousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index:0,
            direction:null
        };

    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index:selectedIndex,
            direction:e.direction
        })
    }

    render(){
        return (
            <div className={"carousel-container"}>
                <div className={"carousel-indicator"}>
                    <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 300, width: 300 }} >
                        <div className={"carousel-indicator-container carousel-circle"}>
                            <img src={logoPng} className={"logo"} alt={""}/>
                        </div>
                        <div className={"sprite-article-intro-button-sun"} onClick={()=>{this.setState({index:0})}}></div>
                        <div className={"sprite-article-intro-button-cup"} onClick={()=>{this.setState({index:1})}}></div>
                        <div className={"sprite-article-intro-button-sunrise"} onClick={()=>{this.setState({index:2})}}></div>
                        <div className={"sprite-article-intro-button-night"} onClick={()=>{this.setState({index:3})}}></div>
                        <div className={`indicator-circle-container index-${this.state.index}`}>
                            <div className={"circle-indicator"}></div>
                        </div>

                    </Tilt>
                </div>
                <Carousel className="carousel-fade" controls={false} indicators={false} activeIndex={this.state.index} direction={this.state.direction} interval={2000} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <CarouselImage
                            className="d-block w-100"
                            src={CarouselImage0}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage
                            className="d-block w-100"
                            src={CarouselImage1}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage
                            className="d-block w-100"
                            src={CarouselImage2}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage
                            className="d-block w-100"
                            src={CarouselImage3}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }


}

export default HomepageCarousel;