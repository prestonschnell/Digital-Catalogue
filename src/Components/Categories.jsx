import React from 'react'
import './categoriesStyles.css'
import Card from './Card.jsx'

const Categories = () => {
  return (
    <div className='categories-container'>
        <div className="categories-items">
            <div className="categories-header">
              <h3>Categories</h3> 
            </div>
              <div className="categories-grid">
                  <Card link="/category1" image="https://images.thdstatic.com/productImages/46ab3cfb-6093-435d-a6f0-c991006f05c3/svn/framing-studs-058449-64_100.jpg" title="All Inventory"/>
                  <Card link="/product2" image="https://images.thdstatic.com/productImages/46ab3cfb-6093-435d-a6f0-c991006f05c3/svn/framing-studs-058449-64_100.jpg" title="Category 2"/>
                  <Card link="/product3" image="https://images.thdstatic.com/productImages/46ab3cfb-6093-435d-a6f0-c991006f05c3/svn/framing-studs-058449-64_100.jpg" title="Category 3"/>
                  <Card link="/product4" image="https://images.thdstatic.com/productImages/46ab3cfb-6093-435d-a6f0-c991006f05c3/svn/framing-studs-058449-64_100.jpg" title="Category 4"/>
                  <Card link="/product5" image="https://images.thdstatic.com/productImages/46ab3cfb-6093-435d-a6f0-c991006f05c3/svn/framing-studs-058449-64_100.jpg" title="Category 5"/>
                  <Card link="/product6" image="https://images.thdstatic.com/productImages/46ab3cfb-6093-435d-a6f0-c991006f05c3/svn/framing-studs-058449-64_100.jpg" title="Category 6"/>
                  <Card link="/product7" image="https://images.thdstatic.com/productImages/46ab3cfb-6093-435d-a6f0-c991006f05c3/svn/framing-studs-058449-64_100.jpg" title="Category 7"/>
              </div>  
        </div>
    </div>
  )
}

export default Categories
