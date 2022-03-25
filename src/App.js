import { Home } from "./pages/Home/Home";
import "./styles/base/base.css";
import "./styles/index.css";
import { Products } from "./pages/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./components/homepage/Header";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
