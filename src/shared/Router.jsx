import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Test from "../pages/Test";
import Results from "../pages/Results";
import Profile from "../pages/Profile";
import Header from "../components/Header";
import useAuthStore from "../zustand/authStore";

const PrivateRoute = () => {
  const { isLogin } = useAuthStore((state) => state);
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/test" element={<Test />} />
          <Route path="/results" element={<Results />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
