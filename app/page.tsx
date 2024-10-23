import About from "./About";
import First from "./First";
import "./globals.css";
import Navbar from "./Navbar";
import ProjectPage from "./ProjectPage";
import Contact from "./Contact";
import Chatbot from "./ChatBot";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
  <First/>
  <About/>
  <ProjectPage/>
  <Contact/>
  <Chatbot/>
    </div>
  );
};

export default Home;