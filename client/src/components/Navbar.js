import React, {useContext, Component} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";
import {Button} from "react-bootstrap";



export  const Navbar = () =>{
    const auth = useContext(AuthContext)
    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return(

<div>
    <div className="header">
        <div className="logo">
            <div className="logo-text">
                <h1><a href="/">Департамент військової освіти та науки</a></h1>
                <h2>Мністерство оборони України</h2>
            </div>
        </div>
        <div className="menubar">
            <ul className="menu">
                <li className="selected"><NavLink to="/create">Головна</NavLink></li>
                <li><NavLink to="/univ">Військова освіта</NavLink></li>
                <li><NavLink to="/personal">Особистий кабінет</NavLink></li>
                <li><NavLink to="/links">Зворотній зв'язок</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Вихід</a></li>
            </ul>
        </div>
    </div>





</div>


    )
}