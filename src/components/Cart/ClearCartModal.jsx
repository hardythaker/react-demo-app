import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

export default class ClearCartModal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { clearCartModal, closeClearCartModal, clearCart } = value;
          if (!clearCartModal) {
            return null;
          } else {
            return (
              <ConfirmationContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="cmodal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>Are your sure you want to remove all products?</h5>
                      <div>
                        <Link to="/products">
                          <button
                            className="px-2 mx-2 btn-danger"
                            onClick={() => {
                              clearCart();
                              closeClearCartModal();
                            }}
                          >
                            Yes
                          </button>
                        </Link>
                        <button
                          className="px-2 mx-2 btn-success"
                          onClick={() => closeClearCartModal()}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ConfirmationContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ConfirmationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #cmodal {
    background: var(--mainWhite);
  }
`;
