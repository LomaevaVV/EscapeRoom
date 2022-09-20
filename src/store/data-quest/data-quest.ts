import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Quest } from '../../types/quest';
import { fetchQuestAction } from '../api-actions';

type DataQuest = {
  quest?: Quest;
  questFetchStatus: string
};

const initialState: DataQuest = {
  questFetchStatus: FetchStatus.Idle
};

export const dataQuest = createSlice({
  name: NameSpace.DataQuest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestAction.pending, (state) => {
        state.questFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.questFetchStatus = FetchStatus.Success;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.questFetchStatus = FetchStatus.Rejected;
      });
  }
});
