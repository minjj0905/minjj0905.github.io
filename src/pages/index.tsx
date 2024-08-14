import PostCard from '@/components/Post/PostCard';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import { Post } from '@/types';
import { graphql } from 'gatsby';
import React from 'react';

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
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
        }
      }
    }
  }
`;

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: Array<{ node: Post }>;
    };
  };
};

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const posts = data?.allMarkdownRemark?.edges.filter(({ node }: { node: Post }) => node.frontmatter.published);
  return (
    <Layout>
      <h1 className="text-2xl font-medium w-full text-center my-4">{posts?.length} Posts</h1>
      <br />
      <ol>
        {posts?.length > 0 ? (
          posts?.map(({ node }: { node: Post }) => node.frontmatter.published && <PostCard post={node} key={node.id} />)
        ) : (
          <p>작성된 글이 없습니다.</p>
        )}
      </ol>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Post" />;
