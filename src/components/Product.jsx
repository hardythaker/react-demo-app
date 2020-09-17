import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.value;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <React.Fragment>
                <div
                  className="img-container p-5"
                  onClick={() => {
                    value.handleDetail(id);
                  }}
                >
                  <Link to="/details">
                    <img src={img} alt="Product" className="card-img-top"></img>
                  </Link>
                  <div className="d-flex justify-content-between">
                    <h5 className="align-self-center mb-0">{title}</h5>
                    <h5 className="text-blue font-italic mb-0">
                      <span className="mr-1">
                        <i className="fas fa-rupee-sign"></i> {price}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between m-auto">
                  <button
                    className="cart-btn btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        InCart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus"> Add to Cart</i>
                    )}
                  </button>
                </div>
              </React.Fragment>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  value: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.3s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    border-radius: 0.5rem;
  }
`;
