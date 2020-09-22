import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default class ConfirmationModal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { confirmDialoge, closeConfirmDialoge, removeItem } = value;
          const { id, title, price } = value.confirmProduct;
          if (!confirmDialoge) {
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
                      <h5>Are your sure you want to remove?</h5>
                      <h5>
                        {title} : <i className="fas fa-rupee-sign"></i> {price}
                      </h5>
                      <div>
                        <button
                          className="px-2 mx-2 btn-danger"
                          onClick={() => {
                            removeItem(id);
                            closeConfirmDialoge();
                          }}
                        >
                          Yes
                        </button>
                        <button
                          className="px-2 mx-2 btn-success"
                          onClick={() => closeConfirmDialoge()}
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
