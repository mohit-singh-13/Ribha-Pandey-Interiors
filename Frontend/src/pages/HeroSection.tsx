const HeroSection = () => {
  return (
    <div className="h-full w-full px-[1.7rem] space-y-12 2xxl:space-y-16">
      <h1 className="font-[Michroma] text-[3.4rem] leading-[4.5rem] xl:mt-[8rem] xl:text-[4rem] 2xxl:text-[4.8rem] 2xxl:mt-[5rem] 2xxl:leading-[5rem]">
        Ribha Pandey <br /> Interiors
      </h1>

      <p className="hidden xl:block xl:text-[1.3rem] 2xxl:text-[1.8rem]">
        Building Foundations, Crafting Dreams <br />
        Your Vision, Our Expertise.
      </p>

      <button className="px-[1.68rem] py-[1.43rem] bg-[#000000e3] rounded-[55px] text-white text-[1.25rem] hover:scale-105 transition">
        <a href="#projects">Explore Projects</a>
      </button>
    </div>
  );
};

export default HeroSection;