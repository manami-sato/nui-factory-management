import { Box, Flex } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import type { NextPage } from 'next';
import { FC } from 'react';
import Heading from '../../src/components/Heading';
import Navigation from '../../src/components/Navigation';
import OriginalSpacer from '../../src/components/OriginalSpacer';

type Props = {
  index: number;
  data: string | number;
  back: number | undefined;
  components?: ReactJSXElement;
};

const Contents: FC<Props> = ({ index, data, back, components }) => {
  return (
    <Flex>
      <Navigation index={index} />
      <Box w="fit-content" margin="0 auto" p="120px 0">
        <Heading data={data} back={back} />
        <OriginalSpacer size="64px" />
        {components !== undefined && components}
      </Box>
    </Flex>
  );
};

export default Contents;
