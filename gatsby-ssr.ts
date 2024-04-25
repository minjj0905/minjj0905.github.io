import { createElement } from 'react';

const darkModeScript = `
(function () {
  const preferColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const localTheme = localStorage.getItem('theme');
  const initialTheme = localTheme || preferColorScheme;
  document.documentElement.setAttribute('data-theme', initialTheme);
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    createElement('script', {
      key: 'darkModeScript',
      dangerouslySetInnerHTML: {
        __html: darkModeScript,
      },
    }),
  ]);
};
