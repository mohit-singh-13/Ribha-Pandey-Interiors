import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navTimeLine = gsap.timeline();

  useGSAP(() => {
    navTimeLine.to(".nav-bar-1 .nav-slider", {
      right: 0,
      duration: 0.5,
    });

    navTimeLine.from(".nav-slider > ul > li", {
      x: 200,
      opacity: 0,
      stagger: 0.2,
    });

    navTimeLine.from(".nav-slider > div i", {
      opacity: 0,
      duration: 0.3,
    });

    navTimeLine.pause();
  });

  const playHandler = () => {
    navTimeLine.play();
  };

  const reverseHandler = () => {
    navTimeLine.reverse();
  };

  return (
    <>
      <div className="nav-bar-2 hidden absolute h-ful w-full z-[100]">
        <div className="w-[37.5rem] bg-[#6C676712 border-2 bg-[#F0F0F0] border-white rounded-[4.81rem] mx-auto mt-[2.5rem] shadow-navbar-shadow py-3 px-10">
          <ul className="flex justify-between font-bold">
            <li className="cursor-pointer hover:scale-105 transition-all">
              <a
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>
            </li>
            <li className="cursor-pointer hover:scale-105 transition-all">
              <a
                onClick={() => {
                  navigate("/");
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="cursor-pointer hover:scale-105 transition-all">
              <a
                onClick={() => {
                  navigate("/");
                }}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="cursor-pointer hover:scale-105 transition-all">
              <a
                onClick={() => {
                  navigate("/");
                }}
                href="#contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full relative nav-bar-1 z-[100]">
        <div
          className="absolute right-5 top-5 text-[1.8rem]"
          onClick={playHandler}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        <div
          className={`h-[100vh] absolute w-full right-[-110%] z-50 backdrop-blur-[25px] nav-slider`}
        >
          <div
            className="absolute right-5 top-5 text-[1.8rem] "
            onClick={reverseHandler}
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </div>

          <ul className="text-[2.7rem] mt-[20%] space-y-8 px-7 backdrop-blur-[25px] w-max mx-auto">
            <li>
              <a
                onClick={() => {
                  navigate("/");
                  reverseHandler();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  navigate("/");
                  reverseHandler();
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  navigate("/");
                  reverseHandler();
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  navigate("/");
                  reverseHandler();
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
