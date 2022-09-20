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
