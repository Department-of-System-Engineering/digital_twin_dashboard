import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';

type OrderModalProps = {
    orderID?: string;
    onClose: () => void;
};

const OrderModal = ({ orderID, onClose }: OrderModalProps) => {
    return (
        <>
            {createPortal(
                <>
                    <div className="fixed inset-0 z-50">
                        <div className="absolute inset-0 bg-black/50" />

                        <div
                            className="relative z-10 flex h-full items-center justify-center"
                            onClick={onClose}
                        >
                            <div
                                className="relative min-w-[550px] w-[1100px] max-h-[80vh] overflow-y-auto bg-neutral-200 rounded-lg shadow-lg p-10 scrollbar-track-rounded"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="absolute top-5 right-5" onClick={onClose}>
                                    <IoCloseOutline className="hover:cursor-pointer" size={28} />
                                </button>

                                <span className="absolute top-5 left-5 text-gray-700 font-bold text-2xl">
                                    {orderID}
                                </span>
                            </div>
                        </div>
                    </div>
                </>,
                document.getElementById('modal')!,
            )}
        </>
    );
};

export default OrderModal;
