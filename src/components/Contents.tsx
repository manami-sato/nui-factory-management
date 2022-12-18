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
    <Flex w="100vw" justifyContent="flex-end">
      <Navigation index={index} />
      <Flex
        flexDirection="column"
        alignItems="center"
        w="calc(100vw - 240px)"
        p="120px 0"
      >
        <Heading data={data} back={back} />
        <OriginalSpacer size="64px" />
        {components !== undefined && components}
      </Flex>
    </Flex>
  );
};

export default Contents;
