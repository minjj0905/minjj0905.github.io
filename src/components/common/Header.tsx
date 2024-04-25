import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import useTheme from '@/hooks/useTheme';
import { MagnifyingGlassIcon, MoonIcon, RssIcon, SunIcon } from '@heroicons/react/20/solid';
import { Link } from 'gatsby';

const Header = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="sticky top-0 w-full h-16 z-50 bg-c-bg-primary border-b-2 flex justify-center items-center">
      <div className="max-w-[1200px] h-full w-full px-5 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold text-left font-gmarket">
            Minjj
            <span className="text-c-primary text-3xl leading-4">.</span>
            log
          </h1>
        </Link>
        <nav className="font-bold font-gmarket text-lg leading-4">
          <ul className="flex gap-8 items-center h-full">
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
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <RssIcon className="w-5 h-5" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm font-sans font-normal">개발중 ···</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li>
              <button onClick={() => toggleTheme()}>
                {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
              </button>
            </li>
            <li>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm font-sans font-normal">개발중 ···</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
