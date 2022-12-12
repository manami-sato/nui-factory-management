export type orderApiType = {
  date: {
    yyyy: number;
    mm: number;
    dd: number;
  };
  id: string[];
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

export type nuiPartsType = {
  index: number[];
  color: string;
  svg: any;
  position: {
    x: number;
    y: number;
  };
};

export type nuiApiType = {
  id: string;
  parts: {
    outline: nuiPartsType;
    eyes: nuiPartsType;
    eyebrows: nuiPartsType;
    ears: nuiPartsType;
    nose: nuiPartsType;
    cheeks: nuiPartsType;
    mouth: nuiPartsType;
    bang: nuiPartsType;
    backHair: nuiPartsType;
    haiOption: nuiPartsType;
    accessory01: nuiPartsType;
    accessory02: nuiPartsType;
    clothes: nuiPartsType;
  };
};
