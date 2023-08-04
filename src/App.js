import React from "react";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import User1 from "./User/User1";
import User2 from "./User/User2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/class10" element={<User />} />
          <Route path="/class11" element={<User1 />} />
          <Route path="/class12" element={<User2 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
