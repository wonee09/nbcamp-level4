import React from "react";
import styled from "styled-components";
const StyledMain = styled.main`
  flex: 1;
  padding: 20px;
`;

const StyledTitle = styled.h2`
  margin-top: 0;
  font-size: 24px;
  color: #293241;
`;

const StyledDate = styled.p`
  color: #888;
  font-size: 14px;
  margin-top: 5px;
`;

const StyledMoodLabel = styled.label`
  display: block;
  margin-top: 20px;
  font-size: 16px;
  color: #293241;
`;

const StyledMoodSelect = styled.select`
  padding: 10px;
  font-size: 16px;
`;

const StyledContentLabel = styled.label`
  display: block;
  margin-top: 20px;
  font-size: 16px;
  color: #293241;
`;

const StyledContentTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 16px;
`;

const StyledPasswordLabel = styled.label`
  display: block;
  margin-top: 20px;
  font-size: 16px;
  color: #293241;
`;

const StyledPasswordInput = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Write = () => {
  return (
    <StyledMain>
      <StyledTitle>Write Diary</StyledTitle>
      <StyledDate>July 7, 2023</StyledDate>

      <StyledMoodLabel htmlFor="moodSelect">Mood:</StyledMoodLabel>
      <StyledMoodSelect id="moodSelect">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </StyledMoodSelect>

      <StyledContentLabel htmlFor="contentTextarea">
        Content:
      </StyledContentLabel>
      <StyledContentTextarea id="contentTextarea" />

      <StyledPasswordLabel htmlFor="passwordInput">
        Password:
      </StyledPasswordLabel>
      <StyledPasswordInput type="password" id="passwordInput" />
    </StyledMain>
  );
};

export default Write;
