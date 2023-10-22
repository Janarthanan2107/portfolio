import { Navbar, Hero, Skills, Projects, Form, Footer } from "./components";

// import context
import { useDarkTheme } from "./context/theme.Context";

// styles
import "./App.css";

const App = () => {
  // use our theme context here!
  const { toggleDarkTheme } = useDarkTheme();

  return (
    <>
      <div className="fixed top-28 -right-4 bg-primary rounded-3xl w-[70px] hover:shadow-md">
        <button
          className="text-[2rem] bg-primary text-white p-6 rounded-[50%] w-9 h-9 flex items-center justify-center"
          onClick={toggleDarkTheme}
        >
          <i className="fa-regular fa-moon"></i>
        </button>
      </div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </>
  );
};

export default App;
