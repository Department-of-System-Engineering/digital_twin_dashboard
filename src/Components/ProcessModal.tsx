import type { NumberType } from '../types';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';

import NumberInput from './inputs/NumberInput';

type ProcessModalProps = {
    processID: string;
    onClose: () => void;
};

const DUMMY_PROCESS = {
    name: 'Mixing Line 1',
    data: [
        { asset_id: 1, name: 'Conveyor Speed', unit: '%', value: 70, type: 'percent' },
        { asset_id: 2, name: 'Temperature', unit: '°C', value: 125.5, type: 'float', min: -120 },
        { asset_id: 3, name: 'Pressure', unit: 'bar', value: 5, type: 'int' },
        { asset_id: 4, name: 'Flow Rate', unit: 'L/min', value: 12.3, type: 'float' },
        { asset_id: 5, name: 'Batch Count', unit: 'pcs', value: 42, type: 'int' },
    ],
};

const ProcessModal = ({ processID, onClose }: ProcessModalProps) => {
    const [data, setData] = useState(DUMMY_PROCESS.data);

    const onDataValueChange = (asset_id: number, value: number) => {
        setData((prev) =>
            prev.map((item) => (item.asset_id === asset_id ? { ...item, value: value } : item)),
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
                                className="relative w-1/4 max-h-[80vh] overflow-y-auto bg-neutral-200 rounded-lg shadow-lg p-10 scrollbar-track-rounded"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="absolute top-5 right-5" onClick={onClose}>
                                    <IoCloseOutline className="hover:cursor-pointer" size={28} />
                                </button>

                                <span className="absolute top-5 left-5 text-gray-700 font-bold text-2xl">
                                    {DUMMY_PROCESS.name}
                                </span>
                                <div className="h-full flex items-start justify-center flex-col pl-5 pt-10">
                                    <div className="flex flex-col gap-2">
                                        {data.map((item) => (
                                            <div
                                                className="grid grid-cols-3 items-center gap-2"
                                                key={item.asset_id}
                                            >
                                                <p className="text-gray-700 font-semibold text-lg">
                                                    {item.name}
                                                </p>
                                                <NumberInput
                                                    type={item.type as NumberType}
                                                    value={item.value}
                                                    min={item.min}
                                                    onValueChange={(value) =>
                                                        onDataValueChange(item.asset_id, value)
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
