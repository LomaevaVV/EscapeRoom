export enum AppRoute {
  Home = '/',
  Contacts = '/contacts',
  Quest = '/detailed-quest/:id',
  Error = '/error'
}

export const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
  Quest: '/quests/:id'
} as const;

export const Genres: {
  [key: string]: string
} = {
  'all-quests': 'Все квесты',
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi'
}

export const DEFAULT_GENRE = 'all-quests';

export enum NameSpace {
  DataQuests = 'QUESTS',
  DataQuest = 'QUEST',
  DataOrder = 'ORDERS',
  App = 'APP'
}

export const enum FetchStatus {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Rejected = 'REJECTED',
}

export const QuestLevel: {
  [key: string]: string,
} = {
    easy: 'легкий',
    medium: 'средний',
    hard: 'сложный'
}

export const HOST_URL = 'http://localhost:3000'
