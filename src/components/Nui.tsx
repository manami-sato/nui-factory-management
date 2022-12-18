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

// type aaa = {
//   title: string;
//   contents: string;
// };
// type bbb = {
//   i: number;
// };

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
    nuiParts.body,
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

  return (
    <Flex gap="16px">
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
        w="280px"
        h="280px"
        pos="relative"
        sx={{
          // '>div': {
          //   // 1. 後ろ髪, 服
          //   // 2. 耳
          //   // 3. 輪郭, アクセサリー1, アクセサリー2
          //   // 4. 頬, 前髪
          //   // 5. 目, 眉, 鼻, 口
          //   // 輪郭
          //   '&:nth-of-type(1)': {
          //     width: '180px',
          //     height: '180px',
          //     inset: '30px 0 auto 0',
          //     zIndex: 3,
          //   },
          //   // 目
          //   '&:nth-of-type(2)': {
          //     width: '128px',
          //     height: '33px',
          //     inset: '130px 0 auto 0',
          //     zIndex: 5,
          //     svg: {
          //       width: '51px',
          //     },
          //   },
          //   // 眉
          //   '&:nth-of-type(3)': {
          //     width: '100px',
          //     inset: '115px 0 auto 0',
          //     zIndex: 5,
          //     svg: {
          //       width: '27px',
          //     },
          //   },
          //   // 耳
          //   '&:nth-of-type(4)': {
          //     width: '212px',
          //     height: '48px',
          //     inset: '120px 0 auto 0',
          //     zIndex: 2,
          //     svg: {
          //       width: '34px',
          //     },
          //   },
          //   // 鼻
          //   '&:nth-of-type(5)': {
          //     width: '1px',
          //     height: '5px',
          //     inset: '163px 0 auto 0',
          //     zIndex: 5,
          //     svg: {
          //       width: '1px',
          //     },
          //   },
          //   // 頬
          //   '&:nth-of-type(6)': {
          //     width: '164px',
          //     height: '40px',
          //     inset: '145px 0 auto 0',
          //     zIndex: 3,
          //     opacity: 0.8,
          //     svg: {
          //       width: '40px',
          //     },
          //   },
          //   // 口
          //   '&:nth-of-type(7)': {
          //     width: '32px',
          //     inset: '175px 0 auto 0',
          //     zIndex: 5,
          //     svg: {
          //       width: '32px',
          //     },
          //   },
          //   // 前髪
          //   '&:nth-of-type(8)': {
          //     width: '194px',
          //     inset: '15px 0 auto 0',
          //     zIndex: 4,
          //     svg: {
          //       width: '194px',
          //     },
          //   },
          //   // 後ろ髪
          //   '&:nth-of-type(9)': {
          //     width: '215px',
          //     inset: '4px 0 auto 0',
          //     zIndex: 1,
          //     svg: {
          //       width: '215px',
          //     },
          //   },
          //   // アクセサリー1
          //   '&:nth-of-type(11)': {
          //     width: '220px',
          //     height: '220px',
          //     inset: '4px 0 auto 0',
          //     zIndex: 3,
          //     svg: {
          //       position: 'absolute',
          //     },
          //   },
          //   // アクセサリー2
          //   '&:nth-of-type(12)': {
          //     width: '220px',
          //     height: '220px',
          //     inset: '4px 0 auto 0',
          //     zIndex: 3,
          //     svg: {
          //       position: 'absolute',
          //     },
          //   },
          //   // 服
          //   '&:nth-of-type(13)': {
          //     width: '220px',
          //     height: '220px',
          //     inset: '160px 0 auto 0',
          //     zIndex: 2,
          //     svg: {
          //       position: 'absolute',
          //     },
          //   },
          //   // からだ
          //   '&:nth-of-type(14)': {
          //     width: '258px',
          //     height: '213px',
          //     inset: '198px 0 auto 0',
          //     zIndex: 1,
          //     svg: {
          //       position: 'absolute',
          //     },
          //   },
          // },
          '.parts_accessory-01_mole-leftEye': {
            width: '3px',
            height: '3px',
            inset: '160px 0 auto 163px',
          },
          '.parts_accessory-01_mole-rightEye': {
            width: '3px',
            height: '3px',
            inset: '160px 0 auto 55px',
          },
          '.parts_accessory-01_mole-free': {
            width: '3px',
            height: '3px',
            inset: '10px 0 auto 163px',
          },
          '.parts_accessory-01_freckles': {
            width: '30px',
            inset: '150px 0 auto 0',
            margin: 'auto',
            path: {
              fill: '#d39667',
            },
          },
          '.parts_accessory-01_pierce-01': {
            width: '20px',
            inset: '124px 0 auto 200px',
          },
          '.parts_accessory-02_pierce-02': {
            width: '10px',
            inset: '147px 0 auto 198px',
          },
          '.parts_accessory-02_eyelashes': {
            width: '8px',
            inset: '155px 0 auto 54px',
          },
        }}
      >
        {nuiPartsApi.map((item: partsType, i) => (
          <Box
            key={item.titleEn + i}
            display="flex"
            justifyContent="space-between"
            margin="auto"
            position="absolute"
            sx={{
              // 1. 後ろ髪, 服
              // 2. 耳
              // 3. 輪郭, アクセサリー1, アクセサリー2
              // 4. 頬, 前髪
              // 5. 目, 眉, 鼻, 口
              // 輪郭
              ...(i === 0 && {
                width: '180px',
                height: '180px',
                inset: '30px 0 auto 0',
                zIndex: 3,
              }),
              // 目
              ...(i === 1 && {
                width: '128px',
                height: '33px',
                inset: '130px 0 auto 0',
                zIndex: 5,
                svg: {
                  width: '51px',
                },
              }),
              // 眉
              ...(i === 2 && {
                width: '100px',
                inset: '115px 0 auto 0',
                zIndex: 5,
                svg: {
                  width: '27px',
                },
              }),
              // 耳
              ...(i === 3 && {
                width: '212px',
                height: '48px',
                inset: '120px 0 auto 0',
                zIndex: 2,
                svg: {
                  width: '34px',
                },
              }),
              // 鼻
              ...(i === 4 && {
                width: '1px',
                height: '5px',
                inset: '163px 0 auto 0',
                zIndex: 5,
                svg: {
                  width: '1px',
                },
              }),
              // 頬
              ...(i === 5 && {
                width: '164px',
                height: '40px',
                inset: '145px 0 auto 0',
                zIndex: 3,
                opacity: 0.8,
                svg: {
                  width: '40px',
                },
              }),
              // 口
              ...(i === 6 && {
                width: '32px',
                inset: '175px 0 auto 0',
                zIndex: 5,
                svg: {
                  width: '32px',
                },
              }),
              // 前髪
              ...(i === 7 && {
                width: '194px',
                inset: '15px 0 auto 0',
                zIndex: 4,
                svg: {
                  width: '194px',
                },
              }),
              // 後ろ髪
              ...(i === 8 && {
                width: '215px',
                inset: '4px 0 auto 0',
                zIndex: 1,
                svg: {
                  width: '215px',
                },
              }),
              // 髪オプション
              ...(i === 9 && {}),
              // アクセサリー1
              ...(i === 10 && {
                width: '220px',
                height: '220px',
                inset: '4px 0 auto 0',
                zIndex: 3,
                svg: {
                  position: 'absolute',
                },
              }),
              // アクセサリー2
              ...(i === 11 && {
                width: '220px',
                height: '220px',
                inset: '4px 0 auto 0',
                zIndex: 3,
                svg: {
                  position: 'absolute',
                },
              }),
              // 服
              ...(i === 12 && {
                width: '220px',
                height: '220px',
                inset: '160px 0 auto 0',
                zIndex: 2,
              }),
              // からだ
              ...(i === 13 && {
                width: '258px',
                height: '213px',
                inset: '198px 0 auto 0',
                zIndex: 1,
              }),
            }}
          >
            {nuiArray[i].svg.map((svg: number, i2) => (
              <>
                <Box
                  as={partsSvgArray[i][svg]}
                  w="100%"
                  h="100%"
                  // position="absolute"
                  objectFit="contain"
                  sx={{
                    ...(item.color !== undefined && {
                      '.colorChange': {
                        fill: item.color[nuiArray[i].color],
                      },
                    }),
                  }}
                />
                {item.symmetry && (
                  <Box
                    as={partsSvgArray[i][svg]}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    inset="0 0 auto auto"
                    transform="scale(-1, 1)"
                    sx={{
                      ...(item.color !== undefined && {
                        '.colorChange': {
                          // @ts-ignore
                          fill: item.color[nuiArray[i].color],
                        },
                      }),
                    }}
                  />
                )}
              </>
            ))}
          </Box>
        ))}
        {/* <Box>
          {nuiArray[13].svg.map((item, i) => (
            <Box
              as={partsSvgArray[13][nuiArray[13].svg[item]]}
              w="100%"
              h="100%"
              objectFit="contain"
              key={nuiPartsApi[13].titleEn}
              sx={{
                ...(nuiPartsApi[13].color !== undefined && {
                  '.colorChange': {
                    // @ts-ignore
                    fill: nuiPartsApi[13].color[nuiArray[13].color],
                  },
                }),
              }}
            />
          ))}
        </Box> */}
      </Box>
    </Flex>
  );
};

export default Nui;
