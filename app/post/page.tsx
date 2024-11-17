import { PostRow } from '@/components/post/PostRow';
import { PostTagList } from '@/components/post/PostTagList';

export default function Post() {
  const fakePostData = {
    id: 1,
    imageSrc: '/test.jpg',
    title: 'title',
    desc: 'this is desc',
    date: '2024-08-15',
  };

  return (
    <div className="grid grid-cols-3 gap-x-6">
      <div className="col-span-2">
        <div className="grid grid-flow-row gap-y-3">
          <PostRow post={fakePostData} />
          <PostRow post={fakePostData} />
          <PostRow post={fakePostData} />
          <PostRow post={fakePostData} />
        </div>
      </div>
      <div className="col-span-1 gap-x-1">
        <PostTagList />
      </div>
    </div>
  );
}
