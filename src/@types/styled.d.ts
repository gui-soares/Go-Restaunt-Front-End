import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme {
    colors: {
      red: {
        hex: string,
        rgba?: (opacity: number) => string,
      },
      yellow:{
        hex: string,
        rgba?: (opacity: number) => string,
      },
      title:{
        hex: string,
        rgba?: (opacity: number) => string,
      },
      text:{
        hex: string,
        rgba?: (opacity: number) => string,
      },
      positive: {
        hex: string,
        rgba?: (opacity: number) => string,
      },
      negative: {
        hex: string,
        rgba?: (opacity: number) => string,
      },
      white:{
        hex: string,
        rgba?: (opacity: number) => string,
      },
      card:{
        hex: string,
        rgba?: (opacity: number) => string,
      },
      card_line:{
        hex: string,
        rgba?: (opacity: number) => string,
      },
      inputs:{
        hex: string,
        rgba?: (opacity: number) => string,
      },
    },
  }
}
