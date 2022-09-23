import { createSlice } from '@reduxjs/toolkit';
import { GenreList, NameSpace } from '../../const';

type AppProcess = {
  genre: string
};

const initialState: AppProcess = {
  genre: GenreList[0].genreEng
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
  }
});

export const {changeGenre} = appProcess.actions;
