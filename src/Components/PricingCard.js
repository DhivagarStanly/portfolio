import "../Components/PricingCardStyles.css";
import React from 'react'
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
   
    <div className="pricing">
      <h1 className="head">Pricing</h1>
      <div className="card-Container">
<div className="card">
  <h3 className="plan-title">- BASIC - </h3>
  <span className="bar"></span>
  <h1 className="btc">$100</h1>
  <p> - 3 Days - </p>
  <p> - 3 pages - </p>
  <p> - Featured - </p>
  <p> - Responsive Design- </p>
  <Link to ="/contact" className="btn btn2">Buy Now</Link>
</div>
<div className="card">
  <h3 className="plan-title">- Premium - </h3>
  <span className="bar"></span>
  <h1 className="btc">$200</h1>
  <p> - 2 Days - </p>
  <p> - 5 pages - </p>
  <p> - Featured - </p>
  <p> - Responsive Design- </p>
  <Link to ="/contact" className="btn btn2">Buy Now</Link>
</div>
<div className="card">
  <h3 className="plan-title">- Business - </h3>
  <span className="bar"></span>
  <h1 className="btc">$300</h1>
  <p> - 5 Days - </p>
  <p> - 8 pages - </p>
  <p> - Featured - </p>
  <p> - Responsive Design- </p>
  <Link to ="/contact" className="btn btn2">Buy Now</Link>
</div>
      </div>
    </div>
  )
}

export default PricingCard