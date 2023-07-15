import React from "react";
import { Outlet } from "react-router-dom";

const NonAuthLayout = ({ children }) => {
  return (
    <div>
      <h1>인증필요없는 페이지들</h1>
      <Outlet />
    </div>
  );
};

export default NonAuthLayout;
