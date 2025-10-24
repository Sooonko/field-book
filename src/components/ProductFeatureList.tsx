import Image from "next/image";

export default function ProductFeatureList() {
  const features = [
    {
      icon: "/phone_icon.svg",
      title: "디자인 및 디스플레이",
      items: [
        "10.1인치 LCD 터치스크린",
        "IP5X 방진/방수 설계",
        "듀얼 밸런스 앞바퀴 시스템",
      ],
    },
    {
      icon: "/vector_icon.svg",
      title: "주행 성능 및 안전",
      items: [
        "AI 비전 기반 자동 추종",
        "고출력(350W급) 모터",
        "미끄럼 방지 전자식 브레이크",
        "제한구역(그린·벙커·헤저드) 감지·회피",
        "자동 장애물 감지·회피",
      ],
    },
    {
      icon: "/gps_icon.svg",
      title: "GPS 및 코스 내비게이션",
      items: [
        "고정밀 GPS 기반 코스맵",
        "그린 핀별 거리 표시(앞·중앙·뒤)",
        "전체 홀 맵·홀 전환",
        "빠른 GPS 연결",
        "전 세계 4만 개 코스 지원",
      ],
    },
    {
      icon: "/play_icon.svg",
      title: "플레이 분석 및 영상 기능",
      items: [
        "스윙 영상 자동 녹화 및 재생",
        "위치 기반 스윙 영상 저장",
        "스코어 및 퍼팅 기록 기능",
        "링크·SNS 공유",
      ],
    },
    {
      icon: "/a_icon.svg",
      title: "스마트 클럽 가이드 & UI",
      items: [
        "지능형 클럽 추천 기능",
        "알림 및 음성 가이드",
        "핀치 투 줌 기능",
        "다국어 지원",
        "iOS/Android 전용 앱 연동",
      ],
    },
    {
      icon: "/battery_icon.svg",
      title: "배터리 및 연결성",
      items: [
        "36홀 이상 주행 가능한 탈착식 배터리",
        "OTA 무선 업데이트 지원",
        "Wi-Fi/LTE Cat.M1 통신 지원",
      ],
    },
  ];

  return (
    <div className="w-full max-w-[730px] bg-transparent border-t border-gray-200">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row border-b border-gray-200 py-6"
        >
          {/* Left Column - Icon + Title */}
          <div className="w-full md:w-[318px] md:pr-6 mb-4 md:mb-0">
            <div className="flex items-start gap-[12px]">
              <Image
                src={feature.icon}
                alt={`${feature.title} icon`}
                height={20}
                width={20}
                className="w-[20px] h-[20px] mt-[2px] opacity-100"
              />
              <p
                className="text-gray-900 font-[700] text-[18px] leading-[140%]"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontStyle: "Bold",
                  letterSpacing: "0%",
                }}
              >
                {feature.title}
              </p>
            </div>
          </div>

          {/* Right Column - Items */}
          <div className="flex-1">
            {feature.items.map((item, i) => (
              <p
                key={i}
                className="text-gray-900 font-[500] text-[16px] leading-[160%]"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontStyle: "Medium",
                  letterSpacing: "0%",
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
