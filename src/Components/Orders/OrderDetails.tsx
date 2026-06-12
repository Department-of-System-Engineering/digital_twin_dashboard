import { useContext, useEffect, useState } from 'react';
import Api from '../../context/api-context';
import type { Order } from '../../types';
import Role from '../../context/role-provider';

const OrderDetails = () => {
    const [order, setOrder] = useState<Order>();
    const { getOrder, completeOrder, deleteOrder } = useContext(Api);
    const { orderDetailsButton } = useContext(Role);

    useEffect(() => {
        getOrder().then((order) => order && setOrder(order));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {order && (
                <div className="w-full p-6 drop-shadow-lg bg-white rounded-lg">
                    <div className=" text-gray-700 font-bold text-xl mb-6">
                        Order ID: {order.details.orderID}
                    </div>
                    <div className="grid grid-cols-3 gap-6 justify-items-center ">
                        {order.products.map((product) => (
                            <div className="drop-shadow-sm bg-violet-50 rounded-lg p-2 w-full">
                                <img
                                    src={product.imageUrl}
                                    alt="Product image"
                                    className="rounded-md shadow-lg w-[50%] mx-auto mb-3 max-w-[150px]"
                                />
                                <div className="w-[40%]">
                                    <label className="font-bold block truncate">Quantity</label>
                                    <div className="bg-white p-2 rounded-md shadow-sm truncate">
                                        {product.quantity}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {orderDetailsButton && (
                        <div className="mt-7 w-full flex justify-center items-center gap-7">
                            <button
                                className="px-6 py-2 bg-red-400 text-gray-700 rounded-lg hover:bg-red-500 hover:cursor-pointer transform transition duration-200 hover:scale-105 font-semibold tracking-wide shadow-lg"
                                onClick={() => {
                                    deleteOrder(order.details.orderID);
                                }}
                            >
                                Delete Order
                            </button>
                            <button
                                className="px-6 py-2 bg-amber-300 text-gray-700 rounded-lg hover:bg-amber-400 hover:cursor-pointer transform transition duration-200 hover:scale-105 font-semibold tracking-wide shadow-lg"
                                onClick={() => {
                                    completeOrder(order.details.orderID);
                                }}
                            >
                                Complete Order
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default OrderDetails;
