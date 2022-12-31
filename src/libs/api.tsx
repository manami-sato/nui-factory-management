import { messageApiType, orderApiType } from '../types/apiType';

export const partsApi = 'http://localhost:3000/api/parts';

export const orderApi: orderApiType[] = [
  {
    date: {
      yyyy: 2022,
      mm: 0o2,
      dd: 22,
    },
    id: ['0000', '0000', '0000'],
    status: '未発送',
    nui: ['hoge'],
    goods: [],
    customer: '三枝明那',
    total: 10000,
    settlement: 'クレジット',
  },
];

export const messageApi: messageApiType[] = [
  {
    date: {
      yyyy: 2022,
      mm: 0o2,
      dd: 22,
    },
    id: 'aksdha',
    messageText: '商品が発送されない',
    customer: '三枝明那',
    staff: '不破湊',
    status: '対応中',
  },
  {
    date: {
      yyyy: 2022,
      mm: 0o2,
      dd: 22,
    },
    id: 'aksdha',
    messageText: '商品が発送されない',
    customer: '三枝明那',
    staff: '不破湊',
    status: '対応中',
  },
];
