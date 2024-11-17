/**
 * TODO
 * 1. 영역 컴포넌트화
 * 2. 데이터 객체화 처리
 */
export const ProfileWorkExperience = () => {
  return (
    <div>
      <h2 className="mb-1 text-xl font-bold">Work Experience.</h2>
      <div className="flex flex-col gap-y-1">
        <b className="text-gray-600">EPIKAR</b>
        <p className="text-gray-400 text-sm">FullStack Engineer | 20.11 ~ 22.03</p>

        <b className="text-gray-600">BMW PLUS</b>
        <p className="text-gray-500"> BMW 차량 수리 관련 서비스입니다. (현재 서비스 종료)</p>
        <div className="text-sm gap-y-1">
          <p>• 정비 예약 프로세스 수정에 따른 개발</p>
          <p>• 차량 별 정비 견적 서비스 기획 및 개발</p>
          <p>• BMW Digital Mobility System 자체 예약 데이터를 배치 파일로 받아 BMW PLUS 예약 데이터와 Data Migration</p>
        </div>
        <p>Javascript, JSP, Spring Boot, MSSQL, Azure, SVN</p>
      </div>
    </div>
  );
};
