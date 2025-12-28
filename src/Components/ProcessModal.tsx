import type { Asset, NumberType } from '../types';

import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';

import NumberInput from './inputs/NumberInput';
import Api from '../context/api-context';

type ProcessModalProps = {
    processID: string;
    name: string;
    onClose: () => void;
};

const ProcessModal = ({ processID, name, onClose }: ProcessModalProps) => {
    const [data, setData] = useState<Asset[]>();
    const { getProcess } = useContext(Api);

    useEffect(() => {
        getProcess(processID).then((data) => data && setData(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onDataValueChange = (id: number, value: number) => {
        setData(
            (prev) =>
                prev && prev.map((item) => (item.id === id ? { ...item, value: value } : item)),
        );
    };

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
                                className="relative min-w-[550px] w-1/4 max-h-[80vh] overflow-y-auto bg-neutral-200 rounded-lg shadow-lg p-10 scrollbar-track-rounded"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="absolute top-5 right-5" onClick={onClose}>
                                    <IoCloseOutline className="hover:cursor-pointer" size={28} />
                                </button>

                                <span className="absolute top-5 left-5 text-gray-700 font-bold text-2xl">
                                    {name}
                                </span>
                                <div className="h-full flex items-start justify-center flex-col pl-5 pt-10">
                                    <div className="flex flex-col gap-2">
                                        {data &&
                                            data.map((item) => (
                                                <div
                                                    className="grid grid-cols-3 items-center gap-2"
                                                    key={item.id}
                                                >
                                                    <p className="text-gray-700 font-semibold text-lg">
                                                        {item.name}
                                                    </p>
                                                    <NumberInput
                                                        type={item.type as NumberType}
                                                        value={item.value}
                                                        min={item.min}
                                                        onValueChange={(value) =>
                                                            onDataValueChange(item.id, value)
                                                        }
                                                    />
                                                    <p className="text-gray-700 font-semibold text-lg">
                                                        {item.unit}
                                                    </p>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>,
                document.getElementById('modal')!,
            )}
        </>
    );
};

export default ProcessModal;
