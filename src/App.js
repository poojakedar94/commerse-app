import "./App.css";
import Homepage from "./pages/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Header from "./components/Header";
import store from "./store";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/women" element={<ProductsPage />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
