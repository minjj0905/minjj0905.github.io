import { MoonIcon } from '@heroicons/react/20/solid';
import { Link } from 'gatsby';

const Header = () => {
  const switchTheme = () => {
    const curTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', curTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 w-full h-16 z-50 bg-c-bg-primary border-b-2 flex justify-center">
      <div className="max-w-[1200px] w-full px-5 flex justify-between items-center ">
        <Link to="/">
          <h1 className="text-xl font-bold text-left font-gmarket">
            Minjj
            <span className="text-c-primary text-4xl">.</span>
            log
          </h1>
        </Link>
        <nav className="font-bold font-gmarket text-lg">
          <ul className="flex gap-x-6 items-center h-full leading-4">
            <li>
              <Link to="/post">post</Link>
            </li>
            <li>
              <Link to="/life">life</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <button onClick={switchTheme}>
                <MoonIcon className="w-5 h-5" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
