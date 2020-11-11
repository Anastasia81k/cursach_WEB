import React from 'react'
import {Container} from "react-bootstrap";
import Tab from 'react-bootstrap'
import cadet from '../assets/cadets.png'
import {DemoCarousel} from "../components/DemoCarousel";
import {BlockNews} from "../components/BlockNews";



export const CreatePage = () =>{
    return(
        <div>
            <h1>Create Page</h1>
            <div className="site_content">
            <div className="content"><DemoCarousel/></div>
            <div className="sidebar_container"><BlockNews/></div>
        </div>
        </div>
    )
}