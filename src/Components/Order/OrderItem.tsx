import NumberInput from '../inputs/NumberInput';
type OrderItemType = {
    imageUrl?: string;
    quantity?: number;
    maxQuantity?: number;
    onQuantityChange: (quantitiy: number) => void;
};
const OrderItem = ({
    imageUrl = '',
    quantity = 0,
    maxQuantity,
    onQuantityChange,
}: OrderItemType) => {
    return (
        <div className="drop-shadow-lg bg-white rounded-lg p-2">
            <img
                src={imageUrl}
                alt="Product image"
                className="rounded-md shadow-lg w-[30%] mx-auto mb-3"
            />
            <div className="rounded-md">
                <p className="text-sm italic">Quantity</p>
                <NumberInput
                    onValueChange={(value) =>
                        value ? onQuantityChange(value) : onQuantityChange(0)
                    }
                    type="int"
                    value={quantity}
                    max={maxQuantity}
                    className="w-[34%]"
                />
            </div>
        </div>
    );
};

export default OrderItem;
