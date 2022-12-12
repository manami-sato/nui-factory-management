import type { NextPage } from 'next';
import Contents from '../src/components/Contents';
import Data from '../src/components/Data';
import { orderApi } from '../src/libs/api';
import { orderApiHeading } from '../src/libs/apiHeading';

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
