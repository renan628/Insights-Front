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
      light: '#4A48B0',
      dark: '#0066AB',
      contained: {
        hover_background: '#01679B',
      },
      outlined: {
        resting: {
          background: '#80C9EE',
        },
        houver: {
          background: '#EBF6FC',
        },
      },
    },
    secondary: {
      main: '#002081',
      contrast: '#FFFFFF',
      dark: '#000053',
      light: '#4A48B0',
      contained: {
        hover_background: '#00165A',
      },
      outlined: {
        resting: {
          background: '#808EBF',
        },
        houver: {
          background: '#EAECF4',
        },
      },
    },
    error: {
      main: '#F44336',
      contrast: '#FFFFFF',
      dark: '#E31B0C',
      light: '#F88078',
      content: '#621B16',
      background: '#FEECEB',
      contained: {
        hover_background: '#AB2F26',
      },
      outlined: {
        resting: {
          background: '#FEF0EF',
        },
        houver: {
          background: '#F9A19B',
        },
      },
    },
  },
  fontFamily: {
    primary: 'Exo, sans-serif',
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
