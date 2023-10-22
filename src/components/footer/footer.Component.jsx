const Footer = () => {
  return (
    <div className="footer h-[50vh] bg-bgShade py-24 px-16">
      <div className="flex justify-between items-center border-b border-b-gray-500 pb-[3rem]">
        <div className="text-[2.5rem] text-blue-500">
          <i className="fa-solid fa-code"></i>
          <i className="fa-brands fa-dev"></i>
        </div>
        <div className="menu">
          <ul className="flex gap-7 text-[1.2rem]">
            <li className="cursor-pointer hover:text-primary border-b border-b-bgShade hover:border-b-primary">Home</li>
            <li className="cursor-pointer hover:text-primary border-b border-b-bgShade hover:border-b-primary">Skills</li>
            <li className="cursor-pointer hover:text-primary border-b border-b-bgShade hover:border-b-primary">Portfolio</li>
            <li className="cursor-pointer hover:text-primary border-b border-b-bgShade hover:border-b-primary">Contact</li>
          </ul>
        </div>
        <div className="social-links">
          <ul className="flex gap-7 text-[1.5rem]">
            <li className="cursor-pointer hover:text-primary">
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li className="cursor-pointer hover:text-primary">
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li className="cursor-pointer hover:text-primary">
              <i className="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end pt-10">
        <ul className="flex gap-7 text-[0.9rem]">
          <li className="cursor-pointer hover:text-primary">Privacy Policy</li>
          <li className="cursor-pointer hover:text-primary">
            Terms of Service
          </li>
          <li className="cursor-pointer hover:text-primary">
            Cookies Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
