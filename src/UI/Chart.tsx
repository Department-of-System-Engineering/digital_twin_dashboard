import type { ChartData, ChartFilter, Sensor } from '../types';

import { useContext, useEffect, useState } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

import { generateHexColor } from '../util/functions';
import Api from '../context/api-context';

type ChartProps = {
    sensorIDs: number[];
    filter: ChartFilter;
};

const Chart = ({ sensorIDs, filter }: ChartProps) => {
    const [data, setData] = useState<ChartData[]>();
    const [sensors, setSensors] = useState<Sensor[]>();
    // const [domain, setDomain] = useState<[number, number]>();
    const { getCharts, getSensorsDetails } = useContext(Api);

    useEffect(() => {
        getSensorsDetails(sensorIDs).then((data) =>
            setSensors((prev) => {
                if (!data) return prev;
                const coloredSensors = data.map((item) => {
                    const sensor = prev ? prev.find((sensor) => sensor.id === item.id) : undefined;
                    if (sensor) return sensor;
                    return { ...item, color: generateHexColor() };
                });
                return coloredSensors;
            }),
        );

        getCharts(sensorIDs, filter).then((data) => setData(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sensorIDs]);

    useEffect(() => {
        console.log(sensors);
    }, [sensors]);

    // useEffect(() => {
    //     getCharts(sensorIDs, filter).then((data) => setData(data));
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [filter, sensorIDs]);

    // useEffect(() => {
    //     if (data) {
    //         const values = data.map((item) => item.value);
    //         setDomain(getDomain(values));
    //     }
    // }, [data, sensors]);

    // const getDomain = (values: number[]): [number, number] => {
    //     if (sensor?.type === 'float') {
    //         const domainMin = Math.round(Math.min(...values) * 0.95 * 100) / 100;
    //         const domainMax = Math.round(Math.max(...values) * 1.05 * 100) / 100;
    //         return [domainMin, domainMax];
    //     } else {
    //         const domainMin = Math.round(Math.min(...values) * 0.95);
    //         const domainMax = Math.round(Math.max(...values) * 1.05);
    //         return [domainMin, domainMax];
    //     }
    // };

    return (
        <>
            {sensors && (
                <LineChart
                    style={{
                        width: '100%',
                        maxHeight: '400px',
                        aspectRatio: 1.318,
                    }}
                    responsive
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="xAxis" />
                    <YAxis width="auto" domain={['dataMin', 'dataMax']} />
                    <Tooltip />
                    <Legend />
                    {sensors.map((item) => (
                        <Line
                            type="monotone"
                            dataKey={item.id}
                            name={item.name}
                            stroke={item.color}
                            isAnimationActive={true}
                            strokeWidth={2}
                        />
                    ))}
                </LineChart>
            )}
        </>
    );
};

export default Chart;
