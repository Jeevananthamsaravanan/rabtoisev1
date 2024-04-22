import { Fragment, useState } from "react";
import Header from "../Components/Header";
import Herosection from "../Components/Herosection";
import Service from "../Components/Service";
import Technologies from "../Components/Technologies";
import Footer from "../Components/Footer";
import Bottom from "../Components/Bottom";
import FAQS from "../Components/FAQS";
import WhyUs from "../Components/WhyUs";
import AboutUs from "../Components/Aboutus";
import Testimonials from "../Components/Testimonials";
import SEO from "../Components/seo/Seo";
import { useLocation } from "react-router-dom";

function Home() {
    let { pathname } = useLocation();
    let title = "Home ";
    let description = " Rabtoise Home Page";
  return (
    <Fragment>
         <SEO
        titleTemplate={title}
        description={description}
      />
      <div className="relative">
        
      

        <Herosection />

        <AboutUs />

        <Technologies />

        <Service />

        <Testimonials/>

        <WhyUs />

        <FAQS />

        <Bottom />

        
      </div>
    </Fragment>
  );
}

export default Home;
