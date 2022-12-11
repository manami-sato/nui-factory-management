import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Data from '../src/components/Data';
import Heading from '../src/components/Heading';
import Navigation from '../src/components/Navigation';
import OriginalSpacer from '../src/components/OriginalSpacer';
import { messageApiType, orderApiType } from '../src/types/api';

const messageApiHeading: string[] = [
  '最終受診日時',
  'お問い合わせID',
  'お問い合わせ内容',
  'お客様アドレス',
  '対応者氏名',
  '対応状況',
];

const messageApi: messageApiType[] = [
  {
    date: {
      yyyy: 2022,
      mm: 0o2,
      dd: 22,
    },
    id: 'aksdha',
    messageText: '商品が発送されない',
    customer: 'nyaaan@nemu.com',
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
    customer: 'nyaaan@nemu.com',
    staff: '不破湊',
    status: '対応中',
  },
];

const Message: NextPage = ({}) => {
  return (
    <Flex>
      <Navigation index={1} />
      <Box w="fit-content" margin="0 auto" p="120px 0">
        <Heading data={'お問い合わせ'} />
        <OriginalSpacer size="64px" />
        <Data heading={messageApiHeading} messageApi={messageApi} />
      </Box>
    </Flex>
  );
};

export default Message;
