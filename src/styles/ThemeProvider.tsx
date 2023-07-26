'use client';

import { lightTheme } from '@styles';
import { PropsWithChildren } from 'react';
import { ThemeProvider as TP } from 'styled-components';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <TP theme={lightTheme}>{children}</TP>;
};

export default ThemeProvider;
