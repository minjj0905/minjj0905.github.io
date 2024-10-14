import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import useTheme from '@/hooks/useTheme';
import { MagnifyingGlassIcon, MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { Link } from 'gatsby';

const Header = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="sticky top-0 z-50 flex h-12 min-h-12 w-full items-center justify-center border-b border-c-gray-300/50 bg-c-bg-primary bg-opacity-70 backdrop-blur-lg backdrop-saturate-150">
      <div className="flex h-full w-full max-w-3xl items-center justify-between px-5">
        <Link to="/">
          <h1 className="text-left font-gmarket text-lg font-bold">
            Minjj
            <span className="text-3xl leading-3 text-c-primary">.</span>
            log
          </h1>
        </Link>
        <nav className="font-sans font-medium leading-3">
          <ul className="flex h-full items-center gap-8">
            {/* <li>
              <Link to="/">post</Link>
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
                    <RssIcon className="h-5 w-5" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-sans text-sm font-normal">개발중 ···</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li> */}
            <li>
              <button type="button" onClick={() => toggleTheme()}>
                {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
              </button>
            </li>
            <li>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <MagnifyingGlassIcon className="h-5 w-5" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-sans text-sm font-normal">개발중 ···</p>
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
