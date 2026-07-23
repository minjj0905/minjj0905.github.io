'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <NextThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    {children}
  </NextThemeProvider>
);

export default ThemeProvider;
