import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />

          <div className="content">
            <Routes>
              <Route path="/about" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
