import { Routes, BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import LoginPage from "./pages/LoginPage";
import GenerateQuestionsPage from "./pages/GenerateQuestionsPage";
import DiscussionsPage from "./pages/DiscussionsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute/>} />
          <Route path='/loginPage' element={<LoginPage/>}/>
          <Route path='/generateQuestions' element={<GenerateQuestionsPage/>}/>
          <Route path='/discussion' element={<DiscussionsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
