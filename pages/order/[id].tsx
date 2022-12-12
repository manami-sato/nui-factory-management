import type { NextPage } from 'next';
import Contents from '../../src/components/Contents';
import Nui from '../../src/components/Nui';
import { nuiApi, nuiPath } from '../../src/libs/api';
import { nuiApiType } from '../../src/types/api';

type Props = {
  id: string;
  data: nuiApiType;
};

const CONTENTS_NUMBER = 0;

const Home: NextPage<Props> = ({ id, data }) => {
  return (
    <Contents
      index={CONTENTS_NUMBER}
      data={`ぬいぐるみオーダー:${id}`}
      back={CONTENTS_NUMBER}
      components={<Nui api={data} />}
    />
  );
};

export default Home;

export const getStaticPaths = () => {
  const paths = nuiPath.map((item) => ({
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
  const data = nuiApi.filter((item: nuiApiType) => item.id === params.id);
  const stringifyData = JSON.stringify(JSON.stringify(data[0]));
  const parseData = JSON.parse(JSON.parse(stringifyData));

  return {
    props: {
      id: params.id,
      data: parseData,
    },
  };
};
