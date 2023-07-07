import React from "react";
import { styled } from "styled-components";

const Layout = ({ children }) => {
  return <StyledAppContainer>{children}</StyledAppContainer>;
};

export default Layout;

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
`;
