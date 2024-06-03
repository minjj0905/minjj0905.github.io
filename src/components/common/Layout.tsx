import Footer from './Footer';
import Header from './Header';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-c-bg-primary  w-full h-full flex flex-col text-c-text-primary items-center">
      <Header />
      <div className="bg-c-bg-primary w-full flex-1 flex justify-center">
        <main className="max-w-3xl w-full p-5">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
