import { Fragment, useState } from "react";
import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import Service from "./Components/Service";
import Technologies from "./Components/Technologies";
import Footer from "./Components/Footer";
import Bottom from "./Components/Bottom";
import FAQS from "./Components/FAQS";
import WhyUs from "./Components/WhyUs";
import AboutUs from "./Components/Aboutus";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <Fragment>
      <div className="relative">
        <Header />

        <Herosection />

        <AboutUs />

        <Technologies />


        <Service />

        <Testimonials/>

        <WhyUs />

        <FAQS />

        <Bottom />

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
