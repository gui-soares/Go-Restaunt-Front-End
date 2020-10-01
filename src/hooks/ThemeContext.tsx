import {useContext} from 'react';

import {DefaultTheme, ThemeContext} from 'styled-components';


const theme: DefaultTheme = {
   colors:{
     red:{
       hex: '#C72828',
       rgba: (opacity) => `rgba(199, 40, 40, ${opacity})`
     },
     yellow:{
       hex: '#FFB84D',
       rgba: (opacity) => `rgba(255, 184, 77, ${opacity})`
     },
     title:{
       hex: '#3D3D4D',
       rgba: (opacity) => `rgba(61, 61, 77,${opacity})`
     },
     text:{
      hex: '#6C6C80',
    },
    positive: {
      hex: '#39B100',
    },
    negative: {
      hex: '#C72828',
    },
    white:{
      hex: '#FFFFFF',
    },
    card:{
      hex: '#F0F0F5',
    },
    card_line:{
      hex: '#E4E4EB',
    },
    inputs:{
      hex: '#B7B7CC',
    },
   }
}

const useTheme = (): DefaultTheme => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};



export {theme, useTheme}
