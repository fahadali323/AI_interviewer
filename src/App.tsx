import supabase from "./lib/supabase";
import { BrowserRouter as Router, Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/loginPage";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import GenerateQuestions from "./pages/generateQuestionsPage";


function App() {
  const [session, setSession] = useState({});

  useEffect(() => {
      async function getCurrentSession() {
          await supabase.auth.getSession().then((value) => {
              // value.data.user
              if (value.data?.session) {
                  setSession(value.data.session);
              }
          });
      }
      getCurrentSession();
      supabase.auth.onAuthStateChange((event, session) => {
          setSession(session!);
      })
  }, [])

  if (!session) {
    return <Login />
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GenerateQuestions/>}>
            <Route path="/" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
