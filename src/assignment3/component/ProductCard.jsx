import React from 'react';
import { useDispatch } from 'react-redux';
import { addedCart, increment } from '../../redux/cart/actions';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    let { title, image, category, price, quantity } = product || {};

    const handleAddCart = () => {
        dispatch(addedCart(product));
        dispatch(increment())

    }
    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={image} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{title}</h4>
                <p className="lws-productCategory">{category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
                </div>
                <button onClick={handleAddCart} className="lws-btnAddToCart">Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;