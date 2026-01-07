import React from 'react'
import Nav from '../Components/Nav.jsx'
import Footer from '../Components/Footer.jsx'
import Card from '../Components/Card.jsx'
import '../Components/categoriesStyles.css'
import Stock from '../assets/istockphoto-1147544807-612x612.jpg'
import DigitalPrint1 from '../assets/Inventory Photos/Category 1/Digital Prints/1.jpg'
import Skyline from '../assets/Inventory Photos/Category 1/Digital Prints/5.jpg'
import FrenchQuarter from '../assets/Inventory Photos/Category 1/Digital Prints/6.jpg'
import GardenDistrict from '../assets/Inventory Photos/Category 1/Digital Prints/7.jpg'
import DigitalBanner1 from '../assets/Inventory Photos/Category 1/Printed Banners/1.jpg'
import MardiGras from '../assets/Inventory Photos/Category 1/Digital Banners/1.jpg'
import CrimsonBackdrop from '../assets/Inventory Photos/Category 1/Backdrops/1.jpg'
import GrayCyc from '../assets/Inventory Photos/Category 1/Backdrops/2.jpg'
import RedMarquee from '../assets/Inventory Photos/Category 1/Marquees/1.jpg'
import PurpleMarquee from '../assets/Inventory Photos/Category 1/Marquees/2.jpg'
import xPanel from '../assets/Inventory Photos/Panels/X_Panels/1.jpg'
import sunray from '../assets/Inventory Photos/Panels/Sunray/1.jpg'
import circles from '../assets/Inventory Photos/Panels/Circles/1.jpg'
import curvedPanels from '../assets/Inventory Photos/Panels/Curved_Panels/1.jpg'
import crescentShapes from '../assets/Inventory Photos/Panels/crescent_Shapes/1.jpg'
import wavePanels from '../assets/Inventory Photos/Panels/Wave_Panels/1.jpg'
import Plexi from '../assets/Inventory Photos/Panels/plexiglass_panels/1.jpg'
import HourGlass from '../assets/Inventory Photos/Panels/Hourglass_Panels/1.jpg'
import CrescentPlexi from '../assets/Inventory Photos/Panels/Crescent_Plexi/1.jpg'
import CircularTruss from '../assets/Inventory Photos/Truss/Circular_Truss/1.jpg'
import AcrylicColumns from '../assets/Inventory Photos/Columns/Acrylic_Columns/1.jpg'
import CrystalChandeliers from '../assets/Inventory Photos/Columns/Crystal_Chandeliers/1.jpg'
import LightBox from '../assets/Inventory Photos/Columns/Lightbox_Columns/1.jpg'
import WroughtIron from '../assets/Inventory Photos/Columns/Wrought_Iron/1.jpg'
import DiamondColumns from '../assets/Inventory Photos/Columns/Diamond_Columns/1.jpg'
import CylindricalColumns from '../assets/Inventory Photos/Columns/Cylindrical_Columns/1.jpg'
import GreekColumns from '../assets/Inventory Photos/Columns/Greek_Columns/1.jpg'
import FrenchQuarterSet from '../assets/Inventory Photos/Nola_Sets/FQ_Set/1.jpg'
import FrenchMarketSet from '../assets/Inventory Photos/Nola_Sets/FM_Set/1.jpg'
import GardenDistrictSet from '../assets/Inventory Photos/Nola_Sets/GD_Set/1.jpg'
import LaffitteBlacksmithShopSet from '../assets/Inventory Photos/Nola_Sets/LBS_Set/1.jpg'



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
                {/* Digital Prints / Banners / Backdrops / Marquees */}
                  <Card link="/product1" image={DigitalPrint1} title="Digital Prints"/>
                  <Card link="/product2" image={Skyline}  title="New Orleans City Skyline Print"/>
                  <Card link="/product3" image={FrenchQuarter}  title="French Quarter Balcony Print"/>
                  <Card link="/product4" image={GardenDistrict}  title="Garden District House Print"/>
                  <Card link="/product5" image={DigitalBanner1}  title="Printed Banners"/>
                  <Card link="/product6" image={MardiGras}  title="Mardi Gras Digital Banners"/>
                  <Card link="/product7" image={CrimsonBackdrop}  title="Crimson Austrian Curtain Backdrop"/>
                  <Card link="/product8" image={GrayCyc}  title="Gray Muslim CYC Backdrop"/>
                  <Card link="/product9" image={RedMarquee}  title="Red Marquee"/>
                  <Card link="/product10" image={PurpleMarquee} title="Purple Marquee"/>
                  {/* Panels */}
                  <Card link="/product11" image={xPanel} title="X Panels"/>
                  <Card link="/product12" image={sunray} title="Sunray Panels"/>
                  <Card link="/product13" image={circles} title="Circular Panels"/>
                  <Card link="/product14" image={curvedPanels} title="Curved Panels"/>
                  <Card link="/product15" image={crescentShapes} title="Crescent Spandex Shapes"/>
                  <Card link="/product16" image={wavePanels} title="Wave Panels"/>
                  <Card link="/product17" image={Plexi} title="Window Plexiglass Panels"/>
                  <Card link="/product18" image={HourGlass}  title="Hourglass Panels"/>
                  <Card link="/product19" image={CrescentPlexi}  title="Crescent Plexi Panels"/>
                  {/* Truss */}
                  <Card link="/product20" image={CircularTruss}  title="Circular Truss (With Logo)"/>
                  {/* LED Fixtures / Columns */}
                  <Card link="/product21" image={AcrylicColumns}  title="Acrylic Columns"/>
                  <Card link="/product22" image={CrystalChandeliers}  title="Crystal Chandelieres"/>
                  <Card link="/product23" image={LightBox}  title="Light Box Columns"/>
                  <Card link="/product24" image={WroughtIron}  title="Wrought Iron Pattern Columns"/>
                  <Card link="/product25" image={DiamondColumns}  title="Diamond Columns"/>
                  <Card link="/product26" image={CylindricalColumns} title="Cylindrical Columns"/>
                  <Card link="/product27" image={GreekColumns} title="Greek Columns"/>
                  {/* New Orleans Sets */}
                  <Card link="/product28" image={FrenchQuarterSet} title="French Quarter Set"/>
                  <Card link="/product29" image={FrenchMarketSet} title="French Market Set"/>
                  <Card link="/product30" image={GardenDistrictSet} title="Garden District Set"/>
                  <Card link="/product31" image={LaffitteBlacksmithShopSet} title="Laffitte Blacksmith Shop Set"/>
                  <Card link="/product32" image={WroughtIron} title="Music Instruments Set"/>
                  <Card link="/product33" image={WroughtIron} title="Gate Set"/>
                  <Card link="/product34" image={WroughtIron} title="New Orleans Cabildo Set"/>
                  {/* Podiums */}
                  <Card link="/product35" image={WroughtIron} title="Plexi Podiums"/>
                  <Card link="/product36" image={WroughtIron} title="Plexi Podiums With Signs"/>
                  <Card link="/product37" image={WroughtIron} title="Three Sided Podium"/>
                  <Card link="/product38" image={WroughtIron} title="French Quarter Podium"/>
                  <Card link="/product39" image={WroughtIron} title="LED Desk"/>
                  <Card link="/product40" image={WroughtIron} title="Graphic Desk"/>
                  <Card link="/product41" image={WroughtIron} title="TV Kiosk"/>
                  <Card link="/product42" image={WroughtIron} title="TV Podium"/>
                  {/* Steps */}
                  <Card link="/product43" image={WroughtIron} title="Stage Steps"/>
                  <Card link="/product44" image={WroughtIron} title="Rounded Stage Steps"/>
                  {/* Miscellaneous */}
                  <Card link="/product45" image={WroughtIron} title="Wooden Stars"/>
                  <Card link="/product46" image={WroughtIron} title="Alamo Set"/>
                  
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
