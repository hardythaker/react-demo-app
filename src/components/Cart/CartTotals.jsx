import React from 'react'
// import { Link } from 'react-router-dom'
// import { ButtonContainer } from '../Button'

export default function CartTotals({value}) {
    const { cartSubTotal, cartTax, cartTotal } = value
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            <strong>
                                <i className='fas fa-rupee-sign'></i> {cartSubTotal}
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax :
                            </span>
                            <strong>
                            <i className='fas fa-rupee-sign'></i> {cartTax}
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total :
                            </span>
                            <strong>
                                <i className='fas fa-rupee-sign'></i> {cartTotal}
                            </strong>
                        </h5>
                        <button className="btn btn-success py-2 px-4">
                            Check Out
                        </button>
                    </div>                
                </div>
            </div>
        </React.Fragment>
    )
}
