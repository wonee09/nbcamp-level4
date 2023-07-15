import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleWriteButtonClick = () => {
    navigate("/write");
  };

  const handleLogoutButtonClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <StyledHeader>
      <StyledLogo
        src="https://spartacodingclub.kr/_next/image?url=%2Fv5%2Ficons%2Flogo-active.png&w=1080&q=100"
        alt="Logo"
        onClick={handleLogoClick}
      />
      <div>
        <StyledWriteButton onClick={handleWriteButtonClick}>
          일기쓰기
        </StyledWriteButton>
        <StyledLogoutButton onClick={handleLogoutButtonClick}>
          로그아웃
        </StyledLogoutButton>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #3d5a80;
`;

const StyledLogo = styled.img`
  cursor: pointer;
  width: 100px;
`;

const StyledWriteButton = styled.button`
  padding: 10px 20px;
  background-color: #98c1d9;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #81a4c2;
  }
`;

const StyledLogoutButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #81a4c2;
  }
`;
