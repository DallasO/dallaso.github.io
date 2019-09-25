import React from "react";

import "./App.css";

import Header from "./components/generic/Header";
import Footer from "./components/generic/Footer";

import HomePage from "./pages/HomePage";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />

      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
