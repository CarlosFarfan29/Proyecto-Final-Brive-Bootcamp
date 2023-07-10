import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { HomeOCC } from "./pages/OCC/HomeOCC";
import React from 'react';

import { Conditions } from "./pages/Condition";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { CharacterInfo } from "./pages/CharacterInfo";
import { Login } from "./pages/Login";
import { NavBarOCC } from "./components/OCC/NavBarOCC";


function App() {

  return (
    <>      
      <BrowserRouter>
        <header>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/auth/login" element={<Login />} />

            <Route
              path="/home"
              element={
                <>
                  <NavBar />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/conditions"
              element={
                <>
                  <NavBar />
                  <Conditions />
                  <Footer />
                </>
              }
            />
            <Route path="/character/:id" element={
                <>
                  <NavBar />
                  <CharacterInfo />
                  <Footer />
                </>
              } />
              <Route path="/occ" element={
                 <>
                 <NavBarOCC />
                 <HomeOCC />
               </>
              } />
            <Route path="*" element={<Home />} />
          </Routes>
        </header>
        {/* 
        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/character/:id" element={<CharacterInfo />} />
            <Route path="/occ" element={<HomeOCC />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        */}
      </BrowserRouter>
    </>
  );
}

export default App;
