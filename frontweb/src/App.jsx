import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Education />
        <Skills />
      </main>
    </>
  );
}

export default App;