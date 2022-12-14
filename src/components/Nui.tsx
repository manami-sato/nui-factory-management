import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import OriginalSpacer from './OriginalSpacer';
import { nuiApiType, nuiPartsType, partsType } from '../types/apiType';
import { partsSvgArray } from '../libs/partsArray';

type Props = {
  api: nuiApiType;
  nuiPartsApi: partsType[];
};

type aaa = {
  title: string;
  contents: string;
};

type bbb = {
  i: number;
};

const Nui: FC<Props> = ({ api, nuiPartsApi }) => {
  const nuiParts = api.parts;
  const nuiArray: nuiPartsType[] = [
    nuiParts.outline,
    nuiParts.eyes,
    nuiParts.eyebrows,
    nuiParts.ears,
    nuiParts.nose,
    nuiParts.cheeks,
    nuiParts.mouth,
    nuiParts.bang,
    nuiParts.backHair,
    nuiParts.haiOption,
    nuiParts.accessory01,
    nuiParts.accessory02,
    nuiParts.clothes,
  ];

  // const hoge: aaa[]<bbb> = {(i)} => {
  //   return [
  //     {
  //       title: '番号',
  //       contents: `${nuiArray[i].index}`,
  //     },
  //     {
  //       title: '色',
  //       contents: `${nuiArray[i].color}`,
  //     },
  //     {
  //       title: 'ポジション',
  //       contents: `x:${nuiArray[i].position.x}, y${nuiArray[i].position.y}`,
  //     },
  //   ];
  // };

  console.log(nuiPartsApi[0].titleJa);

  return (
    <Flex>
      <Box>
        <Box as="table" textStyle="tableStyle">
          <Box as="tbody">
            <Box as="tr">
              <Box as="td"></Box>
              {nuiPartsApi.map(
                (item: partsType, i: number) =>
                  i <= 6 && (
                    <Box as="td" key={item.titleEn + i}>
                      {item.titleJa}
                    </Box>
                  )
              )}
            </Box>
            <Box as="tr">
              <Box as="td">番号</Box>
              {nuiArray.map(
                (nuiData, i2) =>
                  i2 <= 6 && (
                    <Box as="td" key={i2} p="16px 0">
                      {nuiData.svg}
                    </Box>
                  )
              )}
            </Box>
            <Box as="tr">
              <Box as="td">色</Box>
              {nuiArray.map(
                (nuiData, i2) =>
                  i2 <= 6 && (
                    <Box as="td" key={i2} p="16px 0">
                      {nuiData.color}
                    </Box>
                  )
              )}
            </Box>
            <Box as="tr">
              <Box as="td">ポジション</Box>
              {nuiArray.map(
                (nuiData, i2) =>
                  i2 <= 6 && (
                    <Box as="td" key={i2} p="16px 0">
                      x:{nuiData.position.x}, y{nuiData.position.y}
                    </Box>
                  )
              )}
            </Box>
          </Box>
        </Box>
        <OriginalSpacer size="40px" />
        <Box as="table" textStyle="tableStyle">
          <Box as="tbody">
            <Box as="tr">
              <Box as="td"></Box>
              {nuiPartsApi.map(
                (item: partsType, i: number) =>
                  i >= 7 && (
                    <Box as="td" key={item.titleEn + i}>
                      {item.titleJa}
                    </Box>
                  )
              )}
            </Box>
            <Box as="tr">
              <Box as="td">番号</Box>
              {nuiArray.map(
                (nuiData, i2) =>
                  i2 >= 7 && (
                    <Box as="td" key={i2} p="16px 0">
                      {nuiData.svg}
                    </Box>
                  )
              )}
            </Box>
            <Box as="tr">
              <Box as="td">色</Box>
              {nuiArray.map(
                (nuiData, i2) =>
                  i2 >= 7 && (
                    <Box as="td" key={i2} p="16px 0">
                      {nuiData.color}
                    </Box>
                  )
              )}
            </Box>
            <Box as="tr">
              <Box as="td">ポジション</Box>
              {nuiArray.map(
                (nuiData, i2) =>
                  i2 >= 7 && (
                    <Box as="td" key={i2} p="16px 0">
                      x:{nuiData.position.x}, y{nuiData.position.y}
                    </Box>
                  )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        w="240px"
        h="240px"
        // bg="skyblue"
        pos="relative"
        sx={{
          '>div': {
            display: 'flex',
            justifyContent: 'space-between',
            margin: 'auto',
            position: 'absolute',
            // 1. 後ろ髪
            // 2. 耳
            // 3. 輪郭
            // 4. 前髪, 頬
            // 5. 目, 眉, 鼻, 口
            '&:nth-of-type(1)': {
              width: '180px',
              height: '180px',
              inset: '16px 0 auto 0',
              zIndex: 3,
            },
            // 目
            '&:nth-of-type(2)': {
              width: '128px',
              height: '33px',
              inset: '115px 0 auto 0',
              zIndex: 5,
              svg: {
                width: '51px',
              },
            },
            // 眉
            '&:nth-of-type(3)': {
              width: '100px',
              inset: '100px 0 auto 0',
              zIndex: 5,
              svg: {
                width: '27px',
              },
            },
            // 耳
            '&:nth-of-type(4)': {
              width: '212px',
              height: '48px',
              inset: '105px 0 auto 0',
              zIndex: 2,
              svg: {
                width: '34px',
              },
            },
            // 鼻
            '&:nth-of-type(5)': {
              width: '1px',
              height: '5px',
              inset: '148px 0 auto 0',
              zIndex: 5,
              svg: {
                width: '1px',
              },
            },
            // 頬
            '&:nth-of-type(6)': {
              width: '164px',
              height: '40px',
              inset: '130px 0 auto 0',
              zIndex: 4,
              opacity: 0.8,
              svg: {
                width: '40px',
              },
            },
            // 口
            '&:nth-of-type(7)': {
              width: '32px',
              inset: '160px 0 auto 0',
              zIndex: 5,
              svg: {
                width: '32px',
              },
            },
            // 前髪
            '&:nth-of-type(8)': {
              width: '194px',
              inset: '0px 0 auto 0',
              zIndex: 4,
              svg: {
                width: '194px',
              },
            },
            // 後ろ髪
            '&:nth-of-type(9)': {
              width: '200px',
              // height: '171px',
              inset: '7px 0 auto 0',
              zIndex: 1,
              svg: {
                width: '200px',
              },
            },
            // 土台
            // '&:nth-of-type(10)': {
            //   // width: '180px',
            //   height: '180px',
            //   inset: '16px 0 auto 0',
            //   margin: 'auto',
            //   position: 'relative',
            //   zIndex: '-1',
            // },
          },
        }}
      >
        <Box>
          <Box
            as={partsSvgArray[0][nuiArray[0].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            key={nuiPartsApi[0].titleEn}
            sx={{
              ...(nuiPartsApi[0].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[0].color[nuiArray[0].color],
                },
              }),
            }}
          />
        </Box>
        <Box>
          <Box
            as={partsSvgArray[1][nuiArray[1].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            key={nuiPartsApi[1].titleEn}
            sx={{
              ...(nuiPartsApi[1].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[1].color[nuiArray[1].color],
                },
              }),
            }}
          />
          <Box
            as={partsSvgArray[1][nuiArray[1].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            inset="0 0 auto auto"
            transform="scale(-1, 1)"
            key={nuiPartsApi[1].titleEn}
            sx={{
              ...(nuiPartsApi[1].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[1].color[nuiArray[1].color],
                },
              }),
            }}
          />
        </Box>
        <Box>
          <Box
            as={partsSvgArray[2][nuiArray[2].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            key={nuiPartsApi[2].titleEn}
            sx={{
              ...(nuiPartsApi[2].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[2].color[nuiArray[2].color],
                },
              }),
            }}
          />
          <Box
            as={partsSvgArray[2][nuiArray[2].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            inset="0 0 auto auto"
            transform="scale(-1, 1)"
            key={nuiPartsApi[2].titleEn}
            sx={{
              ...(nuiPartsApi[2].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[2].color[nuiArray[2].color],
                },
              }),
            }}
          />
        </Box>
        <Box>
          <Box
            as={partsSvgArray[3][nuiArray[3].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            key={nuiPartsApi[3].titleEn}
            sx={{
              ...(nuiPartsApi[3].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[3].color[nuiArray[3].color],
                },
              }),
            }}
          />
          <Box
            as={partsSvgArray[3][nuiArray[3].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            inset="0 0 auto auto"
            transform="scale(-1, 1)"
            key={nuiPartsApi[3].titleEn}
            sx={{
              ...(nuiPartsApi[3].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[3].color[nuiArray[3].color],
                },
              }),
            }}
          />
        </Box>
        <Box>
          <Box
            as={partsSvgArray[4][nuiArray[4].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            key={nuiPartsApi[4].titleEn}
            sx={{
              ...(nuiPartsApi[4].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[4].color[nuiArray[4].color],
                },
              }),
            }}
          />
        </Box>
        <Box>
          <Box
            as={partsSvgArray[5][nuiArray[5].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            key={nuiPartsApi[5].titleEn}
            sx={{
              ...(nuiPartsApi[5].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[5].color[nuiArray[5].color],
                },
              }),
            }}
          />
          <Box
            as={partsSvgArray[5][nuiArray[5].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            inset="0 0 auto auto"
            transform="scale(-1, 1)"
            key={nuiPartsApi[5].titleEn}
            sx={{
              ...(nuiPartsApi[5].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[5].color[nuiArray[5].color],
                },
              }),
            }}
          />
        </Box>
        <Box>
          <Box
            as={partsSvgArray[6][nuiArray[6].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            key={nuiPartsApi[6].titleEn}
            sx={{
              ...(nuiPartsApi[6].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[6].color[nuiArray[6].color],
                },
              }),
            }}
          />
        </Box>
        <Box>
          <Box
            as={partsSvgArray[7][nuiArray[7].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            key={nuiPartsApi[7].titleEn}
            sx={{
              ...(nuiPartsApi[7].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[7].color[nuiArray[7].color],
                },
              }),
            }}
          />
        </Box>
        <Box>
          <Box
            as={partsSvgArray[8][nuiArray[8].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            key={nuiPartsApi[8].titleEn}
            sx={{
              ...(nuiPartsApi[8].color !== undefined && {
                '.colorChange': {
                  // @ts-ignore
                  fill: nuiPartsApi[8].color[nuiArray[8].color],
                },
              }),
            }}
          />
        </Box>
        {/* <Box pos="absolute">
          <Box
            as="img"
            w="100%"
            h="100%"
            objectFit="contain"
            pos="absolute"
            opacity={1}
            src={`https://images.microcms-assets.io/assets/671f68dcd0044e13809d90302044e2a2/61939e68ba174deb9861a0915a912034/%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88%2069%404x.png`}
          />
        </Box> */}
        {/* {nuiPartsApi[0].symmetry && (
            <Box
              as={partsSvgArray[0][nuiArray[0].svg[0]]}
              w="100%"
              h="100%"
              objectFit="contain"
              pos="absolute"
              inset="0 0 auto auto"
              transform="scale(-1, 1)"
              key={nuiPartsApi[0].titleEn}
              sx={{
                ...(nuiPartsApi[0].color !== undefined && {
                  '.colorChange': {
                    // @ts-ignore
                    fill: nuiPartsApi[0].color[nuiArray[0].color],
                  },
                }),
              }}
            />
          )} */}
        {/* {nuiPartsApi.map((item: partsType, i) => (
          <Box
            as={partsSvgArray[i][nuiArray[i].svg[0]]}
            w="100%"
            h="100%"
            objectFit="contain"
            pos="absolute"
            key={item.titleEn + i}
            sx={{
              ...(item.color !== undefined && {
                '.colorChange': {
                  fill: item.color[nuiArray[i].color],
                },
              }),
            }}
          />
        ))} */}
      </Box>
    </Flex>
  );
};

export default Nui;
