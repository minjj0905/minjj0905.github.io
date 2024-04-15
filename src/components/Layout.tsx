import { Link } from 'gatsby';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/post">Post</Link>
            </li>
            <li>
              <Link to="/life">Life</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
