import React from "react";
import ReactDOM from 'react-dom'
import  'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import cadet from "../assets/cadets.png";
import src3 from '../assets/src3.jpg'
import src1 from '../assets/src1.jpg'
import src2 from '../assets/src2.jpg'
import src4 from '../assets/src4.jpg'
import src5 from '../assets/src5.jpg'

export  const DemoCarousel = () => {

    return (
        <div>
            <Carousel>
                <div>
                    <img src={src1}/>
                    <h2>Sample caption</h2>
                </div>

                <div>
                    <img src={src2}/>
                    <h2>Sample caption</h2>
                </div>

                <div>
                    <img src={src3}/>
                    <h2>Sample caption</h2>
                </div>

                <div>
                    <img src={src4}/>
                    <h2>Sample caption</h2>
                </div>

                <div>
                    <img src={src5}/>
                    <h2>Sample caption</h2>
                </div>
            </Carousel>
        </div>
    )
};


//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls