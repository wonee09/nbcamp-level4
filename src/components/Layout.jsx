import React from "react";
import { styled } from "styled-components";

const Layout = ({ children }) => {
  return <StyledAppContainer>{children}</StyledAppContainer>;
};

export default Layout;

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  font-family: Arial, sans-serif;
`;
