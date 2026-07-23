import type { MetadataRoute } from 'next';

import { getAllPosts } from '@/lib/posts';
import { siteConfig } from '@/lib/site';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = await getAllPosts();

  const staticRoutes = ['', '/posts', '/portfolio', '/about'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
};

export default sitemap;
