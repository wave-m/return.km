import { ProfileAbout, ProfileImage, ProfileOtherExperience, ProfileWorkExperience } from '@/components/profile';

export default function Profile() {
  return (
    <div className="flex gap-x-8">
      <div className="flex flex-col gap-y-4 max-w-[200px]">
        <ProfileImage />
        <ProfileAbout />
      </div>
      <div className="grid gap-y-4">
        <ProfileWorkExperience />
        <ProfileOtherExperience />
      </div>
    </div>
  );
}
