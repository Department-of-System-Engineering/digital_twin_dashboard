import type { OptionItem } from '../types';
import { useContext, useEffect, useState } from 'react';
import Global from './global-context';
import Api from './api-context';

type GlobalProviderProps = {
    children: React.ReactElement[] | React.ReactElement;
};

const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const { getUserTypes } = useContext(Api);

    const processModes: OptionItem[] = [
        { id: 1, name: 'Real' },
        { id: 2, name: 'Simulation' },
    ];
    const processTypes: OptionItem[] = [
        { id: 1, name: 'Monitor' },
        { id: 2, name: 'Control' },
    ];

    const [userTypes, setUserTypes] = useState<OptionItem[]>();
    const [selectedProcessMode, setSelectedProcessMode] = useState<OptionItem>(processModes[0]);
    const [selectedProcessType, setSelectedProcessType] = useState<OptionItem>(processTypes[0]);
    const [selectedUserType, setSelectedUserType] = useState<OptionItem>();
    const [globalTemperature, setGlobalTemperature] = useState<number>();
    const [globalHumidty, setGlobalHumidty] = useState<number>();

    const getUserTypesFromApi = async () => {
        try {
            const data = await getUserTypes();

            if (data) {
                setUserTypes(data);
                setSelectedUserType(data[0]);
            }
        } catch (_err: unknown) {
            console.log('Something went wrong');
            console.log(_err);
        }
    };

    const getGlobalTempAndHumidity = async () => {
        setGlobalTemperature(23.5);
        setGlobalHumidty(45);
    };

    useEffect(() => {
        getUserTypesFromApi();
        getGlobalTempAndHumidity();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const globalContext = {
        userTypes: userTypes,
        selectedUserType: selectedUserType,
        setSelectedUserType: setSelectedUserType,
        processModes: processModes,
        selectedProcessMode: selectedProcessMode,
        setSelectedProcessMode: setSelectedProcessMode,
        processTypes: processTypes,
        selectedProcessType: selectedProcessType,
        setSelectedProcessType: setSelectedProcessType,
        globalTemperature: globalTemperature,
        globalHumidity: globalHumidty,
    };

    return <Global.Provider value={globalContext}>{children}</Global.Provider>;
};

export default GlobalProvider;
