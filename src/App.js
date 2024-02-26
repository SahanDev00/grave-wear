import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Accessories from './Pages/Accessories/Accessories';
import Anime from './Pages/Anime/Anime';
import Gothic from './Pages/Gothic/Gothic';
import Home from "./Pages/Home/Home";
import Men from './Pages/Men/Men';
import Women from './Pages/Women/Women';
import SearchBar from './Components/SearchBar'; // Import your SearchBar component
import SearchResults from './Components/SearchResults'; // Import your SearchResults component
import { men, women, anime, gothic, accessories } from './Products/Product';

function App() {
  const allProducts = [...men, ...women, ...anime, ...gothic, ...accessories];
  return (
    <div >
      <Router>
        <Navbar/>
        <SearchBar products={allProducts} />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/men' element={<Men/>} />
            <Route path='/women' element={<Women/>} />
            <Route path='/anime' element={<Anime/>} />
            <Route path='/gothic' element={<Gothic/>} />
            <Route path='/accessories' element={<Accessories/>} />
            <Route path="/search" element={<SearchResults products={allProducts} />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
