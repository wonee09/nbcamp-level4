import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getDiaries } from "../api/diaries";

const Detail = () => {
  //UseSelector
  // const { data } = useSelector((state) => state.diary); // (19:13) ❎이렇게 redux를 뒤져서 값을 찾게 되면, "Cannot read properties of undefined (reading 'title')" 오류 발생

  const { data } = useQuery("diaries", getDiaries);

  //
  const params = useParams();
  const id = params.id;
  // const diary = data.find((item) => item.id == id); // 들어오는 값이 숫자가 아닌 문자형이므로, ===에서 ==으로 바꿔주면 에러 해결됨 (33:24 참고)
  const diary = data.data.find((item) => item.id == id);

  return (
    <StyledMain>
      <StyledTitle>{diary.title}</StyledTitle>
      <StyledDate>{diary.createdAt}</StyledDate>
      <StyledMood>{diary.moodCode}</StyledMood>
      <StyledContent>{diary.moodCode}</StyledContent>
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
