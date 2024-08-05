// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

// Home layout
import Demo from "./page-demo/Demo";
import MainDemo from "./home/MainDemo";
import Startup from "./home/Startup";
import Paralax from "./home/Paralax";
import HomePortfolio from "./home/HomePortfolio";
import DigitalAgency from "./home/DigitalAgency";
import CreativeAgency from "./home/CreativeAgency";
import PersonalPortfolio from "./home/PersonalPortfolio";
import Business from "./home/Business";
import StudioAgency from "./home/StudioAgency";
import PortfolioLanding from "./home/PortfolioLanding";
import CreativeLanding from "./home/CreativeLanding";
import HomeParticles from "./home/HomeParticles";
import CreativePortfolio from "./home/CreativePortfolio";
import DesignerPortfolio from "./home/DesignerPortfolio";
import InteriorLanding from "./home/Interior";
import CorporateBusiness from "./home/CorporateBusiness";
import InteractiveAgency from "./home/InteractiveAgency";

// Dark Home Layout
import DarkMainDemo from "./dark/MainDemo";
import DarkPortfolioLanding from "./dark/PortfolioLanding";

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";

// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Routes>
            <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Demo />} />
            <Route exact path={`${process.env.PUBLIC_URL}/main-demo`} element={<MainDemo />} />
            <Route exact path={`${process.env.PUBLIC_URL}/dark-main-demo`} element={<DarkMainDemo />} />
            <Route exact path={`${process.env.PUBLIC_URL}/startup`} element={<Startup />} />
            <Route exact path={`${process.env.PUBLIC_URL}/paralax`} element={<Paralax />} />
            <Route exact path={`${process.env.PUBLIC_URL}/digital-agency`} element={<DigitalAgency />} />
            <Route exact path={`${process.env.PUBLIC_URL}/creative-agency`} element={<CreativeAgency />} />
            <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} element={<PersonalPortfolio />} />
            <Route exact path={`${process.env.PUBLIC_URL}/studio-agency`} element={<StudioAgency />} />
            <Route exact path={`${process.env.PUBLIC_URL}/business`} element={<Business />} />
            <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} element={<HomePortfolio />} />
            <Route exact path={`${process.env.PUBLIC_URL}/portfolio-landing`} element={<PortfolioLanding />} />
            <Route exact path={`${process.env.PUBLIC_URL}/creative-landing`} element={<CreativeLanding />} />
            <Route exact path={`${process.env.PUBLIC_URL}/home-particles`} element={<HomeParticles />} />
            <Route exact path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`} element={<DarkPortfolioLanding />} />
            <Route exact path={`${process.env.PUBLIC_URL}/designer-portfolio`} element={<DesignerPortfolio />} />
            <Route exact path={`${process.env.PUBLIC_URL}/creative-portfolio`} element={<CreativePortfolio />} />
            <Route exact path={`${process.env.PUBLIC_URL}/interior-landing`} element={<InteriorLanding />} />
            <Route exact path={`${process.env.PUBLIC_URL}/corporate-business`} element={<CorporateBusiness />} />
            <Route exact path={`${process.env.PUBLIC_URL}/interactive-agency`} element={<InteractiveAgency />} />
            <Route exact path={`${process.env.PUBLIC_URL}/service`} element={<Service />} />
            <Route exact path={`${process.env.PUBLIC_URL}/service-details`} element={<ServiceDetails />} />
            <Route exact path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
            <Route exact path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
            <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} element={<PortfolioDetails />} />
            <Route exact path={`${process.env.PUBLIC_URL}/blog`} element={<Blog />} />
            <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} element={<BlogDetails />} />
            <Route exact path={`${process.env.PUBLIC_URL}/team`} element={<Team />} />
            <Route exact path={`${process.env.PUBLIC_URL}/counters`} element={<Counters />} />
            <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} element={<Testimonial />} />
            <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} element={<Portfolio />} />
            <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} element={<VideoPopup />} />
            <Route exact path={`${process.env.PUBLIC_URL}/gallery`} element={<Gallery />} />
            <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} element={<Brand />} />
            <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} element={<ProgressBar />} />
            <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} element={<ContactForm />} />
            <Route exact path={`${process.env.PUBLIC_URL}/google-map`} element={<GoogleMap />} />
            <Route exact path={`${process.env.PUBLIC_URL}/columns`} element={<Columns />} />
            <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} element={<PricingTable />} />
            <Route path={`${process.env.PUBLIC_URL}/404`} element={<error404 />} />
            <Route path="*" element={<error404 />} />
          </Routes>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
serviceWorker.register();
