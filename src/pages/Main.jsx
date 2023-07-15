import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getDiaries } from "../redux/modules/diarySlice";
import { useDispatch, useSelector } from "react-redux";
import { getDiaries } from "../api/diaries";

const Main = () => {
  //Usestates
  // const [diary, setDiary] = useState([]);

  //hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //--------------------------------------------------------------------------------//
  //react Query
  const { isLoading, isError, data } = useQuery("diaries", getDiaries);

  if (isLoading) {
    return <h1>아직 로딩중이에요..!</h1>;
  }

  if (isError) {
    return <h1>오류가 발생했어요!</h1>;
  }

  //--------------------------------------------------------------------------------//

  //--------------------------------------------------------------------------------//
  //---THUNK---//
  // //useEffect는 conditionally하게 불리면 안되므로, 위로 이동함
  // useEffect(() => {
  //   const fetchData = async () => {
  //     //📝원래는 axios로 이렇게 가져왔던 것을
  //     //     const response = await axios.get("http://localhost:4001/diary");
  //     //     console.log("response", response.data);
  //     //     setDiary(response.data);

  //     //📝THUNK로 이렇게 바꿔서 가져옴
  //     dispatch(__getDiaries()); //21번째 줄 대신 24번째 줄
  //   };

  //   fetchData();
  // }, []);

  // //📝[diary, setDiary]대신에 -> useSelector로 받아오기
  // const { data, isLoading, isError, error } = useSelector(
  //   (state) => state.diary
  // );
  // if (isLoading) {
  //   return <h1>아직 로딩중..!</h1>;
  // }

  // if (isError) {
  //   return <h1>오류가 발생했어요!</h1>;
  // }
  //--------------------------------------------------------------------------------//

  //Event Handler
  const handleDiaryItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  //--------------------------------------------------------------------------------//
  // return (
  //   <StyledMain>
  //     {/* store에서 가져온 data값임 (client-side) */}
  //     {data.map((item, index) => (
  //       <StyledDiaryBox
  //         key={index}
  //         onClick={() => handleDiaryItemClick(item.id)}
  //       >
  //         <StyledTitle>Diary {index + 1}</StyledTitle>
  //         <StyledDate>July 7, 2023</StyledDate>
  //       </StyledDiaryBox>
  //     ))}
  //   </StyledMain>
  // );
  //--------------------------------------------------------------------------------//

  //--------------------------------------------------------------------------------//
  return (
    <StyledMain>
      {/* reactQuery로 가져온 data값임 (server-side) */}
      {data.data.map((item, index) => (
        <StyledDiaryBox
          key={index}
          onClick={() => handleDiaryItemClick(item.id)}
        >
          <StyledTitle>{item.title}</StyledTitle>
          <StyledDate>July 7, 2023</StyledDate>
        </StyledDiaryBox>
      ))}
    </StyledMain>
  );
  //--------------------------------------------------------------------------------//
};

export default Main;

const StyledMain = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 0.5fr));
  grid-gap: 20px;
  padding: 20px;
`;

const StyledDiaryBox = styled.div`
  padding: 20px;
  background-color: #dbe9f6;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledTitle = styled.h2`
  margin-top: 0;
  font-size: 18px;
  font-weight: bold;
  color: #293241;
`;

const StyledDate = styled.p`
  color: #888;
  font-size: 14px;
  margin-top: 5px;
`;
