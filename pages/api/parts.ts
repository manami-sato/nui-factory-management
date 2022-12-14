// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { partsType } from '../../src/types/apiType';

import {
  partsColor,
  partsLineColor,
  partsSkinColor,
} from '../../src/libs/partsArray';

export default function goods(
  req: NextApiRequest,
  res: NextApiResponse<partsType[]>
) {
  res.status(200).json([
    {
      titleJa: 'りんかく',
      titleEn: 'outline',
      color: partsSkinColor,
      symmetry: false,
      colorPicker: false,
    },
    {
      titleJa: 'め',
      titleEn: 'eyes',
      color: partsColor,
      symmetry: true,
      colorPicker: true,
    },
    {
      titleJa: 'まゆ',
      titleEn: 'eyebrows',
      // color: partsColor,
      symmetry: true,
      colorPicker: true,
    },
    {
      titleJa: 'みみ',
      titleEn: 'ears',
      color: partsSkinColor,
      symmetry: true,
      colorPicker: false,
    },
    {
      titleJa: 'はな',
      titleEn: 'nose',
      color: undefined,
      symmetry: false,
      colorPicker: false,
    },
    {
      titleJa: 'ほほ',
      titleEn: 'cheeks',
      color: ['#ffdfc0', '#ffdee1'],
      symmetry: true,
      colorPicker: false,
    },
    {
      titleJa: 'くち',
      titleEn: 'mouth',
      color: undefined,
      symmetry: false,
      colorPicker: false,
    },
    {
      titleJa: 'まえがみ',
      titleEn: 'bang',
      color: partsColor,
      symmetry: false,
      colorPicker: true,
    },
    {
      titleJa: 'うしろがみ',
      titleEn: 'back-hair',
      color: partsColor,
      symmetry: false,
      colorPicker: true,
    },
    {
      titleJa: 'オプション',
      titleEn: 'hair-option',
      color: partsColor,
      symmetry: false,
      colorPicker: true,
    },
    {
      titleJa: 'こもの1',
      titleEn: 'accessory-01',
      color: undefined,
      symmetry: false,
      colorPicker: false,
    },
    {
      titleJa: 'こもの2',
      titleEn: 'accessory-02',
      color: undefined,
      symmetry: true,
      colorPicker: false,
    },
    {
      titleJa: 'ふく',
      titleEn: 'clothes',
      color: partsColor,
      symmetry: false,
      colorPicker: false,
    },
    {
      titleJa: 'からだ',
      titleEn: 'body',
      color: partsSkinColor,
      symmetry: false,
      colorPicker: false,
    },
    // 色味本はいくつか作って、カラーコードの指定もできるようにする
  ]);
}
