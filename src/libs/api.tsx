import { useState } from 'react';
import { messageApiType, nuiApiType, orderApiType } from '../types/api';
import * as icon from '../libs/svg';
// export const nuiApi: string[] = ['aDsafSvd', 'DNrgakJ'];

import outlineNormal from '../../src/assets/parts/parts_outline_normal';

import eyesNormal from '../../src/assets/parts/parts_eyes_normal';
import eyesDown from '../../src/assets/parts/parts_eyes_down';
import eyesUp from '../../src/assets/parts/parts_eyes_up';
import eyesUhhm from '../../src/assets/parts/parts_eyes_uhhm';
import eyesFun from '../../src/assets/parts/parts_eyes_fun';
import eyesParallel from '../../src/assets/parts/parts_eyes_parallel';

import eyebrowsNormal from '../../src/assets/parts/parts_eyebrows_normal';
import eyebrowsDown from '../../src/assets/parts/parts_eyebrows_down';
import eyebrowsUp from '../../src/assets/parts/parts_eyebrows_up';
import eyebrowsBold from '../../src/assets/parts/parts_eyebrows_bold';
import eyebrowsMaro from '../../src/assets/parts/parts_eyebrows_maro';
import eyebrowsParallel from '../../src/assets/parts/parts_eyebrows_parallel';

import earsNormal from '../../src/assets/parts/parts_ears_normal';
import earsElf from '../../src/assets/parts/parts_ears_elf';

import noseNormal from '../../src/assets/parts/parts_nose_normal';

import cheeksCircle from '../../src/assets/parts/parts_cheeks_circle';
import cheeksLine from '../../src/assets/parts/parts_cheeks_line';

import mouthNormal from '../../src/assets/parts/parts_mouth_normal';
import mouthSmiley from '../../src/assets/parts/parts_mouth_smiley';
import mouthPero from '../../src/assets/parts/parts_mouth_pero';
import mouthUhhm from '../../src/assets/parts/parts_mouth_uhhm';
import mouthTriangle from '../../src/assets/parts/parts_mouth_triangle';
import mouthParallel from '../../src/assets/parts/parts_mouth_parallel';
import mouthDuck from '../../src/assets/parts/parts_mouth_duck';
import mouthOh from '../../src/assets/parts/parts_mouth_oh';

import bangPattsun from '../../src/assets/parts/parts_bang_pattsun';
import bangLightLeft from '../../src/assets/parts/parts_bang_light-left';
import bangLightRight from '../../src/assets/parts/parts_bang_light-right';
import bangHeavyLeft from '../../src/assets/parts/parts_bang_heavy-left';
import bangHeavyRight from '../../src/assets/parts/parts_bang_heavy-right';
import bangCenter from '../../src/assets/parts/parts_bang_center';
import bangPompadour from '../../src/assets/parts/parts_bang_pompadour';
import bangBrushUpLeft from '../../src/assets/parts/parts_bang_brush-up-left';
import bangBrushUpRight from '../../src/assets/parts/parts_bang_brush-up-right';
import bangShortLeft from '../../src/assets/parts/parts_bang_short-left';
import bangShortRight from '../../src/assets/parts/parts_bang_short-right';

import backHairBob from '../../src/assets/parts/parts_back-hair_bob';
import backHairShort from '../../src/assets/parts/parts_back-hair_short';
import backHairLong from '../../src/assets/parts/parts_back-hair_long';
import backHairHalfUp from '../../src/assets/parts/parts_back-hair_half-up';

import hairOptionSide from '../../src/assets/parts/parts_hair-option_side';
import hairOptionMesh from '../../src/assets/parts/parts_hair-option_mesh';
import hairOptionStupidTop from '../../src/assets/parts/parts_hair-option_stupid-top';
import hairOptionStupidBottom from '../../src/assets/parts/parts_hair-option_stupid-bottom';

import accessory01MoleLeftEye from '../../src/assets/parts/parts_accessory-01_mole-leftEye';
import accessory01MoleRightEye from '../../src/assets/parts/parts_accessory-01_mole-rightEye';
import accessory01MoleFree from '../../src/assets/parts/parts_accessory-01_mole-free';
import accessory01Freckles from '../../src/assets/parts/parts_accessory-01_freckles';
import accessory01Pierce01 from '../../src/assets/parts/parts_accessory-01_pierce-01';

import accessory02Eyelashes from '../../src/assets/parts/parts_accessory-02_eyelashes';
import accessory02Pierce02 from '../../src/assets/parts/parts_accessory-02_pierce-02';

import clothesTShirt from '../../src/assets/parts/parts_clothes_t-shirt';

export const nuiApi: nuiApiType[] = [
  {
    id: 'aDsafSvd',
    parts: {
      outline: {
        index: [0],
        color: 'tomato',
        svg: outlineNormal,
        position: {
          x: 0,
          y: 0,
        },
      },
      eyes: {
        index: [0],
        color: 'tomato',
        svg: eyesNormal,
        position: {
          x: 0,
          y: 0,
        },
      },
      eyebrows: {
        index: [0],
        color: 'tomato',
        svg: eyebrowsNormal,
        position: {
          x: 0,
          y: 0,
        },
      },
      ears: {
        index: [0],
        color: 'tomato',
        svg: earsNormal,
        position: {
          x: 0,
          y: 0,
        },
      },
      nose: {
        index: [0],
        color: 'tomato',
        svg: noseNormal,
        position: {
          x: 0,
          y: 0,
        },
      },
      cheeks: {
        index: [0],
        color: 'tomato',
        svg: cheeksCircle,
        position: {
          x: 0,
          y: 0,
        },
      },
      mouth: {
        index: [0],
        color: 'tomato',
        svg: mouthNormal,
        position: {
          x: 0,
          y: 0,
        },
      },
      bang: {
        index: [0],
        color: 'tomato',
        svg: bangPattsun,
        position: {
          x: 0,
          y: 0,
        },
      },
      backHair: {
        index: [0],
        color: 'tomato',
        svg: backHairShort,
        position: {
          x: 0,
          y: 0,
        },
      },
      haiOption: {
        index: [0],
        color: 'tomato',
        svg: hairOptionSide,
        position: {
          x: 0,
          y: 0,
        },
      },
      accessory01: {
        index: [0],
        color: 'tomato',
        svg: accessory01Pierce01,
        position: {
          x: 0,
          y: 0,
        },
      },
      accessory02: {
        index: [0],
        color: 'tomato',
        svg: accessory02Pierce02,
        position: {
          x: 0,
          y: 0,
        },
      },
      clothes: {
        index: [0],
        color: 'tomato',
        svg: clothesTShirt,
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
