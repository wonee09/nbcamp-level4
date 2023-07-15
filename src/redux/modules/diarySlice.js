import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  error: null,
};

//__getDiaries로 요청이 들어오게 되면 :
export const __getDiaries = createAsyncThunk(
  "diary/getDiaries",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4001/diary"); //엔드포인트에서 데이터를 가져오는 작업을 수행
      return thunkAPI.fulfillWithValue(response.data); //thunkAPI : 동작이 완료되고 나서, 어떤 일을 하게 될지를 extrareducer로 보내주는 역할 - 여기서는 배열인 response.data를 보내줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addDiary = createAsyncThunk(
  "diary/addDiary",
  async (payload, thunkAPI) => {
    try {
      // axios 통신
      await axios.post(`${process.env.REACT_APP_API_URL}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//후처리 (Redux를 갱신시키는) 하는 부분
const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDiaries.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload; //📝14번째줄의 response.data -> 26번째 줄의 [__getDiaries.fulfilled]에서 감지 -> action객체의 payload 안으로 들어옴 -> 이 action.payload를 state.diaries에 주입하면 -> 3번째 값이 변경되면서 store값이 갱신됨
    },
    [__getDiaries.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload; //여기서의 action.payload는 : 17번째 줄의 error -> error객체를 이 action.payload로 갈아끼워줌
    },
    [__getDiaries.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
  },
});

export const {} = diarySlice.actions;
export default diarySlice.reducer;

//getDiaries로 요청이 들어오면 -> 리덕스를 갱신시키는 후처리까지 extraReducers에서 해줌

//📝
// dispatch(__getDiaries())는 Redux 스토어에 __getDiaries 액션을 전달합니다.
// 이를 통해 Redux 스토어에서 비동기 작업이 수행되고, 액션에 따라 스토어의 상태가 변경됩니다.
// __getDiaries 액션은 createAsyncThunk를 사용하여 정의되었으며, 비동기 작업을 수행하는 함수입니다.
// 해당 액션은 axios를 사용하여 http://localhost:4001/diary 엔드포인트에서 데이터를 가져오는 작업을 수행합니다.
// 성공적으로 데이터를 가져오면 fulfilled 액션이 발생하고, 그에 따라 diarySlice의 extraReducers에서 상태를 갱신합니다.
