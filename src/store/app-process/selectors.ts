import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getGenre = (state: State): string | undefined => state[NameSpace.App].genre;
