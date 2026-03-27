type OrderListItemProps = {
    orderID: string;
    customerName: string;
    orderDate: string;
    fulfillmentDate: string;
    priority: boolean;
    onModalOpen: () => void;
};

const OrderListItem = ({
    orderID,
    customerName,
    orderDate,
    fulfillmentDate,
    priority,
    onModalOpen,
}: OrderListItemProps) => {
    return (
        <div
            className={`w-full drop-shadow-md rounded-xl p-4 mb-6 grid grid-cols-4 gap-8 hover:cursor-pointer ${priority ? 'bg-amber-300' : 'bg-amber-50'}`}
            onClick={onModalOpen}
        >
            <div className="min-w-0">
                <label className="font-bold block truncate">Order ID</label>
                <div className="bg-white p-2 rounded-md shadow-sm truncate">{orderID}</div>
            </div>
            <div className="min-w-0">
                <label className="font-bold block truncate">Customer name:</label>
                <div className="bg-white p-2 rounded-md shadow-sm truncate">{customerName}</div>
            </div>
            <div className="min-w-0">
                <label className=" font-bold block truncate">Order date:</label>
                <div className="bg-white p-2 rounded-md shadow-sm truncate">{orderDate}</div>
            </div>
            <div className="min-w-0">
                <label className=" font-bold block truncate">Fulfillment date:</label>
                <div className="bg-white p-2 rounded-md shadow-sm truncate ">{fulfillmentDate}</div>
            </div>
        </div>
    );
};
export default OrderListItem;
