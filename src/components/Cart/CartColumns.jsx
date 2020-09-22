import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row pt-2" style={{ background: "rgb(223, 219, 219)" }}>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">quntity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
