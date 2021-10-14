import React from 'react'
import { NavLink } from 'react-router-dom'

const Serviceheader = () => {
    return (
        <>
            <div class="p-5 d-flex justify-content-center align-center bg-secondary text-light">

<div class="jumbotron m-5 ">
    <div class="mt-5">
        <h1 class="display-4 d-flex justify-content-center align-center text-center mb-4">Have an Idea in
            Mind?</h1>
        <p class="lead d-flex justify-content-center align-center text-center">Mastermindkey Technologies
            Pvt. Ltd. is a leading custom web, mobility development company with AI skills. We strive to
            deliver best of the quality through best of the processes using the best available technologies.
        </p>
        
        <div class=" d-flex justify-content-center align-items-center">
            <p class="lead">
                <NavLink exact to="/products" class="btn btn-primary btn-lg m-2" role="button">Products</NavLink>
            </p>
            <p class="lead mx-4">
                <NavLink exact to="/serviceone" class="btn btn-primary btn-lg m-2"  role="button">Service 1</NavLink>
            </p>
            <p class="lead">
                <NavLink exact to="/servicetwo" class="btn btn-primary btn-lg m-2" role="button">Service 2</NavLink>
            </p>
        </div>
    </div>
</div>

</div>
        </>
    )
}

export default Serviceheader
