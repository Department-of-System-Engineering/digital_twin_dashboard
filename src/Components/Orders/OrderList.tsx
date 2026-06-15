import type { OrderListItemType } from '../../types';

import { useContext, useEffect, useState } from 'react';

import OrderListItem from './OrderListItem';
import OrderModal from './OrderModal';
import Api from '../../context/api-context';
import Role from '../../context/role-provider';

const OrderList = () => {
    const { getOrders } = useContext(Api);
    const { orderDetailsModal } = useContext(Role);

    const [orders, setOrders] = useState<OrderListItemType[]>();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [selectedOrderID, setSelectedOrderID] = useState<string>();

    useEffect(() => {
        getOrders().then((data) => data && setOrders(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const modalOpenHandler = (orderID: string) => {
        setSelectedOrderID(orderID);
        setModalIsOpen(true);
    };

    const modalCloseHandler = () => {
        setModalIsOpen(false);
        setSelectedOrderID(undefined);
    };

    return (
        <div className="w-full">
            {orders &&
                orders.map((order) => (
                    <OrderListItem
                        key={order.orderID}
                        orderID={order.orderID}
                        customerName={order.customerName}
                        orderDate={order.orderDate}
                        fulfillmentDate={order.fulfillmentDate}
                        priority={order.priority}
                        onModalOpen={() => orderDetailsModal && modalOpenHandler(order.orderID)}
                    />
                ))}
            {modalIsOpen && <OrderModal onClose={modalCloseHandler} orderID={selectedOrderID} />}
        </div>
    );
};
export default OrderList;
