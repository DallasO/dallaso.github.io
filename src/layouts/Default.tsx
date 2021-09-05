import React from "react";
import loadable from "@loadable/component";
// Components
import Header from "../components/generic/Header";
import Footer from "../components/generic/Footer";
// Styles
import "../App.css";
// Dynamic imports
const Banner = loadable(() => import("../components/Banner"));

type DefaultLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

function DefaultLayout({ children }: DefaultLayoutProps): JSX.Element {
  return (
    <div>
      <Banner
        bannerText={
          [
            //   "Text1",
            //   "Text2",
            //   "Text3",
            //   <>
            //     moar text <i className="fas fa-external-link-alt"></i>
            //   </>
          ]
        }
      />
      <div className="App">
        <Header />

        {children}

        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
