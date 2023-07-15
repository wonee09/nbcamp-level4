import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Main from "../pages/Main";
import Write from "../pages/Write";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Join from "../pages/Join";
import NonAuthLayout from "./NonAuthLayout";
import AuthLayout from "./AuthLayout";

const Router = () => {
  const token = localStorage.getItem("token");
  console.log("token", token);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<NonAuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
          </Route>
          <Route
            element={
              <>
                <Header />
                <AuthLayout />
                <Footer />
              </>
            }
          >
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/write" element={<Write />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
