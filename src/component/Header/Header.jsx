import React, { useContext } from 'react';
import logo from '/public/vite.svg'
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
const Header = () => {
    const { user,logOut } = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiar bg-primary">
            <Container>
                <Navbar.Brand href="/"><img className='rounded-circle' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto " >
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/recipies">Recipies</NavLink>

                    </Nav>

                    {/* 2nd part */}
                    <Nav className=''>
                        {
                            user ?
                                <div className='d-flex justify-content-center align-items-center text-white fw-bold gap-4'>
                                    <div className='d-flex flex-column justify-content-center align-items-center'><h1>{user?.email}</h1>
                                        <h1>{user?.displayName}</h1>
                                    </div>

                                    <img className='rounded-circle' src={user?.photoURL} alt="" />
                                    <Button onClick={()=>logOut()} className='bg-white fw-bold' variant="warning">Logout</Button>

                                </div> :

                                <><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/login">Login</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/register">Rgister</NavLink></>
                        }



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;