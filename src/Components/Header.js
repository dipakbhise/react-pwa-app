import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <header className=" bg-secondary">




<div className="p-5 d-flex justify-content-center align-center bg-secondary text-light">

    <div className="jumbotron m-5">
        <div className="mt-5">
            <h1 className="display-4 d-flex justify-content-center align-center text-center mb-4">Have an Idea in
                Mind?</h1>
            <p className="lead d-flex justify-content-center align-center text-center">Mastermindkey Technologies
                Pvt. Ltd. is a leading custom web, mobility development company with AI skills. We strive to
                deliver best of the quality through best of the processes using the best available technologies.
            </p>
            
            <div className=" d-flex justify-content-center align-items-center">
                <p className="lead mx-4">
                <NavLink exact to="/products" class="btn btn-primary btn-lg m-2" role="button">Products</NavLink>
                </p>
                <p className="lead">
                <NavLink exact to="/serviceone" class="btn btn-primary btn-lg m-2"  role="button">Services</NavLink>
                </p>
            </div>
        </div>
    </div>

</div>

</header>
            
        </>
    )
}

export default Header
