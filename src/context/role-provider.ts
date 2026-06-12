import { createContext } from 'react';
import type { Privileges } from '../types';

const Role = createContext<Privileges>({
    toggleSwitch: false,
    orderForm: false,
    orderList: false,
    orderDetailsModal: false,
    orderDetails: false,
    orderDetailsButton: false,
    order: false,
    process: false,
    processDetails: false,
    graphs: false,
    actions: false,
});

export default Role;
