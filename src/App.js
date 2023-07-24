import React, { useState, useEffect } from "react";
import "./css/main.scss";
import { Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Home from "./page/Home/Home.jsx";
import NavBar from "./components/Utility/NavBar";
import Footer from "./components/Utility/Footer";
import LoginPage from "./page/Auth/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage";
import CategoryPage from "./page/CategoryPage/CategoryPage";
import MostSeller from "./page/Product/MostSeller";
import MostRated from "./page/Product/MostRated";
import BrandPage from "./page/Brand/BrandPage";
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="load-page">
          <ClipLoader
            color="#04142d"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            
          />
        </div>
      ) : (
        <div>
          <NavBar />

            <Routes>
              <Route index element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/allCategory" element={<CategoryPage />} />
              <Route path="/mostSeller" element={<MostSeller />} />
              <Route path="/mostRated" element={<MostRated />} />
              <Route path="/allBrand" element={<BrandPage />} />
            </Routes>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
