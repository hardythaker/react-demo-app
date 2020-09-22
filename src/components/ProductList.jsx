import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-1">
          <div className="container-fluid">
            <Title name="our" title="products"></Title>
            <ProductConsumer>
              {(value) => {
                return (
                  <div className="row">
                    <div className="col-2">
                      <div
                        className="font-weight-bold bg-white"
                        style={{ fontSize: "1.8rem" }}
                      >
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() => value.filterProducts("allproducts")}
                        >
                          All Products
                        </button>
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() => value.filterProducts("nuts")}
                        >
                          Nuts
                        </button>
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() => value.filterProducts("darkchocolate")}
                        >
                          Dark Chocolate
                        </button>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        {value.filteredProducts.map((product) => {
                          return (
                            <Product key={product.id} value={product}></Product>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
