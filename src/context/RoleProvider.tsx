import type { Privileges } from '../types';

import { useEffect, useState } from 'react';

import Role from './role-provider';

type RoleProviderProps = {
    children: React.ReactElement[] | React.ReactElement;
};

const RoleProvider = ({ children }: RoleProviderProps) => {
    const [privileges, setPrivileges] = useState<Privileges>();

    useEffect(() => {
        const setPrivilegesHandler = () => {
            setPrivileges({
                orderPage: true,
                processPage: true,
                actions: true,
                graphs: true,
                orderDetails: true,
                orderDetailsButton: false,
                orderDetailsModal: false,
                orderForm: true,
                orderList: true,
                processDetails: true,
                toggleSwitch: false,
            });
        };

        setPrivilegesHandler();
    }, []);

    const roleContext = {
        orderPage: privileges?.orderPage ?? false,
        processPage: privileges?.processPage ?? false,
        toggleSwitch: privileges?.toggleSwitch ?? false,
        orderForm: privileges?.orderForm ?? false,
        orderList: privileges?.orderList ?? false,
        orderDetailsModal: privileges?.orderDetailsModal ?? false,
        orderDetails: privileges?.orderDetails ?? false,
        orderDetailsButton: privileges?.orderDetailsButton ?? false,
        processDetails: privileges?.processDetails ?? false,
        graphs: privileges?.graphs ?? false,
        actions: privileges?.actions ?? false,
    };

    return <Role.Provider value={roleContext}>{children}</Role.Provider>;
};

export default RoleProvider;
