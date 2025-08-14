import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
      <h1>-과제방-방방방</h1>
      <Router>
        <Routes>
     
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="login2" element={<Login2 />} />
            <Route path="Sclass" element={<Sclass />} />
            <Route path="Arr" element={<Arr />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;