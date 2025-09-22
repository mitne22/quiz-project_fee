import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Forbidden from "./pages/Forbidden";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About"
import Contact from "./pages/Contact"
import QuestionManagement from './pages/QuestionManagement';
import QuizManagement from './pages/QuizManagement';
import RoleManagement from './pages/RoleManagement';
import UserManagement from './pages/UserManagement';
import Quizzes from './pages/Quizzes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/403" element={<Forbidden />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/questionManagement" element={<QuestionManagement />} />
        <Route path="/quizManagement" element={<QuizManagement />} />
        <Route path="/roleManagement" element={<RoleManagement />} />
        <Route path="/userManagement" element={<UserManagement />} />
        <Route path="/quizzes" element={<Quizzes />} />

        {/* fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
