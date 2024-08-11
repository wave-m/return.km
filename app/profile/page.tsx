import { ProfileAbout, ProfileImage } from '@/components/profile';

export default function Profile() {
  // TODO 레이아웃 생각해보기
  return (
    <div>
      <div className="flex gap-x-3">
        <ProfileImage />
        <ProfileAbout />
      </div>
    </div>
  );
}
