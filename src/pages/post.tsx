import PostCard from '@/components/Post/PostCard';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import { Button } from '@/components/ui/button';
import { Link, graphql } from 'gatsby';

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
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

const Post = ({ data }: { data: any }) => (
  <Layout>
    <h1>Post</h1>
    {data?.allMdx?.edges?.map((node: any) => <PostCard>{node.node.frontmatter.title}</PostCard>)}
    <Link to="/">
      <Button>To Index</Button>
    </Link>
  </Layout>
);

export default Post;

export const Head = () => <SEO title="Post" />;
