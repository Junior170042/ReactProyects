import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
const Product = () => {

    const { id } = useParams()
    console.log(id)
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`http://fakestoreapi.com/products/${id}`);
            setProducto(await response.json());
            setLoading(false)

        }
        getProduct()
    }, [id])
    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 my-4">
                    <img alt={producto.tilte} src={producto.image}
                        height="400px" width="400px"
                    />
                </div>

                <div className="col-md-6 my-4">
                    <h4 className="text-uppercase text-black-50">
                        {producto.category}
                    </h4>
                    <h1 className='display-5'>{producto.title}</h1>
                    <p className='lead fw-bolder'>
                        Calificacion {producto.rating && producto.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>

                    <h3 className='fw-bold display-6 my-4'>
                        ${producto.price}
                    </h3>

                    <p className='lead'>{producto.description}</p>
                    <button className='btn btn-outline-dark me-2'> Agregar al carrito</button>
                    <button className='btn btn-outline-dark'> Mis Productos</button>
                </div>
            </>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : <ShowProduct />}
            </div>

        </div>
    )
}

export default Product