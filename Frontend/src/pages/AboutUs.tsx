const AboutUs = () => {
  return (
    <div className="max-h-max w-full text-white relative py-[5rem] overflow-hidden">
      <div className="relative">
        <h2 className="text-center text-[3rem] py-[2.5rem]">About Us</h2>
        <h3 className="text-[5rem] opacity-10 absolute top-[30%] left-[51%] font-semibold hidden 2xxl:block">
          About Us
        </h3>
      </div>

      <div className="2xxl:block hidden">
        <img src="/Ellipse1.png" alt="ellipse1" className="absolute top-5 right-0" />
        <img src="/Ellipse2.png" alt="ellipse2" className="absolute top-0 right-0 " />
        <img src="/Ellipse3.png" alt="ellipse3" className="absolute top-[-5rem] right-0" />
        <img src="/Ellipse4.png" alt="ellipse4" className="absolute bottom-0 left-0" />
        <img src="/Ellipse5.png" alt="ellipse5" className="absolute bottom-5 left-0" />
        <img src="/Ellipse6.png" alt="ellipse6" className="absolute bottom-[-1rem] left-0" />
      </div>

      <div className="relative 2xxl:flex 2xxl:px-[4.5rem] 2xxl:justify-between">
        <div className="px-5 py-2 relative z-10 text-justify 2xxl:w-[60%] 2xxl:text-[1.5rem] 2xxl:leading-[1.8rem]">
          <p>
            At Ribha Pandey Interiors, we believe that every project begins
            with a vision and ends with a masterpiece. With years of experience
            and a dedicated team of experts, we bring your ideas to life through
            quality craftsmanship, innovative designs, and sustainable
            practices. From residential homes to commercial spaces, we ensure
            every detail is built to last. Our commitment to excellence, safety,
            and customer satisfaction sets us apart in the industry. Whether
            it's a small renovation or a large-scale construction, we are here
            to transform your dreams into reality—one brick at a time.
          </p>

          <br />

          <p>
            We approach every project with a commitment to precision and
            excellence, ensuring that the smallest details receive the same
            attention as the grandest features. Our team of architects,
            engineers, and skilled tradespeople work collaboratively to deliver
            projects on time and within budget, without ever compromising on
            quality. We understand that every project is an investment, and we
            strive to provide value that lasts for generations.
          </p>

          <br />

          <p>
            What sets us apart is our dedication to sustainability and
            forward-thinking construction techniques. We incorporate
            cutting-edge materials, energy-efficient designs, and eco-friendly
            practices to create structures that are not only beautiful but also
            responsible. Our process is transparent and client-focused, offering
            clear communication at every stage to ensure your vision is fully
            realized.
          </p>
        </div>

        <div className="absolute left-[50%] ml-[-216px] flex justify-center top-[50%] mt-[-246.5px] 2xxl:static 2xxl:w-[35%] 2xxl:left-0 2xxl:ml-0 2xxl:mt-0">
          <img
            src="/peopleVector.png"
            alt="illustration"
            className="blur-[15px] xl:w-[75%] xxl:mt-[2rem] 2xxl:blur-none self-center 2xxl:w-full aspect-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

//  top-[50%] mt-[-455px] left-[50%] ml-[-205px]  background: #FFFFFF;
