import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage";
import Success from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
