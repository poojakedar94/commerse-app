import "./App.css";
import Homepage from "./pages/Homepage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/women" element={<ProductsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
