import Image from 'next/image';
import Link from 'next/link';

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

  const { id, imageSrc, title, desc, date } = post;

  return (
    <Link href={`/post/${id}`}>
      <div className="flex gap-x-3 w-full justify-center">
        <div className="relative w-[85px] h-[85px]">
          <Image src={imageSrc} alt="post" width="100" height="100" className="shrink-0 rounded-xl border " />
        </div>
        <div className="w-full">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-base">{desc}</p>
          <p className="text-xs">{date}</p>
        </div>
      </div>
    </Link>
  );
};
