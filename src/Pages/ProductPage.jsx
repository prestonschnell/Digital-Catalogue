import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Stock from '../assets/istockphoto-1147544807-612x612.jpg'

const ProductPage = () => {
  return (
    <div>
        <Nav/>
        <div classname="product-container">
            <img src={Stock} alt="" />
            <h1>Product Page</h1>
            <h3>Here is the Name of the Product.</h3>
            <p>here is a short description of each item for our product. </p>
            <h2>Dimensions</h2>
            <p># x #</p>
            <p>Quantity: #</p>
            Availability: # in Stock
            </div>
      <Footer/>
    </div>
  )
}

export default ProductPage
