import React from 'react'
import {BlockNews} from "../components/BlockNews";
import {Table} from "../components/Table";





export const UniversitiesPage = () =>{
    return(
        <div>
            <div className="site_content">
                <div className="content"><Table/></div>
                <div className="sidebar_container"><BlockNews/></div>
            </div>
        </div>

    )
}