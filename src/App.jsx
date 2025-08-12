import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";


// import { useState } from "react";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Login2 from "./compo/Login2";
import Sclass from "./class/Sclass";
import Arr from "./comp22/Arr";

function App() {

  return (
    <>
      <h1>-과제방-방방</h1>
      <Router>
        <Routes>
          <Route path="/react-site/" element={<Layout />}></Route>

          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login/" element={<Login />} />
          <Route path="/react-site/login2/" element={<Login2 />} />
          <Route path="/react-site/Sclass/" element={<Sclass />} />
          <Route path="/react-site/Arr/" element={<Arr />} />


        </Routes>
      </Router>
    </>
  )
}

export default App
