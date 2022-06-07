import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundImg: "",
  cardImg: "",
  description: "",
  title: "",
  titleImg: "",
  type: "",
  id: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMoviesDetails: (state, action) => {
      state.backgroundImg = action.payload.backgroundImg;
      state.cardImg = action.payload.cardImg;
      state.description = action.payload.description;
      state.title = action.payload.title;
      state.titleImg = action.payload.titleImg;
      state.type = action.payload.type;
      state.id = action.payload.id;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMoviesDetails } = dataSlice.actions;

export const selectBackgroundImg = (state) => state.data.backgroundImg;
export const selectCardImg = (state) => state.data.cardImg;
export const selectDescription = (state) => state.data.description;
export const selectTitle = (state) => state.data.title;
export const selectTitleImg = (state) => state.data.titleImg;
export const selectType = (state) => state.data.type;
export const selectId = (state) => state.data.id;

export default dataSlice.reducer;
