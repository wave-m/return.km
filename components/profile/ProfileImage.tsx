import Image from 'next/image';

export const ProfileImage = () => {
  return (
    <div className="relative w-[200px] h-[200px]">
      <Image alt="kmkim face picture" src="/kmkim.jpeg" fill className="rounded-2xl shrink-0 " />
    </div>
  );
};
