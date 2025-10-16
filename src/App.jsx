import LandingPage from "./components/LandingPage";
import CommunityPage from "./components/CommunityPage";
import Header from "./components/Header";
import ProjectShowCase from "./components/ProjectShowcase";
import Hackathon from "./components/Hackathon";
import MentorshipReferral from "./components/MentorshipReferral";
import HorizontalScrolling from "./components/HorizontalScrolling";
import PreFooter from "./components/PreFooter";

const App = () => {
  return (
    <div>
      <LandingPage />
      <Header />
      <CommunityPage />
      <ProjectShowCase />
      <Hackathon />
      <MentorshipReferral />
      <HorizontalScrolling />
      <PreFooter />
    </div>
  );
};

export default App;
