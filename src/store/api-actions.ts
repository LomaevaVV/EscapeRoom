import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { Quests, Quest } from '../types/quest';
import { AppDispatch, State } from '../types/state';
// import { toast } from 'react-toastify';

export const fetchQuestsAction = createAsyncThunk<Quests, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Quests>(APIRoute.Quests);

      return data;
    } catch(e) {
      // toast.error('Quests loading error', {
      //   position: toast.POSITION.TOP_CENTER,
      // });

      throw e;
    }
  });

export const fetchQuestAction = createAsyncThunk<Quest, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (questId, {extra: api}) => {
    try {
      const {data} = await api.get<Quest>(generatePath(APIRoute.Quest, {id: String(questId)}));
      return data;
    } catch(e) {
      // toast.error('Offer details loading error', {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      throw e;
    }
  });


// export const postOrderAction = createAsyncThunk<Order, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'data/post ReviewComment',
//   async ({comment, rating, resetData}, {extra: api}) => {
//     try {
//       const {data} = await api.post<Order>(APIRoute.Orders,
//         {comment, rating}
//       );

//       resetData();
//       return data;
//     } catch(e) {
//       // toast.error('Unable to to post a review', {
//       //   position: toast.POSITION.TOP_CENTER,
//       // });

//       throw e;
//     }
//   },
// );
