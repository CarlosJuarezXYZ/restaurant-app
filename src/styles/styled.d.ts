import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      wine: string;
      textLight: string;
    };
    shadows: {
      header: string;
    };
  }
}
