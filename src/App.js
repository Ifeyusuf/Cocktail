import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./pages/Navbar";
import SingleCocktails from "./pages/SingleCocktails"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/SingleCocktails/:id' element={<SingleCocktails/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
