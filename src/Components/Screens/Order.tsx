import OrderForm from '../Orders/Order/OrderForm';
import OrderList from '../Orders/OrderList';

const Order = () => {
    return (
        <div className="grid grid-cols-2 gap-4 overflow-x-hidden p-4">
            <OrderForm />
            <OrderList />
        </div>
    );
};
export default Order;
