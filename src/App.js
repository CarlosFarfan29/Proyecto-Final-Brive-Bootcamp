import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import { HomeOCC } from "./pages/OCC/HomeOCC";
import { useState, useEffect, React } from "react";

import { Conditions } from "./pages/Condition";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { CharacterInfo } from "./pages/CharacterInfo";
import { NavBarOCC } from "./components/OCC/NavBarOCC";

import AuthLayout from "./layouts/AuthLayout";
import ModalHistorial from "./components/OCC/ModalHistorial";

function App() {
  // const isLogueado = localStorage.getItem("logueado");
  const [isLogueado, setIsLogueado] = useState(localStorage.getItem("logueado"));

  return (
    <>
      <BrowserRouter>
        <header>
          <Routes>
            <Route path="/" element={(!isLogueado) ? <AuthLayout />: <Navigate to="/home" />}>
              <Route index element={<Login setIsLogueado={setIsLogueado} />} />
            </Route>

            <Route
              path="/home"
              element={(isLogueado) ? 
                <>
                <NavBar setIsLogueado={setIsLogueado}/>
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
              element={(isLogueado) ?
                <>
                  <NavBar setIsLogueado={setIsLogueado} />
                  <Conditions />
                  <Footer />
                </>
              : <Navigate to="/" />}
            />
            <Route
              path="/character/:id"
              element={(isLogueado) ?
                <>
                  <NavBar setIsLogueado={setIsLogueado} />
                  <CharacterInfo />
                  <Footer />
                </>
              : <Navigate to="/" />}
            />
            <Route
              path="/occ"
              element={(isLogueado) ?
                <>
                  <NavBarOCC setIsLogueado={setIsLogueado} />
                  <HomeOCC />
                </>
              : <Navigate to="/" />}
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
