import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Data from '../../src/components/Data';
import Heading from '../../src/components/Heading';
import Navigation from '../../src/components/Navigation';
import OriginalSpacer from '../../src/components/OriginalSpacer';
import { messageApi } from '../../src/libs/api';
import { messageApiHeading } from '../../src/libs/apiHeading';

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
