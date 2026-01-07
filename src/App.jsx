import Homepage from './Pages/Homepage'
import {Route, Routes, BrowserRouter} from "react-router"; 
import Inventory from './Pages/Inventory';
import ProductPage from './Pages/ProductPage';
import Stock from './assets/istockphoto-1147544807-612x612.jpg'
import DigitalPrint1 from '../src/assets/Inventory Photos/Category 1/Digital Banners/1.jpg'
import Skyline from '../src/assets/Inventory Photos/Category 1/Digital Prints/5.jpg'
import FrenchQuarter from '../src/assets/Inventory Photos/Category 1/Digital Prints/6.jpg'
import GardenDistrict from '../src/assets/Inventory Photos/Category 1/Digital Prints/7.jpg'
import DigitalBanner1 from '../src/assets/Inventory Photos/Category 1/Printed Banners/1.jpg'
import MardiGras from '../src/assets/Inventory Photos/Category 1/Digital Banners/1.jpg'
import CrimsonBackdrop from '../src/assets/Inventory Photos/Category 1/Backdrops/1.jpg'


const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            {/* By using routers, we can dynamically connect all of our pages together. */}
            <Route path="/" element={<Homepage />} />
            <Route path="/category1" element={<Inventory />} />
            <Route path="/product1" element={<ProductPage img={DigitalPrint1} name="Digital Prints" description="Here is a description of the product of which is being displayed" dimensions={"13'1\" x 10'1\""} quantity="#" stock="#" />} /> {/* If we wanted to have multiple product pages, we would need to set routers and links for each one. */}
            <Route path="/product2" element={<ProductPage img={Skyline} name="New Orleans City Skyline Print" description="Here is a description of the product of which is being displayed" dimensions={"21'5\" x 10'1\""} quantity="#" stock="#" />} />
            <Route path="/product3" element={<ProductPage img={FrenchQuarter} name="French Quarter Balcony" description="Here is a description of the product of which is being displayed" dimensions={"17'6\" x 14'"} quantity="#" stock="#" />} />
            <Route path="/product4" element={<ProductPage img={GardenDistrict} name="Garden District House Print" description="Here is a description of the product of which is being displayed" dimensions={"6.5' x 10'"} quantity="#" stock="#" />} />
            <Route path="/product5" element={<ProductPage img={DigitalBanner1} name="Printed Banners" description="Here is a description of the product of which is being displayed" dimensions={"8' x 16'"} quantity="#" stock="#" />} />
            <Route path="/product6" element={<ProductPage img={MardiGras} name="Mardi Gras Digital Banners" description="Here is a description of the product of which is being displayed" dimensions={"7.5' x 11'9\""} quantity="#" stock="#" />} />
            {/* <Route path="/product" element={<ProductPage img={} name="" description="Here is a description of the product of which is being displayed" dimensions={"6.5' x 10'"} quantity="#" stock="#" />} /> */}
            <Route path="/product7" element={<ProductPage img={CrimsonBackdrop} name="Crimson Austrian Backdrop" description="Here is a description of the product of which is being displayed" dimensions={"6.5' x 10'"} quantity="#" stock="#" />} />     
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App







