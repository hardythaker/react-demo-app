import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from './CartList'
import CartTotals from './CartTotals'
import{ Link } from 'react-router-dom'

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart,clearCart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="cart"></Title>
                  <div className="bg-white mx-5 p-5">
                    <p className="p-1">You have {cart.length} products in the cart</p>
                    <Link to="/products">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>Clear Cart</button>
                        </Link>
                    <CartColumns></CartColumns>
                    <CartList value={value}></CartList>
                    <CartTotals value={value}></CartTotals>
                  </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart></EmptyCart>;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}