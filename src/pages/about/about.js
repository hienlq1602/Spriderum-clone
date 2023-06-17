import React from "react";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Statistic from "./components/statistic/statistic";
import BookStore from "./components/bookstore/bookstore";
import Partners from "./components/partners/partners";
import People from "./components/people/people";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const About = () => {
  return (
    <div className="about">
      <Header />
      <Intro />
      <Statistic />
      <BookStore />
      <Partners />
      <People />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
