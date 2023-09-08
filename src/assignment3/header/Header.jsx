import React, { useState } from 'react';
import Home from '../home/Home';
import Cart from '../cart/Cart';
import logo from '../../assets/images/logo.png'

const Header = () => {
    const [route, setRoute] = useState('home');

    const handleRouter = (text) => {
        setRoute(text)
    }

    return (
        <div>
            <nav className="bg-[#171C2A] py-4">
                <div className="navBar">
                    <a href="index.html">
                        <img src={logo} alt="LWS" className="max-w-[140px]" />
                    </a>

                    <div className="flex gap-4">
                        <button onClick={() => handleRouter('home')} className="navHome" id="lws-home"> Home </button>
                        <button onClick={() => handleRouter('cart')} className="navCart" id="lws-cart">
                            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                            <span id="lws-totalCart">0</span>
                        </button>
                    </div>
                </div>
            </nav>
            {
                route === 'cart' ? <Cart /> : <Home />
            }
        </div>
    );
};

export default Header;