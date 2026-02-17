import type { ChartFilter, Chart as ChartType, Sensor } from '../types';

import { useContext, useEffect, useState } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

import Api from '../context/api-context';

type ChartProps = {
    sensorIDs: number[];
    filter: ChartFilter;
};

const Chart = ({ sensorIDs, filter }: ChartProps) => {
    const [data, setData] = useState<{ sensorID: number; values: ChartType[] }>();
    const [sensors, setSensors] = useState<Sensor[]>();
    const [domain, setDomain] = useState<[number, number]>();
    const { getCharts, getSensorsDetails } = useContext(Api);

    useEffect(() => {
        getSensorsDetails(sensorIDs).then((data) => setSensors(data));
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
            <div>Chart will be here</div>
            {/* {sensors && (
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
                    <XAxis dataKey="name" />
                    <YAxis width="auto" domain={domain} />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="value"
                        name={sensor?.name}
                        stroke="#5d0ec0"
                        isAnimationActive={true}
                        strokeWidth={2}
                    />
                </LineChart>
            )} */}
        </>
    );
};

export default Chart;
