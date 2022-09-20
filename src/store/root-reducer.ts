import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataQuest } from './data-quest/data-quest';
import { dataQuests } from './data-quests/data-quests';
import { dataOrder } from './data-order/data-order';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.DataQuest]: dataQuest.reducer,
  [NameSpace.DataQuests]: dataQuests.reducer,
  [NameSpace.DataOrder]: dataOrder.reducer,
  [NameSpace.App]: appProcess.reducer,
});
