import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  index: number;
};

const navigationContents: {
  name: string;
  path: string;
}[] = [
  { name: 'オーダー管理', path: '/' },
  { name: 'お問い合わせ', path: '/message' },
];

const Navigation: FC<Props> = ({ index }) => {
  return (
    <Box
      w="240px"
      h="100vh"
      bg="black"
      color="white"
      p="48px 0"
      fontWeight="bold"
    >
      <NextLink passHref href={'/'}>
        <Text
          p="0 32px"
          opacity="1"
          transition="0.2s opacity"
          _hover={{
            opacity: '0.6',
          }}
        >
          ぬいふぁく！管理
        </Text>
      </NextLink>
      <OriginalSpacer size="88px" />
      <Box>
        {navigationContents.map((item, i) => (
          <NextLink passHref key={item.path + i} href={item.path}>
            <Text
              as="span"
              display="flex"
              alignItems="center"
              w="auto"
              h="56px"
              p="0 32px"
              transition="color 0.2s, background 0.2s"
              sx={{
                '&:hover': {
                  color: 'gray',
                  background: 'primary',
                },
                ...(index === i && {
                  color: 'black',
                  background: 'gray',
                }),
              }}
            >
              {item.name}
            </Text>
          </NextLink>
        ))}
      </Box>
      <Flex
        alignItems="center"
        gap="12px"
        p="0 30px"
        pos="absolute"
        inset="auto auto 48px auto"
      >
        <Box w="40px" h="40px" borderRadius="9999px" bg="primary" />
        <Text>従業員の名前</Text>
      </Flex>
    </Box>
  );
};

export default Navigation;
