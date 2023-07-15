import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleJoinLinkClick = () => {
    navigate("/join");
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
    const response = await axios.post("http://3.38.191.164/login", {
      id: email,
      password,
    });

    const token = response.data.token;

    // 토큰 값을 localStorage에 저장
    localStorage.setItem("token", token);

    navigate("/");
  };

  return (
    <StyledLoginContainer>
      <StyledLoginBox>
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
          <StyledButton type="submit" variant="primary">
            로그인
          </StyledButton>
        </StyledForm>
        <StyledSpacer />
        <StyledButton onClick={handleJoinLinkClick} variant="secondary">
          회원가입
        </StyledButton>
      </StyledLoginBox>
    </StyledLoginContainer>
  );
};

export default Login;

const StyledLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 40px;
  border-radius: 15px;
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
  /* background-color: #007bff; */
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: #007bff;

      &:hover {
        background-color: #0056b3;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: #6c757d;

      &:hover {
        background-color: #495057;
      }
    `}

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledSpacer = styled.div`
  height: 5px;
`;
