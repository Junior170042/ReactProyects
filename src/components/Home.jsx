import React from 'react'
import J7coder from "./Images/junior7.png"
import Products from './Products'
const Home = () => {
    return (
        <div className="hero">

            <div className="card text-bg-dark bgs">
                <img src={J7coder} className="card-img" alt="..." />

                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">

                        <h5 className="card-title display-3 fw-bolder m-0">LA MODA ES SENCILLA</h5>
                        <p className="card-text lead fs-2">Te la llevamos a tu gusto!</p>
                        <p className="card-text">J7coder designer</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home