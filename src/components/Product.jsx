import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action/index.js'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux'

const Product = () => {
    const state = useSelector((state) => state.handleCart)
    const { id } = useParams()

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(false)

    const existing = state.filter(x => x.id === producto.id)

    console.log(existing)

    const dispatch = useDispatch()

    const addProduct = (product) => {
        dispatch(addCart(product))
    }

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
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={320} width={320} />
                </div>
                <div className="col-md-6">
                    <Skeleton height={40} width={200} />
                    <Skeleton height={50} width={500} />
                    <Skeleton height={60} width={220} />
                    <Skeleton height={30} width={180} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={100} width={500} style={{ marginleft: 6 }} />
                    <Skeleton height={50} width={90} />
                </div>
            </>

        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="container py-5">
                    <div className="row py-5" key={producto.id}>

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

                            {
                                existing.length > 0 ? <button className="btn btn-outline-dark px-4 py-2"
                                    onClick={() => addProduct(producto)}> Agregar más
                                </button> :
                                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(producto)}> Agregar al carrito</button>
                            }

                            <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'> Ir al carrito</NavLink>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {
                loading ? <Loading /> : <ShowProduct />
            }
        </>
    )
}

export default Product