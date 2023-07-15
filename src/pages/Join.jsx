import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Join = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginLinkClick = () => {
    navigate("/login");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // validateion check
    if (!email || !password) {
      alert("이메일 또는 비밀번호가 입력되지 않았습니다. 확인해주세요.");
      return false;
    }

    // axios call
    await axios.post("http://3.38.191.164/register", {
      id: email,
      password,
    });
  };

  return (
    <StyledSignUpContainer>
      <StyledSignUpBox>
        <StyledForm onSubmit={handleFormSubmit}>
          <StyledInput
            type="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={handleEmailChange}
          />
          <StyledInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={handlePasswordChange}
          />
          <StyledButton type="submit">가입하기</StyledButton>
        </StyledForm>
        <StyledLoginLink onClick={handleLoginLinkClick}>로그인</StyledLoginLink>
      </StyledSignUpBox>
    </StyledSignUpContainer>
  );
};

export default Join;

const StyledSignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledSignUpBox = styled.div`
  background-color: #f7f7f7;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLoginLink = styled.a`
  cursor: pointer;
  color: #007bff;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
`;
