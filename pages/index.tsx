import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Contents from '../src/components/Contents';
import Data from '../src/components/Data';
import Heading from '../src/components/Heading';
import Navigation from '../src/components/Navigation';
import OriginalSpacer from '../src/components/OriginalSpacer';
import { orderApi, orderPath } from '../src/libs/api';
import { orderApiHeading } from '../src/libs/apiHeading';
import { navigationContents } from '../src/libs/navigationContents';

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

const CONTENTS_NUMBER = 0;

const Home: NextPage = ({}) => {
  return (
    <Contents
      index={CONTENTS_NUMBER}
      data={CONTENTS_NUMBER}
      back={undefined}
      components={<Data heading={orderApiHeading} orderApi={orderApi} />}
    />
  );
};

export default Home;
