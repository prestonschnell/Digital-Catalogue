import React from 'react'
import './productStyles.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <Link to="/product1">
        <div className="product-card">
          <img src="https://images.thdstatic.com/productImages/46ab3cfb-6093-435d-a6f0-c991006f05c3/svn/framing-studs-058449-64_100.jpg" alt="Product 1" />
          <h3>Product 1</h3>
        </div>
      </Link>
      {/* Add more products as needed */}
    </div>
  )
}

export default Product
