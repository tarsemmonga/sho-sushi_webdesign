import React, {Component} from 'react';
import '../App.css';
import './Header.css'
import {Navbar}  from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap"
import logo_png from "../assets/logo.png"
import {NavLink} from "react-router-dom";
import { withRouter } from 'react-router-dom'

const DownloadAppButton = withRouter(({ history }) => (
    <Nav.Link className={"download-our-app-button"}  onClick={() => { history.push('/download-app') }}> <NavLink to={"/download-app"}>Download our App</NavLink></Nav.Link>
))
class Header extends Component{
    render() {
        return (
            <Navbar className={"main-nav-container"} sticky="top" expand="lg">
                <Navbar.Brand><NavLink to={"/"}><img src={logo_png} className={"header-branding-logo"}/></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={"custom-toggler"}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavDropdown title={"Menu"} id="collasible-nav-dropdown" className={"l1-dropdown"} style={{color:"white"}} >
                            <NavDropdown title="Chef Select" className={"dropdown-submenu"} style={{color:"white"}} >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Main Dish" className={"dropdown-submenu"} style={{color:"white"}} >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Appetizer" className={"dropdown-submenu"} style={{color:"white"}} >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Dessert" className={"dropdown-submenu"} style={{color:"white"}} >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Drink" className={"dropdown-submenu"} style={{color:"white"}} >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown>

                        </NavDropdown>

                        <Nav.Link style={{color:"white"}}><NavLink to={"/contact"}>Contact</NavLink></Nav.Link>
                        <Nav.Link style={{color:"white"}} ><NavLink to={"/news"}>News</NavLink></Nav.Link>
                        {/*TODO: add order link here*/}
                        <Nav.Link href="/order-link-here"  style={{color:"white"}} >Order Now</Nav.Link>

                        <DownloadAppButton/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);

    }


}


export default Header;