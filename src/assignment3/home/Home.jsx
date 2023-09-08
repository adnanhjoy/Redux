import React from 'react';
import { useSelector } from 'react-redux';
import ProductsForm from '../component/ProductsForm';
import ProductCard from '../component/ProductCard';

const Home = () => {
    const products = useSelector(state => state.pro.products);
    return (
        <div>
            <main className="py-16">
                <div className="productWrapper">
                    {/* <!-- products container --> */}
                    <div className="productContainer" id="lws-productContainer">
                        {/* <!-- product item --> */}
                        {
                            products.length > 0 ? products?.map((product, idx) => <ProductCard
                            key={idx}
                            product={product}
                        />) : <p>No Product Found</p>
                        }
                        {/* <!-- product item ends --> */}
                    </div>
                    {/* <!-- products container ends --> */}
                    <div>
                        {/* <!-- Product Input Form --> */}
                        <div className="formContainer">
                            <h4 className="formTitle">Add New Product</h4>
                            <ProductsForm />
                        </div>
                        {/* <!-- Product Input Form Ends --> */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;