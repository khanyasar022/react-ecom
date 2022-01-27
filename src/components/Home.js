import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <div className="hero">
        <div className="card bg-dark text-white">
            <img src="/assets/bg.jpg" className="card-img" alt="Background" height="550px" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0 text-black">NEW ARRIVALS</h5>
                <p className="card-text LEAD fs-2 text-black">
                    CHECK OUT ALL TRENDS
                </p>
                </div>
            </div>
        </div>
        <Products/>
    </div>
    );
};

export default Home;
