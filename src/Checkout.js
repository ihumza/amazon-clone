import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Basket is empty.</h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className='checkout__title '>Your Shopping Basket</h2>
                            {basket.map((item, i) => (
                                <CheckoutProduct
                                    key={i}
                                    item={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )}
        </div>
    )
}

export default Checkout