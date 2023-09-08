import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { added } from '../../redux/products/actions';

const ProductsForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

    const handleFromData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const data = { ...formData }
        data[name] = value;
        setFormData(data)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(added(formData))
    }

    return (
        <form onSubmit={handleSubmitForm} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
            {/* <!-- product name --> */}
            <div className="space-y-2">
                <label htmlFor="lws-inputName">Product Name</label>
                <input name='title' onChange={handleFromData} className="addProductInput" id="lws-inputName" type="text" required />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
                <label htmlFor="lws-inputCategory">Category</label>
                <input name='category' onChange={handleFromData} className="addProductInput" id="lws-inputCategory" type="text" required />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
                <label htmlFor="lws-inputImage">Image Url</label>
                <input name='image' onChange={handleFromData} className="addProductInput" id="lws-inputImage" type="text" required />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
                {/* <!-- price --> */}
                <div className="space-y-2">
                    <label htmlFor="ws-inputPrice">Price</label>
                    <input name='price' onChange={handleFromData} className="addProductInput" type="number" id="lws-inputPrice" required />
                </div>
                {/* <!-- quantity --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputQuantity">Quantity</label>
                    <input name='quantity' onChange={handleFromData} className="addProductInput" type="number" id="lws-inputQuantity" required />
                </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
        </form>
    );
};

export default ProductsForm;