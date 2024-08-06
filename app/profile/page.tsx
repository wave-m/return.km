import { ProfileAbout } from '@/widgets/profile/ui/ProfileAbout';
import { ProfileImage } from '@/widgets/profile/ui/ProfileImage';

export default function Profile() {
	return (
		<div>
			<div className="flex">
				<ProfileImage />
				<ProfileAbout />
			</div>
		</div>
	);
}
