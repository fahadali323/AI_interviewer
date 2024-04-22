import { BrowserRouter as Router, Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import GenerateQuestions from "./pages/generateQuestionsPage";
import PrivateRoute from "./components/privateRoute";
import Login from "./pages/loginPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute/>} />
          <Route path='/loginPage' element={<Login/>}/>
          <Route path='/generateQuestions' element={<GenerateQuestions/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
