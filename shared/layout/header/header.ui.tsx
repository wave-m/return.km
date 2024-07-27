import { ThemeMode } from './theme/theme.ui';

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full">
			<div className="container flex items-center">
				{/* TODO: 좌측 메뉴 */}
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<ThemeMode />
				</div>
			</div>
		</header>
	);
};
