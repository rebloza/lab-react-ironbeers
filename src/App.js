import "./App.css";

import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/beers" element={<AllBeers />} />

        <Route path="/beers/:beerId/details" element={<BeerDetails />} />

        <Route path="/random-beer" element={<RandomBeer />} />

        <Route path="/new-beer" element={<NewBeer />} />

        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
