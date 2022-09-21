export enum AppRoute {
  Home = '/',
  Contacts = '/contacts',
  Quest = '/quests/:id',
  Error = '/error'
}

export const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
  Quest: '/quests/:id'
} as const;

export const GenreList: {
  genreEng: string,
  genreRus: string
}[] = [
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
]

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
