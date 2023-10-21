const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full shadow-md bg-white z-10">
      <div className="flex justify-between items-center m-5">
        <div className="logo font-poppins text-[1.5rem] tracking-wide font-bold text-gray-600">
        <i class="fa-solid fa-code text-blue-500"></i> Janarthanan.
        </div>
        <div className="menu">
          <ul className="flex gap-7 text-[1.1150rem]">
            <li className="cursor-pointer hover:text-primary hover:border-b hover:border-b-primary">Home</li>
            <li className="cursor-pointer hover:text-primary hover:border-b hover:border-b-primary">Skills</li>
            <li className="cursor-pointer hover:text-primary hover:border-b hover:border-b-primary">Portfolio</li>
          </ul>
        </div>
        <div className="contact">
          <button className="py-3 px-3 font-semibold border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition duration-250 ease-out hover:ease-in">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
