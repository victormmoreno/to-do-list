import { useModal } from '../hooks/useModal';
import { ModalView } from '../views/ModalView';

export default function Modal({ children }) {
    useModal();
    
    return <ModalView>{children}</ModalView>;
}