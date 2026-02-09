import type { Asset, NumberType } from '../types';

import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseOutline, IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

import NumberInput from './inputs/NumberInput';
import Api from '../context/api-context';
import Chart from '../UI/Chart';

type ProcessModalProps = {
    processID: string;
    name: string;
    onClose: () => void;
};

const ProcessModal = ({ processID, name, onClose }: ProcessModalProps) => {
    const [data, setData] = useState<Asset[]>();
    const [selectedSensor, setSelectedSensor] = useState<{ id: number; name: string }>();
    const { getProcess } = useContext(Api);

    useEffect(() => {
        getProcess(processID).then((data) => data && setData(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onDataValueChange = (id: number, value: number) => {
        // setData(
        //     (prev) =>
        //         prev && prev.map((item) => (item.id === id ? { ...item, value: value } : item)),
        // );
    };

    const handleChartToggle = (item: { id: number; name: string }) => {
        if (selectedSensor && selectedSensor.id === item.id) {
            setSelectedSensor(undefined);
        } else {
            setSelectedSensor({
                id: item.id,
                name: item.name,
            });
        }
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
                                className="relative min-w-[550px] w-[1100px] max-h-[80vh] overflow-y-auto bg-neutral-200 rounded-lg shadow-lg p-10 scrollbar-track-rounded"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="absolute top-5 right-5" onClick={onClose}>
                                    <IoCloseOutline className="hover:cursor-pointer" size={28} />
                                </button>

                                <span className="absolute top-5 left-5 text-gray-700 font-bold text-2xl">
                                    {name}
                                </span>
                                <div className="h-full flex items-start justify-center flex-col pt-10">
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 w-full">
                                        {data &&
                                            data.map((item) => (
                                                <div
                                                    className="bg-white shadow-lg p-3 rounded-xl flex gap-3 flex-col pb-4"
                                                    key={item.assetID}
                                                >
                                                    <p className="text-gray-700 font-semibold text-lg">
                                                        {item.assetName}
                                                    </p>
                                                    {item.sensors.map((sensor) => (
                                                        <div className="grid grid-cols-[30%_30%_20%_20%] gap-2 ml-[7%] items-center">
                                                            <p>{sensor.name}</p>
                                                            <NumberInput
                                                                type={sensor.type as NumberType}
                                                                value={sensor.value}
                                                                min={sensor.min}
                                                                onValueChange={(value) =>
                                                                    onDataValueChange(
                                                                        sensor.id,
                                                                        value,
                                                                    )
                                                                }
                                                            />
                                                            <p className="text-gray-700 font-semibold w-fit text-lg">
                                                                {sensor.unit}
                                                            </p>
                                                            {sensor.id === selectedSensor?.id ? (
                                                                <IoEyeOutline
                                                                    size={25}
                                                                    className="hover:cursor-pointer"
                                                                    onClick={() =>
                                                                        handleChartToggle(sensor)
                                                                    }
                                                                />
                                                            ) : (
                                                                <IoEyeOffOutline
                                                                    size={25}
                                                                    className="hover:cursor-pointer"
                                                                    onClick={() =>
                                                                        handleChartToggle(sensor)
                                                                    }
                                                                />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                {selectedSensor && (
                                    <div className="mt-10 w-full bg-white p-5 rounded-xl shadow-lg pt-8">
                                        <Chart
                                            assetID={selectedSensor.id}
                                            name={selectedSensor.name}
                                            processID={processID}
                                        />
                                    </div>
                                )}
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
