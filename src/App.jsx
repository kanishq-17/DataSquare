import LandingPage from "./components/LandingPage";
import CommunityPage from "./components/CommunityPage";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full h-screen">
      <LandingPage />
      <Header />
      <CommunityPage />
    </div>
  );
};

export default App;
