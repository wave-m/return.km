import { GitHubIconLink } from './GitHubIconLink';
import { LinkedInIconLink } from './LinkedInIconLink';
import { ThemeMode } from './ThemeMode';
import { TopNav } from './TopNav';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex items-center">
        {/* TODO: 좌측 메뉴 */}
        <TopNav />
        <div className="flex items-center justify-end flex-1 space-x-1">
          <LinkedInIconLink />
          <GitHubIconLink />
          <ThemeMode />
        </div>
      </div>
    </header>
  );
};
