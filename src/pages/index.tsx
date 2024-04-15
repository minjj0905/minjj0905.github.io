import Tspan from '@/components/test';
import { Button } from '@/components/ui/button';

const IndexPage = () => (
  <div>
    Blog
    <h1 className="text-3xl font-bold underline">dsf</h1>
    <Tspan />
    <Button variant="outline">Click</Button>
  </div>
);

export default IndexPage;

export const Head = () => <title>Hello World</title>;
