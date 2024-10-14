/* eslint-disable react/no-danger */
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import { Post } from '@/types';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import dayjs from 'dayjs';
import { Link, PageProps, graphql } from 'gatsby';

interface PostTemplateProps extends PageProps {
  data: {
    markdownRemark: Post;
  };
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const formattedDate = dayjs(frontmatter.date).format('YYYY년 M월 D일');

  return (
    <Layout>
      <div className="py-10">
        <h1 className="m-0 break-words break-keep text-4xl font-semibold">{frontmatter.title}</h1>
        <div className="my-4 flex items-center gap-4 text-sm">
          <time dateTime={frontmatter.date}>{formattedDate}</time>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {frontmatter.tags.map((tag) => (
              <li key={tag}>
                <span className="text-c-primary">#</span>
                <span className="text-c-text-secondary">{tag}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="custom-content py-10" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <div className="mt-10 border-t border-gray-300 pb-10">
        <Link to="/" className="flex items-center gap-2 pt-4 text-c-primary">
          <ArrowLeftIcon className="h-5 w-5" />
          <span>목록으로</span>
        </Link>
      </div>
    </Layout>
  );
};

export const Head = ({ data }: { data: { markdownRemark: Post } }) => {
  const { title, summary } = data.markdownRemark.frontmatter;
  const { slug } = data.markdownRemark.fields;
  return <SEO title={title} description={summary} pathname={slug} />;
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`;

export default PostTemplate;
