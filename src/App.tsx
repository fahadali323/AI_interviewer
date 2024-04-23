import { Routes, BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import GenerateQuestionsPage from "./pages/GenerateQuestionsPage";
import DiscussionsPage from "./pages/DiscussionsPage";
import PricingPage from "./pages/PricingPage";
import InterviewPage from "./pages/InterviewPage";
import PracticePage from "./pages/PracticePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute/>} />
          <Route path='/loginPage' element={<LoginPage/>}/>
          <Route path='/generateQuestionsPage' element={<GenerateQuestionsPage/>}/>
          <Route path='/discussionPage' element={<DiscussionsPage/>}/>
          <Route path='/pricingPage' element={<PricingPage/>}/>
          <Route path='/interviewPage' element={<InterviewPage/>}/>
          <Route path='/practicePage' element={<PracticePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
