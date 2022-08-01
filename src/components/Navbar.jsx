import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm bg-white">
                <div className="container">
                    <a className="navbar-brand fw-bol fs-4" href="/some/valid/uri#top">TU MERCADO EN LINEA!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/some/valid/uri#top">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/some/valid/uri#top">Producto</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/some/valid/uri#top">Acerca de</a>
                            </li>

                            <li className="nav-tem">
                                <a className="nav-link" href="/some/valid/uri#top">Contacto</a>
                            </li>

                        </ul>

                        <div className="buttons">
                            <a className="btn btn-outline-dark ms-2" href="/some/valid/uri#top">
                                <i className="fa fa-sign-in me-1">
                                </i>Iniciar sesion </a>

                            <a className="btn btn-outline-dark ms-2" href="/some/valid/uri#top">
                                <i className="fa fa-user-plus me-1">
                                </i>Registrar </a>

                            <a className="btn btn-outline-dark ms-2" href="/some/valid/uri#top">
                                <i className="fa fa-shopping-cart me-1">
                                </i>Cart (0) </a>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar