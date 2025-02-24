type Project = {
  name: string;
  description: string;
  details: string[];
  techStack: string;
  link?: string; // 링크가 선택적임을 명시
};

type WorkExperience = {
  company: string;
  role: string;
  period: string;
  color: string;
  projects: Project[];
};

const workExperiences: WorkExperience[] = [
  {
    company: 'SPITHA',
    role: 'Frontend Engineer',
    period: '22.04 ~',
    color: '#323472',
    projects: [
      {
        name: 'FELICE',
        description: 'APACHE KAFKA를 쉽게 사용할 수 있는 대시보드 서비스입니다.',
        details: ['• 고민중,,'],
        techStack: 'Next.js 12(page router), React, TypeScript, Redux, Zustand, React-Query, Mui, Git',
        link: 'https://spitha.io/',
      },
    ],
  },
  {
    company: 'EPIKAR',
    role: 'FullStack Engineer',
    period: '20.11 ~ 22.03',
    color: '#082567',
    projects: [
      {
        name: 'BMW PLUS',
        description: 'BMW 차량 수리 관련 서비스입니다. (현재 서비스 종료)',
        details: [
          '• 정비 예약 프로세스 수정에 따른 개발',
          '• 차량 별 정비 견적 서비스 기획 및 개발',
          '• BMW Digital Mobility System 자체 예약 데이터를 배치 파일로 받아 BMW PLUS 예약 데이터와 Data Migration',
        ],
        techStack: 'Javascript, JSP, Spring Boot, MSSQL, Azure, SVN',
      },
    ],
  },
];

export const ProfileWorkExperience = () => {
  return (
    <div>
      <h2 className="mb-1 text-xl font-bold">Work Experience.</h2>
      <div className="space-y-8">
        {workExperiences.map((experience, index) => (
          <div key={index} className="flex flex-col gap-y-1">
            {/* 회사 색 적용 */}
            <b className="text-gray-600" style={{ color: experience.color }}>
              {experience.company}
            </b>
            <p className="text-gray-400 text-sm">
              {experience.role} | {experience.period}
            </p>
            {experience.projects.map((project, pIndex) => (
              <div key={pIndex} className="flex flex-col gap-y-1 mt-2">
                <b className="text-sm text-gray-600">
                  {!!project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {project.name}
                      {/* TODO 아이콘 추가 classname에 색 안 변하게 수정 */}
                    </a>
                  ) : (
                    project.name
                  )}
                </b>
                <p className="text-xs text-gray-500">{project.description}</p>
                <div className="text-sm gap-y-1 mt-2">
                  {project.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-1">사용 기술: {project.techStack}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
