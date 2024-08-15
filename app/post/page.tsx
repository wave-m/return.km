import { PostRow } from '@/components/post/PostRow';
import { ProfileAbout, ProfileImage, ProfileOtherExperience, ProfileWorkExperience } from '@/components/profile';

export default function Post() {
  // [review] 우측에 tag나 그런거 넣을지 고민

  const fakePostData = {
    id: 1,
    imageSrc: '/test.jpg',
    title: 'title',
    desc: 'this is desc',
    date: '2024-08-15',
  };

  return (
    <div className="grid grid-flow-row gap-y-3">
      <PostRow post={fakePostData} />
      <PostRow post={fakePostData} />
      <PostRow post={fakePostData} />
      <PostRow post={fakePostData} />
    </div>
  );
}
