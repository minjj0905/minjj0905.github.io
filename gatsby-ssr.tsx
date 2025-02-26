import React, { createElement } from 'react';

const darkModeScript = `
(function () {
  const preferColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const localTheme = localStorage.getItem('theme');
  const initialTheme = localTheme || preferColorScheme;
  document.documentElement.setAttribute('data-theme', initialTheme);
})();
`;

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: `kr` });

  setHeadComponents([
    <link
      key="GmarketSansLight"
      rel="preload"
      href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="GmarketSansMedium"
      rel="preload"
      href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="GmarketSansBold"
      rel="preload"
      href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,

    <link
      key="Pretendard-Thin"
      rel="preload"
      href="https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Pretendard-ExtraLight"
      rel="preload"
      href="https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Pretendard-Light"
      rel="preload"
      href="https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Pretendard-Regular"
      rel="preload"
      href="https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Pretendard-Medium"
      rel="preload"
      href="https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Pretendard-SemiBold"
      rel="preload"
      href="https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Pretendard-Bold"
      rel="preload"
      href="https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Pretendard-ExtraBold"
      rel="preload"
      href="https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Pretendard-Black"
      rel="preload"
      href="https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
  ]);

  setPreBodyComponents([
    createElement('script', {
      key: 'darkModeScript',
      dangerouslySetInnerHTML: {
        __html: darkModeScript,
      },
    }),
  ]);
};
