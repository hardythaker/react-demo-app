import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="row align-items-center" style={{ height: "80vh" }}>
        <div className="col-7">
          <h1 className="text-center brand-title">
            Bertha's Chocolate Factory
          </h1>
          <h4 className="pt-4 brand-subtitle">The Finest Chocolates</h4>
          <div className="pt-4 ml-2">
            <Link to="/products">
              <button className="btn bg-white brand-subtitle-button">
                <p className="pt-1">Browse your favourites</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-5">
          <div className="img-fluid">
            <img src="/img/home.png" className="card-img-top" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
