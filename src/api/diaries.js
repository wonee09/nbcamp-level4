import axios from "axios";

const getDiaries = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
  return response;
};

const addDiary = async (newDiary) => {
  await axios.post(`${process.env.REACT_APP_API_URL}`, newDiary);
};

export { getDiaries, addDiary };
