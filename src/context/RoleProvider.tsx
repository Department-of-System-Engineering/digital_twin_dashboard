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
                actions: true,
                graphs: true,
                order: true,
                orderDetails: true,
                orderDetailsButton: true,
                orderDetailsModal: true,
                orderForm: true,
                orderList: true,
                process: true,
                processDetails: false,
                toggleSwitch: true,
            });
        };

        setPrivilegesHandler();
    }, []);

    const roleContext = {
        toggleSwitch: privileges?.toggleSwitch ?? false,
        orderForm: privileges?.orderForm ?? false,
        orderList: privileges?.orderList ?? false,
        orderDetailsModal: privileges?.orderDetailsModal ?? false,
        orderDetails: privileges?.orderDetails ?? false,
        orderDetailsButton: privileges?.orderDetailsButton ?? false,
        order: privileges?.order ?? false,
        process: privileges?.process ?? false,
        processDetails: privileges?.processDetails ?? false,
        graphs: privileges?.graphs ?? false,
        actions: privileges?.actions ?? false,
    };

    return <Role.Provider value={roleContext}>{children}</Role.Provider>;
};

export default RoleProvider;
