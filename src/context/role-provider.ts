import { createContext } from 'react';
import type { Privileges } from '../types';

const Role = createContext<Privileges>({
    orderPage: false,
    processPage: false,
    toggleSwitch: false,
    orderForm: false,
    orderList: false,
    orderDetailsModal: false,
    orderDetails: false,
    orderDetailsButton: false,
    processDetails: false,
    graphs: false,
    actions: false,
});

export default Role;
