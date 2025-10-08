import LandingPage from "./components/LandingPage";
import CommunityPage from "./components/CommunityPage";
import Header from "./components/Header";
import ProjectShowCase from "./components/ProjectShowcase";
import Hackathon from "./components/Hackathon";

const App = () => {
  return (
    <div className="w-full h-screen">
      <LandingPage />
      <Header />
      <CommunityPage />
      <ProjectShowCase />
      <Hackathon />
    </div>
  );
};

export default App;
