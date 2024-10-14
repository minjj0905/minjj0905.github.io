import Footer from './Footer';
import Header from './Header';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex min-h-full w-full flex-col items-center bg-c-bg-primary text-c-text-primary">
    <Header />
    <div className="flex w-full flex-1 justify-center bg-c-bg-primary">
      <main className="w-full max-w-3xl p-5">{children}</main>
    </div>
    <Footer />
  </div>
);

export default Layout;
