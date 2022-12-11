import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Data from '../src/components/Data';
import Heading from '../src/components/Heading';
import Navigation from '../src/components/Navigation';
import OriginalSpacer from '../src/components/OriginalSpacer';
import { orderApiType } from '../src/types/api';

const orderApiHeading = [
  '日時',
  'ステータス',
  'ぬいぐるみ',
  'グッズ',
  '注文者名',
  '会計',
  '決済方法',
];

const orderApi: orderApiType[] = [
  {
    date: {
      yyyy: 2022,
      mm: 0o2,
      dd: 22,
    },
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
    status: '未発送',
    nui: ['aDsafSvd'],
    goods: [],
    customer: '三枝明那',
    total: 10000,
    settlement: 'クレジット',
  },
];

const Home: NextPage = ({}) => {
  return (
    <Flex>
      <Navigation index={0} />
      <Box w="fit-content" margin="0 auto" p="120px 0">
        <Heading data={'オーダー管理'} />
        <OriginalSpacer size="64px" />
        <Data heading={orderApiHeading} orderApi={orderApi} />
      </Box>
    </Flex>
  );
};

export default Home;
