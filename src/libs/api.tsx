import { useState } from 'react';
import { messageApiType, orderApiType } from '../types/api';

export const orderApi: orderApiType[] = [
  {
    date: {
      yyyy: 2022,
      mm: 0o2,
      dd: 22,
    },
    id: ['0000', '0000', '0000'],
    status: '未発送',
    nui: ['aDsafSvd'],
    goods: [],
    customer: '三枝明那',
    total: 10000,
    settlement: 'クレジット',
  },
  {
    date: {
      yyyy: 2022,
      mm: 0o2,
      dd: 22,
    },
    id: ['1111', '1111', '1111'],
    status: '未発送',
    nui: ['aDsafSvd'],
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

const setPath = (data: any) => {
  let array: string[] = [];
  for (let i = 0; i < data.length; i++) {
    array.push(data[i].id);
  }
  return array;
};

export const messagePath = setPath(messageApi);
export const orderPath = setPath(orderApi);
