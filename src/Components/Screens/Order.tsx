import { useContext } from 'react';

import OrderForm from '../Orders/Order/OrderForm';
import OrderList from '../Orders/OrderList';
import Role from '../../context/role-provider';

const Order = () => {
    const { orderForm, orderList } = useContext(Role);

    return (
        <div className="grid grid-cols-2 gap-4 overflow-x-hidden p-4">
            {orderForm && <OrderForm />}
            {orderList && <OrderList />}
        </div>
    );
};

export default Order;
