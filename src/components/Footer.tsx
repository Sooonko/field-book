interface FooterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FooterModal: React.FC<FooterModalProps> = ({ isOpen, onClose }) => {
    return <footer className="w-full m-auto mt-[100px] py-5 pr-6 text-right text-xs text-gray-500 text-[14px]">
        ⓒ 주식회사 포트러시 ALL RIGHTS RESERVED
    </footer>
}
export default FooterModal; 