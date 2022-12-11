import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: '#414141',
  gray: '#f0f0f0',
  white: '#ffffff',
  primary: '#DD705E',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black',
      fontSize: '1.6rem',
      fontFamily: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
      a: {
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
    },
  },
};
const breakpoints = {
  sm: '500px',
  md: '640px',
  lg: '820px',
};
const textStyles = {
  bodyWidth: {
    width: {
      base: '90vw',
      sm: '80vw',
    },
    mx: 'auto',
  },
};

const theme = extendTheme({
  styles,
  colors,
  textStyles,
  breakpoints,
});

export default theme;
