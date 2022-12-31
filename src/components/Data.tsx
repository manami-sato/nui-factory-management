import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { orderApiType, messageApiType } from '../types/apiType';

type Props = {
  heading: string[];
  orderApi?: orderApiType[];
  nuiApi?: string[];
  messageApi?: messageApiType[];
};

const Data: FC<Props> = ({ heading, orderApi, nuiApi, messageApi }) => {
  let dataArray: any[][] = [];
  if (orderApi !== undefined && nuiApi !== undefined) {
    for (let i = 0; i < orderApi.length; i++) {
      dataArray.push([]);
      dataArray[i].push(
        `${orderApi[i].date.yyyy}/${orderApi[i].date.mm}/${orderApi[i].date.dd}`,
        orderApi[i].id,
        orderApi[i].status,
        nuiApi[i],
        orderApi[i].goods,
        orderApi[i].customer,
        orderApi[i].total,
        orderApi[i].settlement
      );
    }
  }
  if (messageApi !== undefined) {
    for (let i = 0; i < messageApi.length; i++) {
      dataArray.push([]);
      dataArray[i].push(
        `${messageApi[i].date.yyyy}/${messageApi[i].date.mm}/${messageApi[i].date.dd}`,
        messageApi[i].id,
        messageApi[i].messageText,
        messageApi[i].customer,
        messageApi[i].staff,
        messageApi[i].status
      );
    }
  }

  return (
    <Box as="table" fontSize="1.4rem">
      <Box
        as="tbody"
        sx={{
          tr: {
            '&:nth-of-type(odd)': {
              background: 'gray',
            },
          },
        }}
      >
        <Box as="tr">
          {heading.map((item, i) => (
            <Box as="td" key={item + i} p="10px 40px">
              {item}
            </Box>
          ))}
        </Box>
        {dataArray.map((item, i) => (
          <Box as="tr" key={i}>
            {item.map((itemData, i2) => (
              <Box as="td" key={itemData + i2} p="16px 0" textAlign="center">
                {i2 === 3 ? (
                  <NextLink passHref href={`/order/${itemData}`}>
                    <Text
                      as="span"
                      textDecoration="underline"
                      _hover={{
                        textDecoration: 'none',
                      }}
                    >
                      {itemData}
                    </Text>
                  </NextLink>
                ) : (
                  <>{itemData}</>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Data;
