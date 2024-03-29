import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Dashboard";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />}/>
        <Route path="dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
