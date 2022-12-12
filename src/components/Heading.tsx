import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import OriginalSpacer from './OriginalSpacer';
import { navigationContents } from '../libs/navigationContents';

type Props = {
  data: string | number;
  back?: number;
};

const Heading: FC<Props> = ({ data, back }) => {
  const router = useRouter();

  const backLink = () => {
    router.back();
  };

  return (
    <>
      {back !== undefined && (
        <>
          <Text
            as="button"
            onClick={() => backLink()}
            color="#989898"
            fontSize="1.2rem"
            fontWeight="bold"
            textDecoration="underline"
            _hover={{
              textDecoration: 'none',
            }}
          >
            &lt; {navigationContents[back].name}
          </Text>
          <OriginalSpacer size="2px" />
        </>
      )}
      <Text as="h2" minW="800px" fontSize="3rem" fontWeight="bold">
        {typeof data === 'string' ? (
          <>{data}</>
        ) : (
          <>{navigationContents[data].name}</>
        )}
      </Text>
    </>
  );
};

export default Heading;
