import About from "./About";
import First from "./First";
import "./globals.css";
import ProjectPage from "./ProjectPage";
import Contact from "./Contact";
import Chatbot from "./ChatBot";
import Skill from "./Skills";

const Home: React.FC = () => {
  return (
    <div>
   
  <First/>
  <About/>
  <Skill/>
  <ProjectPage/>
  <Contact/>
  <Chatbot/>
  
    </div>
  );
};

export default Home;