import About from "./About";
import First from "./First";
import "./globals.css";
import Navbar from "./Navbar";
import ProjectPage from "./ProjectPage";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
  <First/>
  <About/>
  <ProjectPage/>
    </div>
  );
};

export default Home;