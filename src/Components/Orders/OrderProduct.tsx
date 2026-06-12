import type { Product } from '../../types';

type OrderProductProps = {
    product: Product;
};

const OrderProduct = ({ product }: OrderProductProps) => {
    return (
        <div className="drop-shadow-sm bg-violet-50 rounded-lg p-2 w-full">
            <img
                src={product.imageUrl}
                alt="Product image"
                className="rounded-md shadow-lg w-[50%] mx-auto mb-3 max-w-[150px]"
            />
            <div className="w-full grid grid-cols-2 gap-5 items-center">
                <div>
                    <label className="font-bold block truncate text-wrap">Quantity</label>
                    <div className="bg-white p-2 rounded-md shadow-sm truncate">
                        {product.quantity ?? 'N/A'}
                    </div>
                </div>
                <div>
                    <label className="font-bold block truncate text-wrap">Completed quantity</label>
                    <div className="bg-white p-2 rounded-md shadow-sm truncate">
                        {product.completedQuantity ?? 'N/A'}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OrderProduct;
