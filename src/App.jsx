import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Login2 from "./compo/Login2";
import Sclass from "./class/Sclass";

function App() {

  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login" element={<Login />} />
          <Route path="/react-site/login2" element={<Login2 />} />
       <Route path="/react-site/Sclass" element={<Sclass />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
