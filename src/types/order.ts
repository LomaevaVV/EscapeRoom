export type Order = {
  name: string;
  peopleCount: number;
  phone: string;
  isLegal: boolean
};

export type OrderData = {
  name: string;
  people: number;
  phone: string;
  isLegal: boolean;
  closeModal: () => void
};
