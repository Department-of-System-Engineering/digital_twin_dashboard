import { createContext } from 'react';
import type { OptionItem } from '../types';

type GlobalContext = {
    userTypes: OptionItem[] | undefined;
    selectedUserType: OptionItem | undefined;
    setSelectedUserType: (option: OptionItem) => void;
    processModes: OptionItem[] | undefined;
    selectedProcessMode: OptionItem | undefined;
    setSelectedProcessMode: (option: OptionItem) => void;
    processTypes: OptionItem[] | undefined;
    selectedProcessType: OptionItem | undefined;
    setSelectedProcessType: (option: OptionItem) => void;
    globalTemperature: number | undefined;
    globalHumidity: number | undefined;
    login: (username: string, password: string) => Promise<boolean | undefined>;
    isUserLoggedIn: boolean | undefined;
    logout: () => void;
};

const Global = createContext<GlobalContext>({
    userTypes: undefined,
    selectedUserType: undefined,
    setSelectedUserType: () => undefined,
    processModes: undefined,
    selectedProcessMode: undefined,
    setSelectedProcessMode: () => undefined,
    processTypes: undefined,
    selectedProcessType: undefined,
    setSelectedProcessType: () => undefined,
    globalTemperature: undefined,
    globalHumidity: undefined,
    login: async () => undefined,
    isUserLoggedIn: undefined,
    logout: () => undefined,
});

export default Global;
