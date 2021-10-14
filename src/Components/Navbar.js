import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

<nav className="navbar navbar-expand-lg navbar-light bg-primary text-light fixed-top">
    <div className="container-fluid">
        <NavLink exact to="/" className="navbar-brand text-light fs-4 fw-bold">Mastermindkey</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-2">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link active text-light" aria-current="page" >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/products" className="nav-link text-light" >Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/users" className="nav-link text-light" >Users</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><NavLink exact to="/serviceone" className="dropdown-item" >Service 1</NavLink></li>
                        <li><NavLink exact to="/servicetwo" className="dropdown-item" >Service 2</NavLink></li>

                    </ul>
                </li>
                <li className="nav-item me-5">
                    <NavLink exact to="/contact" className="nav-link text-light" >Contact Us</NavLink>
                </li>


            </ul>

            <form className="d-flex justify-content-end">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light text-warning" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
            
        </>
    )
}

export default Navbar
