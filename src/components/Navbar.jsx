import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../context";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer className="">
              <span className="mr-2 d-flex m-auto align-items-center justify-content-center">
                <i className="fas fa-cart-plus">&nbsp;
                  <ProductConsumer>
                    {(value) => (value.cart.length)}
                  </ProductConsumer>
                </i>
              </span>
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
