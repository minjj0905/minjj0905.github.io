import PostCard from '@/components/Post/PostCard';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import { Button } from '@/components/ui/button';
import { Post } from '@/types';
import { Link, graphql } from 'gatsby';

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
            category
            summary
            use
          }
        }
      }
    }
  }
`;

const PostPage = ({ data }: { data: any }) => {
  return (
    <Layout>
      <h1>Post</h1>
      {data?.allMarkdownRemark?.edges?.map(({ node }: { node: Post }) => (
        <PostCard post={node} key={node.id}>
          {node.frontmatter.title}
        </PostCard>
      ))}
      <Link to="/">
        <Button>To Index</Button>
      </Link>
    </Layout>
  );
};

export default PostPage;

export const Head = () => <SEO title="Post" />;
