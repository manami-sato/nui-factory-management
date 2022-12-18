import type { NextPage } from 'next';
import Contents from '../../src/components/Contents';
import Nui from '../../src/components/Nui';
import { nuiApi, nuiPath, partsApi } from '../../src/libs/api';
import { nuiApiType, partsType } from '../../src/types/apiType';

type Props = {
  id: string;
  data: nuiApiType;
  partsApidata: partsType[];
};

const CONTENTS_NUMBER = 0;

const Home: NextPage<Props> = ({ id, data, partsApidata }) => {

  return (
    <Contents
      index={CONTENTS_NUMBER}
      data={`ぬいぐるみオーダー:${id}`}
      back={CONTENTS_NUMBER}
      components={<Nui api={data} nuiPartsApi={partsApidata} />}
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
  const response = await fetch(`${partsApi}`);
  const partsApidata = await response.json();

  const data = nuiApi.filter((item: nuiApiType) => item.id === params.id);
  const stringifyData = JSON.stringify(JSON.stringify(data[0]));
  const parseData = JSON.parse(JSON.parse(stringifyData));

  return {
    props: {
      id: params.id,
      data: parseData,
      partsApidata: partsApidata,
    },
  };
};
