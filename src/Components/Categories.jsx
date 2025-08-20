import React from 'react'
import './categoriesStyles.css'
import Card from './Card.jsx'
import Stock from '../assets/istockphoto-1147544807-612x612.jpg'

const Categories = () => {
  return (
    <div className='categories-container'>
        <div className="categories-items">
            <div className="categories-header">
              <h3>Categories</h3> 
            </div>
              <div className="categories-grid">
                  <Card link="/category1" image={Stock} title="All Inventory"/>
                  <Card link="/category2" image={Stock} title="Category 2"/>
                  <Card link="/category3" image={Stock} title="Category 3"/>
                  <Card link="/category4" image={Stock} title="Category 4"/>
              </div>  
        </div>
    </div>
  )
}

export default Categories
