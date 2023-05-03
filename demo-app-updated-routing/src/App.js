import { useState, React, useEffect } from "react";

import NavBar from "./components/navBar";
import { Route, Routes, Navigate } from "react-router-dom";

import NotFound from "./components/notFound";
import { BrowserRouter } from "react-router-dom";

import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import auth from "./services/authService";
import Logout from "./components/logout";
import AccountSelect from "./components/accountSelect";
import CourseHome from "./components/courseHome";
import AssignmentList from "./components/assignmentList";
import FileUploadForm from "./components/assignment";
import AssignmentListProfessor from "./components/assignmentListProfessor";
import AssignmentForm from "./components/createAssignment";
import CourseHomeProfessor from "./components/courseHomeProfessor";
import Sidebar from "./components/sideBar";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = auth.getCurrentUser();
    console.log(user);
    setUser(user);
  }, []);

  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />       
          <Route path="/logout" element={<Logout />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<AccountSelect />} />
          <Route path="/student/courseHome" element={<CourseHome />} />
          <Route path="/student/assignmentList" element={<AssignmentList />} />
          <Route path="/student/assignment" element={<FileUploadForm />} />

          <Route path="/professor/courseHome" element={<CourseHomeProfessor />} />
          <Route path="/professor/assignmentList" element={<AssignmentListProfessor />} />
          <Route path="/professor/createAssignment" element={<AssignmentForm />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
