import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delCart, addCart, removeItem } from '../redux/action'

const Cart = () => {

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(removeItem(item))
    }

    const addMore = (item) => {
        dispatch(addCart(item))
    }

    const substractItem = (item) => {
        dispatch(delCart(item))
    }



    const myProducts = (item) => {
        return (
            <>
                <div className="Container my-4 ">

                    <div className="row justify-content-center bg-light p-4">
                        <div className="col-md-4 my-2">
                            <img src={item.image} alt={item.title}
                                width="200px" height="200px"
                            />
                        </div>

                        <div className="col-md-6">
                            <h4 className="fw-bold my-4">{item.title}</h4>
                            <p className="lead"><strong>Cantidad</strong>
                                <span className="badge bg-primary rounded-pill mx-5" style={{ width: "80px" }}>{item.qty}</span>
                            </p>
                            <p className="lead me-5"> <strong>Precio</strong>
                                <span className='mx-5'>
                                    ${
                                        parseInt(item.price) * parseInt(item.qty)
                                    }
                                </span>

                            </p>
                            <div className="col-md-4 w-50 d-flex justify-content-between my-5">
                                <button className="btn btn-primary" onClick={() => addMore(item)}> Agregar más</button>
                                {
                                    item.qty !== 1 && <button className="btn btn-warning" onClick={() => substractItem(item)}>Disminuir</button>
                                }


                            </div>
                        </div>

                        <button className="btn-close" aria-label="Close" onClick={() => handleClose(item)}></button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>

            {
                state.length !== 0 && state.map(myProducts)
            }

            {
                state.length === 0 && <div className="container text-center py-5">
                    <h1 className="title"> Tu carrito está vacio!</h1>
                </div>
            }
        </>






    )
}

export default Cart