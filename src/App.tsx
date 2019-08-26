import React, { Component } from "react";

import "./App.css";

import Header from "./components/generic/Header";
import Footer from "./components/generic/Footer";

import HomePage from "./pages/HomePage";

class App extends Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <Header />

        <HomePage />

        <Footer />
      </div>
    );
  }
}

export default App;
