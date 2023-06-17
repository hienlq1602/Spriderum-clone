import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import ScrollToTopButton from '../../common/component/scrollToTopButton/scrollToTopButton';
import Header from '../../common/component/header/header';
import Banner from "./components/banner/banner";
import Footer from "../../common/component/footer/footer";
import NewPosts from "./components/newPosts/newPosts";
import TopVideos from "./components/topVideos/topVideos";
import Main from "./components/main/main";

const Home = () => {
  return <div className="home">
    <Header />
    <Banner />
    <NewPosts />
    <TopVideos />
    <Main />
    <Footer />
    <ScrollToTopButton />
  </div>;
};

export default Home;
