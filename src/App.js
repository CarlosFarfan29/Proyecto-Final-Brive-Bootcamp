import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import { HomeOCC } from "./pages/OCC/HomeOCC";
import React from "react";

import { Conditions } from "./pages/Condition";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { CharacterInfo } from "./pages/CharacterInfo";
import { NavBarOCC } from "./components/OCC/NavBarOCC";

import AuthLayout from "./layouts/AuthLayout";
import ModalHistorial from "./components/OCC/ModalHistorial";

function App() {
  const isLogueado = localStorage.getItem("logueado");

  return (
    <>
      <BrowserRouter>
        <header>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route>

            <Route
              path="/home"
              element={(isLogueado) ? 
                <>
                <NavBar />
                <Home />
                <Footer />
              </> : <Navigate to="/" />}
            />
           
           {/*  <Route
              path="/home"
              element={
                <>
                  <NavBar />
                  <Home />
                  <Footer />
                </>
              }
            />*/}
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
            <Route
              path="/character/:id"
              element={
                <>
                  <NavBar />
                  <CharacterInfo />
                  <Footer />
                </>
              }
            />
            <Route
              path="/occ"
              element={
                <>
                  <NavBarOCC />
                  <HomeOCC />
                </>
              }
            />

            <Route path="/modal" element={<ModalHistorial />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </header>
      </BrowserRouter>
    </>
  );
}

export default App;
