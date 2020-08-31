import React, { useState } from "react";
import { useTransition } from "react-spring";
// Components
import Header from "./components/generic/Header";
import Footer from "./components/generic/Footer";
import Banner from "./components/Banner";
import HomePage from "./pages/HomePage";
import OpenBanner from "./components/OpenBanner";
// Styles
import "./App.css";

function App(): JSX.Element {
  const [banner, setBannner] = useState(true);

  const displayedBanner = {
    component: Banner,
    from: { opacity: 0, height: "0vh" },
    enter: { opacity: 1, height: "100vh" },
    leave: { opacity: 0, height: "0vh" }
  };
  const hiddenBanner = {
    component: OpenBanner,
    from: { opacity: 0, height: "0vh" },
    enter: { opacity: 1, height: "5vh" },
    leave: { opacity: 0, height: "0vh" }
  };

  const backgroundTransition = useTransition(
    banner ? displayedBanner : hiddenBanner,
    {
      key: banner ? 0 : 1,
      from: item => item.from,
      enter: item => item.enter,
      leave: item => item.leave
    }
  );

  return (
    <div>
      {backgroundTransition((style, item) => (
        <item.component
          show={banner}
          toggleBanner={(): void => setBannner(state => !state)}
          transition={style}
        />
      ))}
      <div className="App">
        <Header />

        <HomePage />

        <Footer />
      </div>
    </div>
  );
}

export default App;
