const Hero = () => {
  return (
    <div className="hero">
      <div className="h-screen p-20 bg-bgShade grid grid-cols-2 justify-center items-center gap-10">
        <div className="hero-content font-semibold flex flex-col">
          <p className="text-[1.2rem]">Hey, I'm Janarthanan</p>
          <p className="text-[4rem] font-bold">Full Stack Developer</p>
          <p className="text-[1.2rem] text-gray-500">
            Passionate about creating seamless, responsive web applications and
            dynamic websites to showcase a diverse portfolio of digital
            projects.
          </p>
          <div className="contact-container mt-5">
            <button className="py-3 px-4 font-semibold border border-primary rounded-md bg-primary text-white hover:bg-white hover:text-primary transition duration-250 ease-out hover:ease-in">
              Get in touch
            </button>
          </div>
        </div>
        <div className="hero-img flex justify-center">
          <img
            src="/assets/dev-pic/dp.jpg"
            alt="dev-pic"
            className="rounded-[50%] shadow-lg shadow-indigo-500/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
