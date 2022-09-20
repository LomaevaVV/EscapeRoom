import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Quests } from '../../types/quest';
import { fetchQuestsAction } from '../api-actions';

type DataQuests = {
  quests: Quests | [];
  questsFetchStatus: string
};

const initialState: DataQuests = {
  quests: [],
  questsFetchStatus: FetchStatus.Idle,
};

export const dataQuests = createSlice({
  name: NameSpace.DataQuests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.questsFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.questsFetchStatus = FetchStatus.Success;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.quests = [];
        state.questsFetchStatus = FetchStatus.Rejected;
      });
  }
});
