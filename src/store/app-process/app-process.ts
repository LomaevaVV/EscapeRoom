import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

type AppProcess = {
  genre: string | undefined
};

const initialState: AppProcess = {
  genre: undefined
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
