import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import { Button } from '@/components/ui/button';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  return (
    <Layout>
      <h1> 아무것도 없는것 같아요..!</h1>
      <Button onClick={() => navigate(-1)} variant="link">
        이전 페이지로 돌아가기
      </Button>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <SEO title="Not Found" />;
