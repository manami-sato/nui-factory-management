import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  data: string;
};

const Heading: FC<Props> = ({ data }) => {
  return (
    <Text as="h2" minW="800px" fontSize="3rem" fontWeight="bold">
      {data}
    </Text>
  );
};

export default Heading;
