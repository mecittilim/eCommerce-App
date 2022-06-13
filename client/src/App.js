import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />

          <div id="content">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/product/:product_id" element={<ProductDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}



export default App;
