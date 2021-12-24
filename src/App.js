import Navigation from "./common/Navigation";
import Picker from "./common/Picker";
import Progressbar from "./common/Progressbar";
import HomePage from "./pages/HomePage/HomePage";
import LearnPage from "./pages/LearnPage/LearnPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import StagePage from "./pages/StagePage/StagePage";
import TestCreationPage from "./pages/TestCreationPage/TestCreationPage";
import TestPage from "./pages/TestPage/TestPage";
import TopicsPage from "./pages/TopicsPage/TopicsPage";


function App() {
  return (
    <div className="app">
      <TopicsPage/>
      <Navigation/>
    </div>
  );
}

export default App;
