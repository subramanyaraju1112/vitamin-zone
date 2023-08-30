import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
