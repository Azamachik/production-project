import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { Modal } from 'shared/ui/Modal/Modal';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
    } = props;
    
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
