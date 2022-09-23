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

export const Genres = [
  {
    genreEng: 'all-quests',
    genreRus: 'Все квесты'
  },
  {
    genreEng: 'adventures',
    genreRus: 'Приключения'
  },
  {
    genreEng: 'horror',
    genreRus: 'Ужасы'
  },
  {
    genreEng: 'mystic',
    genreRus: 'Мистика'
  },
  {
    genreEng: 'detective',
    genreRus: 'Детектив'
  },
  {
    genreEng: 'sci-fi',
    genreRus: 'Sci-fi'
  }
] as const;

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

export const enum QuestLevel {
  easy = 'легкий',
  medium = 'средний',
  hard = 'сложный'
}

export const HOST_URL = 'http://localhost:3000'
