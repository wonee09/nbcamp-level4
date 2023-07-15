import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const checkToken = async () => {
      try {
        await axios.get("http://3.38.191.164/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        alert("토큰 정보가 유효하지 않습니다. 로그인 화면으로 이동합니다.");
        console.log("err", err);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    if (!token) {
      alert("토큰이 없습니다. 로그인해주세요.");
      navigate("/login");
    } else {
      checkToken();
    }
  }, [navigate]);

  return (
    <div>
      <h1>인증이 필요한 페이지들</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
