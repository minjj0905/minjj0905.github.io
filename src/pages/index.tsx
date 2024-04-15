import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const IndexPage = () => (
  <Layout>
    <h1 className="text-3xl font-bold underline">Index</h1>
  </Layout>
);

export default IndexPage;

export const Head = () => <SEO />;
