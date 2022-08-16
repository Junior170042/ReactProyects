import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

    const responsive = () => {
        let _mynav = document.getElementById('myNav');
        if (_mynav.className === "nav-bar") {
            _mynav.className += " responsives";

        } else {
            _mynav.className = "nav-bar";
        }
    }
    return (
        <>
            <div className="container">
                <nav className="nav-bar" id="myNav">
                    <NavLink to="/" className="logo"> MovieLand</NavLink>
                    <NavLink to="/" className="active"> Inicio</NavLink>
                    <NavLink to="somewhere" className="link"> Acction</NavLink>
                    <NavLink to="somewhere" className="link"> Series</NavLink>
                    <form className="form">
                        <input type="text" name="search"
                            placeholder="buscar pelis ..."
                        ></input>
                        <i className="fa fa-search"></i>
                    </form>
                    <button
                        className="icon logo" onClick={() => responsive()}>
                        <i className="fa fa-bars"></i>
                    </button>
                </nav>
            </div>
        </>
    )
}

export default Navbar
