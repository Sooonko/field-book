interface FooterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FooterModal: React.FC<FooterModalProps> = ({ isOpen, onClose }) => {
  return (
    <footer className="w-full mt-[100px] py-5 pr-4 text-right text-[14px] leading-[140%] tracking-[0%] font-pret font-medium text-[#B1B1B1]">
      ⓒ 주식회사 포트러시 ALL RIGHTS RESERVED
    </footer>
  );
};
export default FooterModal;
