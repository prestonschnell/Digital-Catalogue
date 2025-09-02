import React from 'react'
import Nav from '../Components/Nav.jsx'
import Footer from '../Components/Footer.jsx'
import Card from '../Components/Card.jsx'
import '../Components/categoriesStyles.css'
import Stock from '../assets/istockphoto-1147544807-612x612.jpg'
import { ArrowDown } from 'lucide-react';

const Inventory = () => {
  return (
    <div>
        <Nav/>
        <div>
          <div className='categories-container'>
        <div className="categories-items">
            <div className="categories-header">
              <h3>Inventory</h3> 
            </div>
              <div className="categories-grid">
                  <Card link="/product1" image={Stock} title="Item 1"/>
                  <Card link="/product2" image={Stock}  title="Item 2"/>
                  <Card link="/product3" image={Stock}  title="Item 3"/>
                  <Card link="/product4" image={Stock}  title="Item 4"/>
                  <Card link="/product5" image={Stock}  title="Item 5"/>
                  <Card link="/product6" image={Stock}  title="Item 6"/>
                  <Card link="/product7" image={Stock}  title="Item 7"/>
                  <Card link="/product8" image={Stock}  title="Item 8"/>
                  <Card link="/product9" image={Stock}  title="Item 9"/>
                  <Card link="/product10" image={Stock} title="Item 10"/>
                  <Card link="/product11" image={Stock} title="Item 11"/>
                  <Card link="/product12" image={Stock} title="Item 12"/>
                  <Card link="/product13" image={Stock} title="Item 13"/>
                  <Card link="/product14" image={Stock} title="Item 14"/>
                  <Card link="/product15" image={Stock} title="Item 15"/>
                  <Card link="/product16" image={Stock} title="Item 16"/>
                  <Card link="/product17" image={Stock} title="Item 17"/>
                  <Card link="/product18" image={Stock}  title="Item 18"/>
                  <Card link="/product19" image={Stock}  title="Item 19"/>
                  <Card link="/product20" image={Stock}  title="Item 20"/>
                  <Card link="/product21" image={Stock}  title="Item 21"/>
                  <Card link="/product22" image={Stock}  title="Item 22"/>
                  <Card link="/product23" image={Stock}  title="Item 23"/>
                  <Card link="/product24" image={Stock}  title="Item 24"/>
                  <Card link="/product25" image={Stock}  title="Item 25"/>
                  <Card link="/product26" image={Stock} title="Item 26"/>
                  <Card link="/product27" image={Stock} title="Item 27"/>
                  <Card link="/product28" image={Stock} title="Item 28"/>
                  <Card link="/product29" image={Stock} title="Item 29"/>
                  <Card link="/product30" image={Stock} title="Item 30"/>
                  <Card link="/product31" image={Stock} title="Item 31"/>
                  <Card link="/product32" image={Stock} title="Item 32"/>
              </div>  
        </div>
    </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Inventory




// Here we are creating the Inventory page, which will be used to display items in a specific category.
// The Nav component is included for navigation, and the Footer component is included at the bottom of the page. 
// The Main content of this page is going to use a grid to layout all of the items in our inventory.
// Currently, it just displays a heading "TEST" to indicate that the page is working.
// The Inventory page can be further developed to include features like item listings, search functionality, and more.
// This page can be expanded to include more functionality such as displaying items, filtering, etc.
