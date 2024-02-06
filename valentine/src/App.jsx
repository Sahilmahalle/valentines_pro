import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ask from "./Ask";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/ask" element={<Ask />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
