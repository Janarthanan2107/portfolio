// import context
import { useDarkTheme } from "../../context/theme.Context";

const Form = () => {
  // use our theme context here!
  const { theme } = useDarkTheme();
  return (
    <div
      className={`form py-[4rem] bg-white flex flex-col justify-center items-center ${
        theme ? "bg-zinc-900" : "bg-bgShade"
      } transition duration-500 ease-out hover:ease-in`}
      id="form"
    >
      <div className="heading py-8">
        <p
          className={`text-[2.5rem] font-bold ${
            theme ? "text-white" : "text-headingColor"
          } `}
        >
          Get In Touch
        </p>
      </div>
      <div className="form-container">
        <div className="flex justify-content-between gap-[100px]">
          <div className="form-control flex flex-col gap-1">
            <label
              className={`text-[1rem] font-medium ${
                theme ? "text-white" : "text-black"
              } `}
            >
              Email:
            </label>
            <span>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                className="text-violet-500"
              >
                janarthanan.v2107@gmail.com
              </a>
            </span>
          </div>
          <div className="form-control flex flex-col gap-1">
            <label
              className={`text-[1rem] font-medium ${
                theme ? "text-white" : "text-black"
              } `}
            >
              Mobile:
            </label>
            <span className="text-violet-500">+91 81108-64319</span>
          </div>
          {/* <div className="form-control flex flex-col gap-1">
            <label
              className={`text-[1rem] font-medium ${
                theme ? "text-white" : "text-black"
              } `}
            >
              Email
            </label>
            <input
              type="text"
              className="p-2 border border-primary rounded-md w-60"
            />
          </div>
          <div className="form-control flex flex-col gap-1">
            <label
              className={`text-[1rem] font-medium ${
                theme ? "text-white" : "text-black"
              } `}
            >
              Phone Number
            </label>
            <input
              type="number"
              className="p-2 border border-primary rounded-md w-60"
            />
          </div> */}
        </div>
        {/* <div className="mt-[2rem] flex flex-col gap-2">
          <div className="form-control flex flex-col gap-1">
            <label
              className={`text-[1rem] font-medium ${
                theme ? "text-white" : "text-black"
              } `}
            >
              Message
            </label>
            <textarea
              type="text"
              className="p-2 border border-primary rounded-md w-full h-60"
            />
          </div>
          <div className="form-control flex items-center gap-1">
            <input type="checkbox" />
            <label
              className={`text-[1rem] font-medium ${
                theme ? "text-white" : "text-black"
              } `}
            >
              I accept the terms & condition
            </label>
          </div>
          <button className="py-3 px-4 font-semibold border border-primary rounded-md bg-primary text-white hover:bg-white hover:text-primary transition duration-250 ease-out hover:ease-in">
            Submit
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Form;
