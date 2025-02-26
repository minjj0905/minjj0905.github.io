import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import { PropsWithChildren } from 'react';

type SEOProps = PropsWithChildren<{
  title?: string;
  description?: string;
  pathname?: string;
}>;

export const SEO = ({ title, description, pathname, children }: SEOProps) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <html lang="ko" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* <meta name="keywords" content={keywords} /> */}
      {/* <meta name="image" content={seo.image} /> */}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Minjj.log" />
      <meta property="og:locale" content="ko_KR" />
      {/* <meta property="og:image" content={''} /> */}
      {/* <meta property="og:image:width" content={''} /> */}
      {/* <meta property="og:image:height" content={''} /> */}

      {children}
    </>
  );
};

export default SEO;
