
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Quest } from '../../types/quest';

export const getQuest = (state: State): Quest | undefined => state[NameSpace.DataQuest].quest;
export const getQuestFetchStatus = (state: State): string => state[NameSpace.DataQuest].questFetchStatus;
