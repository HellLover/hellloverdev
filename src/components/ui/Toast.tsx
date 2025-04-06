interface ToastProps {
    show: boolean;
    onClick: () => void;
}

const Toast: React.FC<ToastProps> = ({ show, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`fixed bottom-4 right-4 max-w-sm w-full bg-gray-800 "text-gray-200" px-4 py-2 rounded shadow-lg transition-transform transform ${
                show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDuration: '300ms' }}
        >
           ☝️ Scroll To Top
        </div>
    );
};

export default Toast;