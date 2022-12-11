export type orderApiType = {
  date: {
    yyyy: number;
    mm: number;
    dd: number;
  };
  status: string;
  nui: string[];
  goods: string[];
  customer: string;
  total: number;
  settlement: string;
};

export type messageApiType = {
  date: {
    yyyy: number;
    mm: number;
    dd: number;
  };
  id: string;
  messageText: string;
  customer: string;
  staff: string;
  status: string;
};
