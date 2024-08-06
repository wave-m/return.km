import { ProfileAbout, ProfileImage } from '@/widgets/profile';

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
