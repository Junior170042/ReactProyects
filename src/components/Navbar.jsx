import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

    //adding responsive class
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
            <nav className="nav-bar" id="myNav">
                <NavLink to="/" className="logo active"> MovieLand</NavLink>
                <NavLink to="/" className="link "> Inicio</NavLink>
                <NavLink to="/populares" className="link"> Más populares</NavLink>

                <NavLink to="/" className="link hide"> Enfantiles</NavLink>
                <NavLink to="/" className="link hide"> Dramas</NavLink>
                <NavLink to="/" className="link hide"> Comedias</NavLink>


                <button
                    className="dropdown-toggle drops"
                    data-bs-toggle="dropdown"
                >
                    Explorar
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            Enfantiles
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Dramas
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Comedias
                        </a>
                    </li>
                </ul>


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


        </>
    )
}

export default Navbar
