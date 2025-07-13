import React, { useEffect } from 'react'
import About from './components/about'
import Certificate from './components/certificate'
import Services from './components/services'
import GoogleMapEmbed from './components/map'
import { SelectedPage } from './shared/types'
import Home from './components/home'
import Contact from './components/contact'
import { useLocation } from "react-router-dom";
import { content } from "@/content/content";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function HomePage({ setSelectedPage }: Props) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    document.title = "Artu Çevre";
    if (location.state?.selectedPage &&  !isHomePage) {
      setSelectedPage(location.state.selectedPage);
      setTimeout(() => {
        const section = document.getElementById(location.state.selectedPage);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.state, setSelectedPage]);

  return (
    <div>
      <Home id = 'anasayfa' 
      image='/src/assets/photos/forest.jpg' 
      title = {content.homePageTitle} setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Certificate />
      <Services setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <GoogleMapEmbed />
    </div>
  );
}

export default HomePage;

