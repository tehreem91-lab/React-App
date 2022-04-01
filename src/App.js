import React from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import FindTutor from "./pages/FindTutorPage";
import CoursePage from "./pages/coursespage";
import Contact from "./pages/contactPage";
import RegPage from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import PrivateRoute from "../src/Routes/PrivateRoute";
//import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/profilePage";
import "./App.css";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import EditProfilePage from "./pages/EditProfilePage";
function App() {
  return (
    <>
      <ToastContainer autoClose={1500} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/findTutor" element={<FindTutor />} />
        <Route path="/ourcourse" element={<CoursePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegPage />} />

        <Route path="/detail/download/:id/:name" element={<DetailPage />} />
        {/* Routes which are only shown on login  */}
        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/chat" element={<ChatPage />} /> */}
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="edit-profile/:id" element={<EditProfilePage />} />
        </Route>
        {/* Routes that will be protected */}
        <Route element={<PrivateRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
