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
import { Link, useLocation } from "react-router-dom";

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
      <Link to="/pafe" className="text-[30px] text-center">Error 404</Link>

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
