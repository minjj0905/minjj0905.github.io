/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/* eslint-disable no-undef */

/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */
// You can delete this file if you're not using it
// eslint-disable-next-line import/no-import-module-exports
import { Post } from '@/types';
import { CreateNodeArgs, CreateWebpackConfigArgs, GatsbyNode } from 'gatsby';
import path from 'path';

// Post 타입 임포트

// Webpack 설정을 변경하여 import alias 설정
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  getConfig,
}: CreateWebpackConfigArgs) => {
  const output = getConfig().output || {};

  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/lib/utils': path.resolve(__dirname, 'src/lib/utils'),
        '@/hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};

const { createFilePath } = require(`gatsby-source-filesystem`);

// MarkdownRemark 노드 처리
export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // `contents/post` 경로에서 파일 처리
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: `post`,
    });

    createNodeField({
      node,
      name: `slug`,
      value: `${relativeFilePath}`,
    });
  }
};

// 페이지 생성 함수 추가
export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<{ allMarkdownRemark: { edges: { node: Post }[] } }>(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { published: { eq: true } } } # published가 true인 포스트만 가져옴
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              summary
              tags
              published
            }
            html
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // 결과에서 published: true인 포스트들에 대해 페이지 생성
  const posts = result.data?.allMarkdownRemark.edges || [];

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug, // slug를 경로로 사용
      component: path.resolve(`./src/templates/PostTemplate.tsx`), // 템플릿 파일 지정
      context: {
        slug: node.fields.slug, // 템플릿에 전달할 slug
      },
    });
  });
};
