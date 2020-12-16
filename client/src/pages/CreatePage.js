import React from 'react'
import {Container} from "react-bootstrap";
import Tab from 'react-bootstrap'
import cadet from '../assets/cadets.png'
import {DemoCarousel} from "../components/DemoCarousel";
import {BlockNews} from "../components/BlockNews";
import {Content} from "../components/Content";



export const CreatePage = () =>{
    return(
        <div>
            <div className="site_content">
            <div className="content"><DemoCarousel/> <Content/></div>
            <div className="sidebar_container"><BlockNews/></div>
        </div>
        </div>
    )
}