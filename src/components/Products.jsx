import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import ShowProducts from './ShowProducts ';
const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false)

    let mounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch(`http://fakestoreapi.com/products`)
            const data = await response.json()

            if (mounted) {
                setData(data)
                setFilter(data)
                setLoading(false)

            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
            mounted = false
        }
        getProducts()


    }, []);

    //Loading
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

    //filter product by category
    const filterProduct = (filt) => {
        const updateList = data.filter((x) => x.category === filt)

        setFilter(updateList)
    }



    return (
        <>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">ULTIMOS PRODUCTOS</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className=" containers d-flex justify-content-center mb-5 pb-5">
                    <div className=" button-lg btn btn-outline-dark me-2" onClick={() => setFilter(data)}>Todos</div>
                    <div className="button-lg btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Joyas</div>
                    <div className=" button-lg btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Hombre</div>
                    <div className=" button-lg btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Mujer</div>
                    <div className=" button-lg btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronico</div>

                </div>


                <div className="row justify-content-center">
                    {loading ? <Loading /> : <><ShowProducts filters={filter} /></>}
                </div>
            </div>
        </>
    )
}

export default Products
