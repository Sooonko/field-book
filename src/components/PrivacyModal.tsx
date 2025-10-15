'use client';
import React from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/85 bg-opacity-80 z-60 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-8 m-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-2xl font-bold font-pret">포트러쉬 개인정보 처리방침</h2>
          <button onClick={onClose} className="text-black text-2xl">&times;</button>
        </div>
        <div className="mt-4 max-h-[80vh] overflow-y-auto pr-4 text-sm text-gray-600 space-y-4 font-pret">
          <p>포트러쉬(이하 &ldquo;회사&ldquo;)는 회사의 서비스를 제공하기 위해 다음과 같이 개인정보를 처리하고 있습니다. 본 방침은 관련 법령에 따라 개인정보 보호 및 관리에 대한 내용을 안내합니다.</p>
          <div>
            <h3 className="font-bold">1. 수집하는 개인정보의 항목</h3>
            <p>회사는 서비스 문의 및 상담을 위해 다음과 같은 개인정보를 수집하고 있습니다.<br />필수정보: 이름, 이메일, 연락처, 회사명<br />선택정보: 서비스 요청 내용, 첨부파일 내 정보 (기획서, 레퍼런스, 이미지 등)</p>
          </div>
          <div>
            <h3 className="font-bold">2. 개인정보 수집 및 이용 목적</h3>
            <p>수집된 개인정보는 아래 목적 이외의 용도로는 사용되지 않습니다.<br />문의 내용에 대한 답변 및 고객 응대<br />서비스 제공 및 계약 진행을 위한 상담 및 안내<br />서비스 이용 현황 분석 및 통계 활용(비식별 정보로 처리)</p>
          </div>
          <div>
            <h3 className="font-bold">3. 개인정보 보유 및 이용기간</h3>
            <p>회사는 문의 대응 및 사후 관리 목적으로 최대 1년간 개인정보를 보관하며, 보관 목적이 달성된 경우 즉시 파기합니다. 단, 법령에 의해 보관이 필요한 경우 법적 보관기간 동안 유지됩니다.</p>
          </div>
          <div>
            <h3 className="font-bold">4. 개인정보 제공 및 위탁</h3>
            <p>회사는 원칙적으로 사용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, 원활한 서비스 제공을 위해 업무 일부를 외부 전문업체에 위탁할 수 있으며, 이 경우 개인정보의 안전한 처리를 위한 필요한 조치를 시행합니다.</p>
          </div>
          <div>
            <h3 className="font-bold">5. 개인정보 파기 방법</h3>
            <p>보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 즉시 파기합니다.<br />전자적 파일 형태: 재생 불가능한 방법으로 완전 삭제<br />종이 출력물: 분쇄 또는 소각</p>
          </div>
          <div>
            <h3 className="font-bold">6. 개인정보 보호를 위한 안전조치</h3>
            <p>회사는 개인정보 보호를 위해 다음과 같은 안전조치를 취합니다.<br />정기적인 개인정보 보호 교육 실시<br />개인정보 접근 제한 및 접근권한 관리<br />개인정보처리시스템의 접근기록 보관 및 정기 점검<br />보안 프로그램 설치 및 주기적 업데이트</p>
          </div>
          <div>
            <h3 className="font-bold">7. 정보주체의 권리·의무 및 행사방법</h3>
            <p>정보주체는 언제든지 본인의 개인정보 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 이를 원하실 경우 개인정보 보호책임자에게 이메일(privacy@portrush.io)을 통해 요청해 주시면 지체없이 처리하겠습니다.</p>
          </div>
          <div>
            <h3 className="font-bold">8. 개인정보 보호책임자</h3>
            <p>회사는 개인정보 처리 관련 문의 및 불만 처리 등을 담당하는 개인정보 보호책임자를 지정하고 있습니다.<br />개인정보 보호책임자: 김상연<br />연락처: privacy@portrush.io</p>
          </div>
          <div>
            <h3 className="font-bold">9. 개인정보 처리방침 변경 안내</h3>
            <p>본 개인정보 처리방침은 법령, 정책 또는 보안 기술의 변경에 따라 내용이 변경될 수 있으며, 변경 시 회사 웹사이트를 통해 사전 공지합니다.</p>
            <p className="mt-4">공고일자: 2025년 10월 1일</p>
            <p>시행일자: 2025년 10월 1일</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
