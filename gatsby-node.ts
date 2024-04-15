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
import path from 'path';

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }: any) => {
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
        '@/utils': path.resolve(__dirname, 'src/utils'),
        '@/hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }: any) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // Turn markdown files in our `posts` directory into `/post/slug`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: `posts`,
    });
    createNodeField({
      node,
      name: `slug`,
      value: `/posts${relativeFilePath}`,
    });
  }
};
