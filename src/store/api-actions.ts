import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { Quests, Quest } from '../types/quest';
import { AppDispatch, State } from '../types/state';
import { OrderData } from '../types/order';
import { toast } from 'react-toastify';

export const fetchQuestsAction = createAsyncThunk<Quests, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Quests>(APIRoute.Quests);

      return data;
    } catch(e) {
      toast.error('Quests loading error', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
    }
  });

export const fetchQuestAction = createAsyncThunk<Quest, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuest',
  async (questId, {extra: api}) => {
    try {
      const {data} = await api.get<Quest>(generatePath(APIRoute.Quest, {id: String(questId)}));
      return data;
    } catch(e) {
      toast.error('Quest details loading error', {
        position: toast.POSITION.TOP_CENTER,
      });
      throw e;
    }
  });


export const postOrderAction = createAsyncThunk<void, OrderData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/post OrderComment',
  async ({name, phone, people, isLegal, closeModal}, {dispatch, extra: api}) => {
    const peopleCount = Number(people);
    try {
      await api.post(APIRoute.Orders,
        {name, phone, peopleCount, isLegal}
      );

      toast.success('Заявка на бронирование успешно отправлена', {
        position: toast.POSITION.TOP_CENTER,
      });

      closeModal();
    } catch(e) {
      toast.error('Unable to post an order', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
    }
  },
);
