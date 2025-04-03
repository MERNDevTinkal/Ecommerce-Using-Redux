import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Cart from "./components/Cart";
import ProductDetailsPage from "./components/ProductDetailsPage";
const App = () => {


  return (

    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Product />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <Product />
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProductDetailsPage/:id" element={<ProductDetailsPage />} />

        </Routes>
      </main>

      <Footer />


    </div>

  );
};

export default App;
