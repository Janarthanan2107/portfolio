const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full shadow-md">
      <div className="flex justify-between items-center m-5">
        <div className="logo font-poppins text-[1.5rem] tracking-wide font-bold text-gray-600">
          Janarthanan.
        </div>
        <div className="menu">
          <ul className="flex gap-7">
            <li className="cursor-pointer hover:text-primary">Home</li>
            <li className="cursor-pointer hover:text-primary">Skills</li>
            <li className="cursor-pointer hover:text-primary">Portfolio</li>
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
