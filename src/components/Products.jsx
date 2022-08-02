import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom'
const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false)

    let mounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch(`http://fakestoreapi.com/products`)
            const data = await response.clone().json()
            const filters = await response.json()

            if (mounted) {
                setData(data)
                setFilter(filters)
                setLoading(false)

                console.log(filter)
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
            mounted = false
        }
        getProducts()


    }, []);

    const Loading = () => {
        return (

            <>

                <div className="col-md-3">

                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">

                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">

                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">

                    <Skeleton height={350} />
                </div>

            </>
        )
    }

    const filterProduct = (filt) => {
        const updateList = data.filter((x) => x.category === filt)

        setFilter(updateList)
    }

    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <div className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>Todos</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Hombre</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Mujer</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronico</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Joyas</div>
                </div>

                {filter.map((producto) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4" >

                                <div className="card h-100 p-4 text-center" key={producto.id} >
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
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">ULTIMOS PRODUCTOS</h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products
