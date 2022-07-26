import React from 'react'
import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux'
const Navbar = () => {

    const state = useSelector(state => state.handleCart)

    const setQuantity = () => {

        var i = 0;
        while (i < state.length) {
            var quantity = 0;
            // eslint-disable-next-line no-loop-func
            state.forEach(item => {
                quantity += parseInt(item.qty)

            })
            i++;
        }

        return quantity > 0 ? quantity : state.length
    }



    return (
        <div>
            <nav className=" navbar navbar-light navbar-expand-lg py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bol fs-4" to="/">TU MERCADO EN LINEA!</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Productos</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Acerca de</NavLink>
                            </li>

                            <li className="nav-tem">
                                <NavLink className="nav-link" to="/contact">Contacto</NavLink>
                            </li>

                        </ul>

                        <div className="buttons">
                            <NavLink className="btn btn-outline-dark ms-2" to="/login">
                                <i className="fa fa-sign-in me-1">
                                </i>Iniciar sesion </NavLink>

                            <NavLink className="btn btn-outline-dark ms-2" to="/register">
                                <i className="fa fa-user-plus me-1">
                                </i>Registrar </NavLink>

                            <NavLink className="btn btn-outline-dark my-3 ms-2" to="/cart">
                                <i className="fa fa-shopping-cart me-1">
                                </i>Canasta ({setQuantity()}) </NavLink>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar