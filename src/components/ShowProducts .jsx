import React from 'react'
import { Link } from 'react-router-dom'
const ShowProducts = ({ filters }) => {
    return (
        <>


            {filters.map((producto) => {
                return (

                    <div className="col-md-3 mb-4 mx-2" key={producto.id}>

                        <div className="card h-100 p-2 text-center shadow-sm">
                            <img src={producto.image} className="card-img-top" alt={producto.title} height="250px" />
                            <div className="card-body">
                                <h5 className="card-title mb-0">{producto.title.substring(0, 12)}...</h5>
                                <p className="card-text fw-bold lead">
                                    ${producto.price}
                                </p>

                                <Link to={`/products/${producto.id}`} className="btn btn-primary"> Comprar</Link>
                            </div>
                        </div>

                    </div>

                )
            })}
        </>
    )
}


export default ShowProducts 
