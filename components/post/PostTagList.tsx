import { Badge } from '@/shared/ui/badge';

// TODO 추후 배포 시 마다 포스트 TAG들을 추출해내는 스크립트로 TAG 추출 필요
const tagList = ['Frontend', 'Kafka'];

export const PostTagList = () => {
  return (
    <div>
      <p>태그</p>
      <div className="block mt-2">
        {tagList.map((tag, index) => (
          <Badge key={index} variant="secondary" className=" mr-1 mb-1">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};
