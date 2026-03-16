import type { Product } from '../../types';
import { useContext, useEffect, useState } from 'react';
import OrderItem from './OrderItem';
import Api from '../../context/api-context';
const OrderForm = () => {
    const { getAvailableProducts, orderProducts } = useContext(Api);
    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        getAvailableProducts().then((data) => setProducts(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleQuantityChange = (productID: string, quantity: number) => {
        setProducts((prevState) =>
            prevState?.map((product) =>
                product.id === productID ? { ...product, quantity } : product,
            ),
        );
    };
    const productOrderHandler = () => {
        if (products) {
            const productsToSave: Product[] = products?.map((product) => ({
                id: product.id,
                quantity: product.quantity ?? 0,
            }));
            orderProducts(productsToSave).then((success) => {
                if (success) {
                    setProducts((prevState) =>
                        prevState?.map((product) => ({
                            ...product,
                            quantity: 0,
                        })),
                    );
                }
            });
        }
    };
    return (
        <div className="p-2">
            <div className="bg-white drop-shadow-xl rounded-2xl p-3 w-[700px]">
                <div className="grid grid-cols-2 gap-3 ">
                    {products &&
                        products.map((product) => (
                            <OrderItem
                                key={product.id}
                                imageUrl={product.imageUrl}
                                quantity={product.quantity}
                                maxQuantity={product.maxQuantity}
                                onQuantityChange={(quantity) =>
                                    handleQuantityChange(product.id, quantity)
                                }
                            />
                        ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        className="px-6 py-2 bg-amber-300 text-gray-700 rounded-lg hover:bg-amber-400 hover:cursor-pointer transform transition duration-200 hover:scale-105 font-semibold tracking-wide shadow-lg"
                        onClick={productOrderHandler}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};
export default OrderForm;
