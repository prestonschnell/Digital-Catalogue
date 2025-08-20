import Homepage from './Pages/Homepage'
import {Route, Routes, BrowserRouter} from "react-router"; 
import Inventory from './Pages/Inventory';
import ProductPage from './Pages/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            {/* By using routers, we can dynamically connect all of our pages together. */}
            <Route path="/" element={<Homepage />} />
            <Route path="/category1" element={<Inventory />} />
            <Route path="/product1" element={<ProductPage />} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App







