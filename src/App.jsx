import { Navbar, Hero, Skills, Projects, Form, Footer } from "./components";

// import context
import { useDarkTheme } from "./context/theme.Context";

// styles
import "./App.css";
import { useState } from "react";

const App = () => {
  // use our theme context here!
  const { toggleDarkTheme, theme } = useDarkTheme();

  const [activeSection, setActiveSection] = useState('home'); // Default to 'home'

  function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    setActiveSection(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className="fixed top-28 -right-4 bg-primary rounded-3xl w-[70px] hover:shadow-md z-10">
        <button
          className="text-[1.5rem] bg-primary text-white p-6 rounded-[50%] w-9 h-9 flex items-center justify-center"
          onClick={toggleDarkTheme}
        >
          {!theme ? (
            <i className="fa-regular fa-moon"></i>
          ) : (
            <i class="fa-solid fa-sun"></i>
          )}
        </button>
      </div>
      <Navbar activeSection={activeSection} smoothScrollTo={smoothScrollTo}/>
      <Hero activeSection={activeSection} smoothScrollTo={smoothScrollTo}/>
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </>
  );
};

export default App;
