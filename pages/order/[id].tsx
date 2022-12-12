import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Contents from '../../src/components/Contents';
import Heading from '../../src/components/Heading';
import Navigation from '../../src/components/Navigation';
import OriginalSpacer from '../../src/components/OriginalSpacer';
import { nuiApi, orderApi, orderPath } from '../../src/libs/api';
import { orderApiType } from '../../src/types/api';

type Props = {
  id: string;
  data: orderApiType;
};

const CONTENTS_NUMBER = 0;

const Home: NextPage<Props> = ({ id, data }) => {
  return (
    <Contents
      index={CONTENTS_NUMBER}
      data={`ぬいぐるみオーダー:${id}`}
      back={CONTENTS_NUMBER}
    />
  );
};

export default Home;

export const getStaticPaths = () => {
  const paths = orderPath.map((item: string) => ({
    params: { id: item },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  nuiApi.filter((item: string) => item === params.id);
  return {
    props: {
      id: params.id,
      data: nuiApi[0],
    },
  };
};
