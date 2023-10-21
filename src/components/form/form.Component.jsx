const Form = () => {
  return (
    <div className="form py-16 bg-white flex flex-col justify-center items-center">
      <div className="heading py-8">
        <p className="text-[2.5rem] font-bold text-headingColor">
          Get In Touch
        </p>
      </div>
      <div className="form-container">
        <div className="grid grid-cols-2 gap-8">
          <div className="form-control flex flex-col gap-1">
            <label className="text-[1rem] font-medium">First Name</label>
            <input
              type="text"
              className="p-2 border border-primary rounded-md w-60"
            />
          </div>
          <div className="form-control flex flex-col gap-1">
            <label className="text-[1rem] font-medium">Last Name</label>
            <input
              type="text"
              className="p-2 border border-primary rounded-md w-60"
            />
          </div>
          <div className="form-control flex flex-col gap-1">
            <label className="text-[1rem] font-medium">Email</label>
            <input
              type="text"
              className="p-2 border border-primary rounded-md w-60"
            />
          </div>
          <div className="form-control flex flex-col gap-1">
            <label className="text-[1rem] font-medium">Phone Number</label>
            <input
              type="number"
              className="p-2 border border-primary rounded-md w-60"
            />
          </div>
        </div>
        <div className="mt-[2rem] flex flex-col gap-2">
          <div className="form-control flex flex-col gap-1">
            <label className="text-[1rem] font-medium">Message</label>
            <textarea
              type="text"
              className="p-2 border border-primary rounded-md w-full h-60"
            />
          </div>
          <div className="form-control flex items-center gap-1">
            <input type="checkbox" />
            <label className="text-[1rem] font-medium">
              I accept the terms & condition
            </label>
          </div>
          <button className="py-3 px-4 font-semibold border border-primary rounded-md bg-primary text-white hover:bg-white hover:text-primary transition duration-250 ease-out hover:ease-in">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
