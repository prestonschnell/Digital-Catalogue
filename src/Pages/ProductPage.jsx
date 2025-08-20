import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Stock from '../assets/istockphoto-1147544807-612x612.jpg'
import '../Components/productPageStyles.css'

const ProductPage = () => {
  return (
    <div>
        <Nav/>
        
        {/* Main Product Element */}
        <div className="product-container">
          <div className="img-product">
              <img src={Stock} alt="" />
          </div>
          <div className="product-info">
            <div className="product-name">
              <h1>Here is the Name of the Product.</h1>
              <p>here is a short description of each item for our product. </p>
            </div>
            <div className="product-details">
                <h2>Dimensions</h2>
                <p># x #</p>
                <p>Quantity: #</p>
                <p>Availability: # in Stock</p>
              </div>
          </div>
        </div>

      {/* Dropdown Menu where we'll put the Product Details, Specifications, and Questions and Answers. */}
        <div className="drop-menu">
          
        </div>



        {/* Image Scroller with event set pieces being used. */}
      <Footer/>
    </div>
  )
}

export default ProductPage
