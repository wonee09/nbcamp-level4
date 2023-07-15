import React from "react";
import styled from "styled-components";
import { __addDiary } from "../redux/modules/diarySlice";

const Write = () => {
  //useStates
  const [mood, setMood] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  //react Query
  const queryClient = useQueryClient();

  const diaryMutation = useMutation(addDiary, {
    onSuccess: () => {
      //
      queryClient.invalidateQueries("diaries"); //언제 가져온 놈들을 갱신할 것이냐? -> Main의 useQuery에서 값을 날릴 때의 key값 ("diaries")
    },
  });

  // Event Handler
  //
  const handleWriteButtonClick = (e) => {
    e.preventDefault();

    // (0) validation check
    if (!title || !content || !password) {
      alert("필수 입력값이 없습니다. 확인해주세요.");
      return false;
    }

    // 1~5(mood)
    if (![1, 2, 3, 4, 5].some((item) => item == mood)) {
      //📝.some()을 돌려서 -> 배열 내에 1~5 값이 있으면 true를 반환
      alert("오늘 기분은 1~5 중에 하나가 선택돼야 합니다. 확인해주세요.");
      return false;
    }

    //--------------------------------------------------------------------------------//
    // dispatch(
    //   __addDiary({
    //     moodCode: mood,
    //     title,
    //     body: content,
    //     password,
    //     isDeleted: false,
    //     createdAt: new Date().toString(),
    //   })
    // );
    //--------------------------------------------------------------------------------//
    //--------------------------------------------------------------------------------//
    diaryMutation.mutate({
      moodCode: mood,
      title,
      body: content,
      password,
      isDeleted: false,
      createdAt: new Date().toString(), //❎.toString()을 안해주면, a non-serializable value(직렬화할 수 없는 값) was detected라고 뜸 => "a non-serializable value"는 직렬화할 수 없는 값을 의미합니다. 직렬화(serialization)란 데이터나 객체를 일련의 바이트 스트림으로 변환하는 과정을 말합니다. Redux와 같은 상태 관리 라이브러리는 상태를 직렬화하여 저장하거나 전송하기 위해 사용됩니다. Redux는 특정 조건을 충족하는 값만을 상태로 관리할 수 있도록 규정하고 있습니다. 그리고 직렬화된 상태를 저장소에 저장하거나 네트워크를 통해 전송할 수 있어야 합니다. 그러나 "a non-serializable value"는 직렬화할 수 없는 값으로, Redux의 상태로 사용할 수 없는 값을 의미합니다. 이는 일반적으로 함수나 심볼과 같은 값들을 말합니다. 함수나 심볼은 일련의 바이트 스트림으로 변환할 수 없는 복잡한 구조를 가지고 있기 때문에 직렬화할 수 없습니다. Redux는 상태를 직렬화하고 저장하기 위해 JSON.stringify()를 사용하는데, 이 함수는 함수나 심볼과 같은 non-serializable한 값을 변환할 수 없습니다. 따라서 Redux의 상태는 일반적으로 직렬화 가능한 객체나 값들로 구성되어야 합니다. Redux에서 "a non-serializable value" 오류가 발생하면, 상태에 직렬화할 수 없는 값이 포함되어 있다는 의미입니다. 이 오류를 해결하기 위해서는 직렬화할 수 없는 값들을 상태에서 제거하거나 대체해야 합니다.
    });
    //--------------------------------------------------------------------------------//

    // (2) navigate to main
    navigate("/");
  };

  //
  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <StyledMain>
      <StyledTitle>Write Diary</StyledTitle>
      <StyledDate>July 7, 2023</StyledDate>
      <form onSubmit={handleWriteButtonClick}>
        <StyledMoodLabel htmlFor="moodSelect">Mood:</StyledMoodLabel>
        <StyledMoodSelect id="moodSelect" onChange={handleMoodChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </StyledMoodSelect>
        <StyledTitleLabel htmlFor="titleTextInput">Title</StyledTitleLabel>
        <StyledTitleInput value={title} onChange={handleTitleChange} />
        <StyledContentLabel htmlFor="contentTextarea">
          Content:
        </StyledContentLabel>
        <StyledContentTextarea
          id="contentTextarea"
          value={content}
          onChange={handleContentChange}
        />

        <StyledPasswordLabel htmlFor="passwordInput">
          Password:
        </StyledPasswordLabel>
        <StyledPasswordInput
          type="password"
          id="passwordInput"
          value={password}
          onChange={handlePasswordChange}
        />
        <button>제출</button>
      </form>
    </StyledMain>
  );
};

export default Write;

//Stc
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

const StyledTitleLabel = styled.label`
  display: block;
  margin-top: 20px;
  font-size: 16px;
  color: #293241;
`;

const StyledTitleInput = styled.input`
  width: 100%;
  height: 20px;
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
