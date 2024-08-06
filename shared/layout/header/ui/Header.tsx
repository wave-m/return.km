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
        <div className="flex flex-1 items-center justify-between space-x-1 md:justify-end">
          <LinkedInIconLink />
          <GitHubIconLink />
          <ThemeMode />
        </div>
      </div>
    </header>
  );
};
