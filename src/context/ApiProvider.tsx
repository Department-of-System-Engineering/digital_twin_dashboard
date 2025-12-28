import Api from "./api-context";

type ApiProviderProps = {
    children: React.ReactElement[] | React.ReactElement;
};

const ApiProvider = ({ children }: ApiProviderProps) => {
    return <Api.Provider value={{}}>{children}</Api.Provider>;
};

export default ApiProvider;
