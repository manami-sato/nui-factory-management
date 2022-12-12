import type { NextPage } from 'next';
import Contents from '../../src/components/Contents';
import Data from '../../src/components/Data';
import { messageApi } from '../../src/libs/api';
import { messageApiHeading } from '../../src/libs/apiHeading';

const CONTENTS_NUMBER = 1;

const Message: NextPage = ({}) => {
  return (
    <Contents
      index={CONTENTS_NUMBER}
      data={CONTENTS_NUMBER}
      back={undefined}
      components={<Data heading={messageApiHeading} messageApi={messageApi} />}
    />
  );
};

export default Message;
