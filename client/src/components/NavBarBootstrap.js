import React from "react";
import ReactDON from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default function NaviBar() {
    return(
        <>
            <Navbar collapseOnSelect expend="lg" bg="dark" variant="dark">
                <Navbar.Brand>_PZ__1__6</Navbar.Brand>
                <Navbar.Toggle aria-contents="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Grid</Link></Nav.Link>
                        <Nav.Link><Link to="/users">Flexbox</Link></Nav.Link>
                        <Nav.Link><Link to="/about">Float</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Navbar.Brand>Anastasia Kovalchuk</Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    )}