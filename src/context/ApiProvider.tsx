import type { OptionItem } from "../types";
import Api from "./api-context";

type ApiProviderProps = {
    children: React.ReactElement[] | React.ReactElement;
};

const ApiProvider = ({ children }: ApiProviderProps) => {
    const getUserTypes = async () => {
        const USER_TYPES: OptionItem[] = [
            { id: 1, name: "Műszakvezető" },
            { id: 2, name: "Operátor" },
            { id: 3, name: "Karbantartó" },
            { id: 4, name: "Minőségellenőr" },
        ];

        const response = new Promise<OptionItem[]>((resolve) => {
            resolve(USER_TYPES);
        });

        return response;
    };

    const apiContext = {
        getUserTypes: getUserTypes,
    };

    return <Api.Provider value={apiContext}>{children}</Api.Provider>;
};

export default ApiProvider;
