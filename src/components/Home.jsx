import React from 'react'
import J7coder from "./Images/junior7coder.png"
import Products from './Products'
const Home = () => {
    return (
        <>


            <div className="container bgs text-white">

                <div className="row">

                    <div className="col-md-12 m-5">


                        <h3 className=" title display-2 fw-bolder">LA MODA ES SENCILLA</h3>
                        <p className="lead fs-1 px-1">Te la llevamos a tu gusto!</p>


                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 text-end">

                        <img src={J7coder} alt="Title-img" />
                    </div>

                    <div className="col-md-6"> <p className="lead px-1">J7coder designer</p></div>


                </div>


            </div>

            <div className="container">
                <Products />
            </div>
        </>
    )
}

export default Home