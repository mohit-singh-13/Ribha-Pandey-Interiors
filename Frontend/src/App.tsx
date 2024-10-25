import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HeroSection from "./pages/HeroSection";
import Projects from "./pages/Projects";

export const RenderedApp = () => {
  return (
    <div className="h-[100vh] w-full">
      {/* Hero Section */}
      <div className="bg-building-image bg-cover bg-no-repeat h-full w-full bg-left-bottom relative xs:bg-[10%_70%] sm:bg-[13%_65%] xl:bg-left xl:h-[110% xxl:h-[130% 3xl:h-[160%] 2xxl:bg-[10%_0%] 3xl:bg-[length:120%_100%]">
        <div className="absolute top-[5.5rem] z-20 xxl:ml-8" id="home">
          <HeroSection />
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-h-max w-full bg-about-gradient" id="about">
        <AboutUs />
      </div>

      {/* Projects Section */}
      <div className="max-h-ma w-full bg-project-gradient" id="projects">
        <Projects />
      </div>

      {/* Contact Us Section */}
      <div className="w-full bg-project-gradient py-[8rem] 2xxl:pt-[12rem]">
        <ContactUs />
      </div>

      {/* Footer Section */}
      <div className="w-full py-[3rem]">
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div className="relative w-full">
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
};

export default App;
