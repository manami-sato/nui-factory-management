import { FC, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import OriginalSpacer from './OriginalSpacer';
import {
  orderApiType,
  messageApiType,
  nuiApiType,
  nuiPartsType,
} from '../types/api';
import { nuiApiHeading } from '../libs/apiHeading';

type Props = {
  api: nuiApiType;
};

const test = ['index', 'color', 'svg', 'position'];

const Nui: FC<Props> = ({ api }) => {
  // const [nui, setNui] = useState<nuiPartsType[]>([
  //   api.parts.outline,
  //   api.parts.eyes,
  //   api.parts.eyebrows,
  //   api.parts.ears,
  //   api.parts.nose,
  //   api.parts.cheeks,
  //   api.parts.mouth,
  //   api.parts.bang,
  //   api.parts.backHair,
  //   api.parts.haiOption,
  //   api.parts.accessory01,
  //   api.parts.accessory02,
  //   api.parts.clothes,
  // ]);

  const nuiParts = api.parts;

  const nui: nuiPartsType[] = [
    nuiParts.outline,
    nuiParts.eyes,
    nuiParts.eyebrows,
    nuiParts.ears,
    nuiParts.nose,
    nuiParts.cheeks,
    nuiParts.mouth,
    nuiParts.bang,
    nuiParts.backHair,
    nuiParts.haiOption,
    nuiParts.accessory01,
    nuiParts.accessory02,
    nuiParts.clothes,
  ];

  // console.log(nui);

  return (
    <Box as="table" fontSize="1.4rem">
      <Box
        as="tbody"
        sx={{
          tr: {
            '&:nth-of-type(odd)': {
              background: 'gray',
            },
          },
        }}
      >
        <Box as="tr">
          {nuiApiHeading.map(
            (item: string, i: number) =>
              i <= 6 && (
                <Box as="td" key={item + i} p="10px 24px">
                  {item}
                </Box>
              )
          )}
        </Box>
        <Box as="tr">
          {nui.map(
            (nuiData, i2) =>
              i2 <= 6 && (
                <Box as="td" key={i2} p="16px 0" textAlign="center">
                  {nuiData.index}
                </Box>
              )
          )}
        </Box>
        <Box as="tr">
          {nuiApiHeading.map(
            (item: string, i: number) =>
              i >= 7 && (
                <Box as="td" key={item + i} p="10px 24px">
                  {item}
                </Box>
              )
          )}
        </Box>
        <Box as="tr">
          {nui.map(
            (nuiData, i2) =>
              i2 >= 7 && (
                <Box as="td" key={i2} p="16px 0" textAlign="center">
                  {nuiData.index}
                </Box>
              )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Nui;
