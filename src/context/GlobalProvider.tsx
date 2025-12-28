import Global from "./global-context";

type GlobalProviderProps = {
    children: React.ReactElement[] | React.ReactElement;
};

const GlobalProvider = ({ children }: GlobalProviderProps) => {
    return <Global.Provider value={{}}>{children}</Global.Provider>;
};

export default GlobalProvider;
