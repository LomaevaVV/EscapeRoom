import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, NameSpace } from '../../const';

type AppProcess = {
  genre: string
};

const initialState: AppProcess = {
  genre: DEFAULT_GENRE
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
