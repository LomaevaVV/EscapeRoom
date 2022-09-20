import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
// import { postOrderAction } from '../api-actions';

export type DataReviews = {
  orderPostStatus: string
};

const initialState: DataReviews = {
  orderPostStatus: FetchStatus.Idle,
};

export const dataOrder = createSlice({
  name: NameSpace.DataOrder,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // builder
      // .addCase(postOrderAction.pending, (state) => {
      //   state.orderPostStatus = FetchStatus.Loading;
      // })
      // .addCase(postOrderAction.fulfilled, (state, action) => {
      //   state.orderPostStatus = FetchStatus.Success;
      // })
      // .addCase(postOrderAction.rejected, (state) => {
      //   state.orderPostStatus = FetchStatus.Rejected;
      // });
  }
});
