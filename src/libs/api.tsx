import { messageApiType, nuiApiType, orderApiType } from '../types/apiType';

export const partsApi = 'http://localhost:3000/api/parts';

export const nuiApi: nuiApiType[] = [
  {
    id: 'aDsafSvd',
    parts: {
      outline: {
        svg: [0],
        color: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
      eyes: {
        svg: [2],
        color: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
      eyebrows: {
        svg: [5],
        color: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
      ears: {
        svg: [0],
        color: 1,
        position: {
          x: 0,
          y: 0,
        },
      },
      nose: {
        svg: [0],
        color: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
      cheeks: {
        svg: [0],
        color: 1,
        position: {
          x: 0,
          y: 0,
        },
      },
      mouth: {
        svg: [3],
        color: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
      bang: {
        svg: [2],
        color: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
      backHair: {
        svg: [0],
        color: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
      haiOption: {
        svg: [1],
        color: 0,

        position: {
          x: 0,
          y: 0,
        },
      },
      accessory01: {
        svg: [0],
        color: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
      accessory02: {
        svg: [0],
        color: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
      clothes: {
        svg: [0],
        color: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
    },
  },
];

export const orderApi: orderApiType[] = [
  {
    date: {
      yyyy: 2022,
      mm: 0o2,
      dd: 22,
    },
    id: ['0000', '0000', '0000'],
    status: '未発送',
    nui: [nuiApi[0].id],
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
    nui: [nuiApi[0].id],
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

// const setPath = (data: any) => {
const setPath = () => {
  let array: string[] = [];
  for (let i = 0; i < nuiApi.length; i++) {
    for (let i2 = 0; i2 < nuiApi.length; i2++) {
      array.push(nuiApi[i].id);
      // array.push(data[i].id);
    }
  }
  return array;
};

// // export const messagePath = setPath(messageApi);
export const nuiPath = setPath();
