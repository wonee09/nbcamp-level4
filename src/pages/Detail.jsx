import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <StyledMain>
      <StyledTitle>Diary Title</StyledTitle>
      <StyledDate>July 7, 2023</StyledDate>
      <StyledMood>Mood: 4</StyledMood>
      <StyledContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        fermentum felis vel sem eleifend, et viverra ex scelerisque. Donec ut
        tortor eget nulla bibendum cursus. Nam tincidunt arcu et risus congue,
        vitae bibendum mi finibus.
      </StyledContent>
    </StyledMain>
  );
};

export default Detail;

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

const StyledMood = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #293241;
`;

const StyledContent = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #293241;
`;
