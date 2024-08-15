import Image from 'next/image';

interface PostRow {
  post: {
    id: number;
    imageSrc: string;
    title: string;
    desc: string;
    date: string;
  };
}

export const PostRow = (props: PostRow) => {
  const { post } = props;

  const { imageSrc, title, desc, date } = post;

  return (
    <div className="flex gap-x-3 w-full items-center">
      <div className="relative w-[100px] h-[100px]">
        <Image src={imageSrc} alt="post" width="100" height="100" className="shrink-0 rounded-xl border " />
      </div>
      <div className="w-full">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-base">{desc}</p>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};
