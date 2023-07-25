import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    white?: string;
    black?: string;
    default?: string;
    primary: string;
    secondary: string;
    background: string;
  }
}
