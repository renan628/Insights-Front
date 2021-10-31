interface themeType {
  [key: string]: any;
}

export const defaultTheme: themeType = {
  name: 'teste-front',
  colors: {
    primary: {
      backgroundHeader: '#B757C2',
      background: '#F4F4F4',
      main: '#ED4D77',
      contrast: '#FFFFFF',
      light: '#666666',
    },
  },
  fontFamily: {
    primary: "'Exo 2'",
    secondary: 'Roboto',
    components: 'Poppins',
  },
  font: {
    h6: {
      size: 20,
    },
  },
};

export default defaultTheme;
