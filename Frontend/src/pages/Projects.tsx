import Slider from "react-slick";
import { carouselProjects } from "../utils/data";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  return (
    <div className="h-full w-full relative text-white flex flex-col gap-2">
      <h2 className="text-center text-[3rem] py-[2.5rem]">Projects</h2>

      <div className="w-[92%] mx-auto slider-container relative">
        <Slider {...settings}>
          {carouselProjects.map((element, index) => (
            <Card url={element.url} name={element.name} key={index} />
          ))}
        </Slider>
      </div>

      <div className="rounded-[30.3rem] bg-[#0000004D] px-4 py-5 mx-auto mt-[2rem] cursor-pointer" onClick={() => navigate("/projects")}>
        Explore More
      </div>
    </div>
  );
};

export default Projects;
