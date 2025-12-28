import { createContext } from "react";
import type { OptionItem } from "../types";

type ApiContext = {
    getUserTypes: () => Promise<OptionItem[] | undefined>;
};

const Api = createContext<ApiContext>({
    getUserTypes: async () => undefined,
});

export default Api;
