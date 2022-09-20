
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Quests } from '../../types/quest';
// import { createSelector } from 'reselect';
// import { getGenre } from '../app-process/selectors';

export const getQuests = (state: State): Quests | [] => state[NameSpace.DataQuests].quests;
export const getQuestsFetchStatus = (state: State): string => state[NameSpace.DataQuests].questsFetchStatus;

// export const selectCurrentQuests = createSelector(
//   [getGenre, getQuests],
//   (genre: string, quests: Quests | []) => {
//     const filteredOffersByType = quests.filter((quest) => quest.type === genre);
//     return filteredOffersByType;
//   }
// );
