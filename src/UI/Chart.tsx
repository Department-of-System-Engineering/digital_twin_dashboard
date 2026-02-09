import { useContext, useEffect, useState } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import Api from '../context/api-context';
import type { Chart as ChartType } from '../types';

type ChartProps = {
    processID: string;
    assetID: number;
    name: string;
};

const Chart = ({ assetID, processID, name }: ChartProps) => {
    const [data, setData] = useState<ChartType[]>();
    const [domain, setDomain] = useState<[number, number]>();
    const { getDataForProcessAssetChart } = useContext(Api);

    useEffect(() => {
        getDataForProcessAssetChart(processID, assetID).then((data) => setData(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (data) {
            const values = data.map((item) => item.value);
            setDomain(getDomain(values));
        }
    }, [data]);

    const getDomain = (values: number[]): [number, number] => {
        const domainMin = Math.round(Math.min(...values) * 0.95);
        const domainMax = Math.round(Math.max(...values) * 1.05);
        return [domainMin, domainMax];
    };

    return (
        <LineChart
            style={{
                width: '100%',
                maxWidth: '700px',
                maxHeight: '70vh',
                aspectRatio: 1.618,
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
                name={name}
                stroke="#8884d8"
                isAnimationActive={true}
            />
        </LineChart>
    );
};

export default Chart;
