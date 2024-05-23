import Footer from './Footer';
import Header from './Header';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex flex-col text-c-text-primary bg-c-bg-primary items-center">
      <Header />
      <main className="max-w-3xl w-full p-5">{children}</main>
      <Footer /> 
    </div>
  );
};

export default Layout;
