import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Test from "../pages/Test";
import Results from "../pages/Results";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<Test />} />
      <Route path="/results" element={<Results />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Router;
