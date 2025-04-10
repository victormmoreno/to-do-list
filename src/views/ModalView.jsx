import { createPortal } from 'react-dom';

export function ModalView({ children }) {
    return createPortal(
        <div className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30 fixed inset-0 z-50 bg-black bg-opacity-20 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
                {children}
            </div>
        </div>,
        document.body
    );
}
