import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Data from '../src/components/Data';
import Heading from '../src/components/Heading';
import Navigation from '../src/components/Navigation';
import OriginalSpacer from '../src/components/OriginalSpacer';
import { orderApi, orderPath } from '../src/libs/api';
import { orderApiHeading } from '../src/libs/apiHeading';

const hoge = [
  'りんかく',
  'め',
  'まゆ',
  'みみ',
  'はな',
  'ほほ',
  'くち',
  'まえがみ',
  'うしろがみ',
  'オプション',
  'こもの1',
  'こもの2',
  'ふく',
];

console.log(orderPath);

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
