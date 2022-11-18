import {BrowserRouter as Router} from "react-router-dom";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import Profile from './pages/ProfilePage';
import ViewItem from './pages/ViewItem';
import Sales from './pages/Sales';



function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/item/:id" element={<ViewItem />}/>
        <Route path="/sales" element={<Sales />}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
