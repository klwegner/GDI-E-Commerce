import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import Profile from './pages/ProfilePage';
import ViewItem from './pages/ViewItem';
import Sales from './pages/Sales';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/item" element={<ViewItem />}/>
        <Route path="/sales" element={<Sales />}/>
      </Routes>
    </BrowserRouter>
    {/* <h1>Kristen's Shop</h1>
      <h2>My Third Attempt at an E-Commerce App</h2> */}
       
{/* <Footer /> */}

    </div>
  );
}

export default App;
