import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Stock from '../assets/istockphoto-1147544807-612x612.jpg'
import '../Components/productPageStyles.css'
import { ArrowDown } from 'lucide-react';

const ProductPage = (props) => {
  return (
    <div>
        <Nav/>
        
        {/* Main Product Element */}
        <div className="product-container">
          <div className="img-product">
              <img src={props.img} alt="" />
          </div>
          <div className="product-info">
            <div className="product-name">
              <h1>{props.name}</h1>
              <p>{props.description}</p>
            </div>
            <div className="product-details">
                <h2>Dimensions</h2>
                <p>{props.dimensions}</p>
                <p>Quantity: {props.quantity}</p>
                <p>Availability: {props.stock} in Stock</p>
              </div>
          </div>
        </div>

      {/* Dropdown Menu where we'll put the Product Details, Specifications, and Questions and Answers. */}
        <div className="drop-menu">
          <div className="drop-item">
            <div className="details">
              <h2>Product Details</h2>
              <p>Here are the product details.</p>
            </div>
            <div className="icon">
              <ArrowDown />
            </div>
          </div>
          <div className="drop-item">
            <div className="details">
              <h2>Specifications</h2>
              <p>Here are the product specifications.</p>
            </div>
            <div className="icon">
              <ArrowDown />
            </div>
          </div>
          <div className="drop-item">
            <div className="details">
              <h2>Questions & Answers</h2>
              <p>Here are the questions and answers.</p>
            </div>
            <div className="icon">
              <ArrowDown />
            </div>
          </div>
        </div>

        <div className="event-photos">
          <h2>Event Set Pieces Using This Product</h2>
          <img src={Stock} alt="" />
        </div>
        



        {/* Image Scroller with event set pieces being used. */}
      <Footer/>
    </div>
  )
}

export default ProductPage
