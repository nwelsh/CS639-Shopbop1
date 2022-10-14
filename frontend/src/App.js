import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Choices from "./Pages/Choices";
import Swipe from "./Pages/Swipe";
import Welcome from "./Pages/Welcome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
      </Routes>

      <Routes>
        <Route path="/choices" element={<Choices/>} />
      </Routes>

      <Routes>
        <Route path="/swipe" element={<Swipe/>} />
      </Routes>
    </Router>
  );
};

export default App;
