import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPageComponents/LoginPage/LoginPage";
import SignUp from "./Components/SignUpPageComponent/SignupPage/signup";
import HrPage from "./Components/hrPageComponents/hrPageComponents";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/jobs" element={<HrPage />} />
      </Routes>
    </Router>
  );
}

export default App;
