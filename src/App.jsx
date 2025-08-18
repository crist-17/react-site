import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Login2 from "./compo/Login2";
import Sclass from "./class/Sclass";
import Arr from "./comp22/Arr";
import Home_0813 from "./comp_0813/Home_0813"
import Comp_0814 from "./comp_0814/Comp_0814";
import React_0818 from "./react_0818/React_0818";

function App() {
  return (
    <>
      <h1>-과제방-방방방</h1>
      <Router>
        <Routes>
     
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="login2" element={<Login2 />} />
            <Route path="Sclass" element={<Sclass />} />
            <Route path="Arr" element={<Arr />} />
             <Route path="Home_0813/*" element={<Home_0813 />} />
              <Route path="Comp_0814" element={<Comp_0814 />} />
              <Route path="react_0818/*" element={<React_0818 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;