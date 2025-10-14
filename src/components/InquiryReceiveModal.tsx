'use client';

interface InquiryReceiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InquiryReceiveModal: React.FC<InquiryReceiveModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded-[20px] shadow-xl w-full max-w-md p-8 m-4 text-center" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">문의가 정상적으로 접수되었습니다.</h2>
        <p className="text-gray-600 mb-6">
          포트러쉬에 문의해 주셔서 감사합니다.
          <br />
          전담 매니저가 내용을 확인 후,
          <br />
          <b>영업일 기준 2일 이내</b>로 빠르게 답변드리겠습니다.
        </p>
        <button
          onClick={onClose}
          className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default InquiryReceiveModal;
