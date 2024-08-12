export const ProfileOtherExperience = () => {
  return (
    <div>
      <h2 className="mb-1 text-xl font-bold">Other Experience.</h2>
      {/* 영역 */}
      <div className="flex flex-col gap-y-1">
        <b className="text-gray-600 ">자격증</b>
        <div className="text-sm gap-y-1">
          <p>• CCAAK(Confluent Certified Administrator for Apache Kafka)</p>
          <p>• 정보처리기사</p>
        </div>
      </div>
    </div>
  );
};
