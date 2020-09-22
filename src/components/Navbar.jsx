import React, { Component } from "react";
//import logo from "../logo.svg";
import { Link } from "react-router-dom";
//import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../context";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light px-sm-5">
        <div
          className="d-flex "
          style={{ background: "white", borderRadius: "2rem" }}
        >
          <ul className="navbar-nav align-items-center">
            <li className="navbar-brand mx-4 font-weight-bold">
              <Link to="/" className="nav-link">
                Bertha's
              </Link>
            </li>
            <li className="mx-4">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link to="/products" className="nav-link">
                Order Online
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/cart" className="ml-auto">
          {/* <ButtonContainer className=""> */}
          <button
            className="m-auto bg-white border-0 p-3 mt-1"
            style={{ borderRadius: 15 }}
          >
            <span className="mr-2 d-flex m-auto align-items-center justify-content-center">
              <i className="fas fa-cart-plus">
                &nbsp;|&nbsp;
                <ProductConsumer>
                  {(value) => value.cart.length}
                </ProductConsumer>
              </i>
            </span>
          </button>

          {/* </ButtonContainer> */}
        </Link>
      </nav>
    );
  }
}
