import Image from 'next/image';

export const ProfileImage = () => {
  return (
    <div className="relative w-[180px] h-[180px]">
      <Image
        alt="kmkim face picture"
        src="/kmkim.jpeg"
        fill
        objectFit="cover"
        objectPosition="center"
        className="rounded-xl shrink-0 "
      />
    </div>
  );
};
