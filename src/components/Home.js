import React from 'react';
const Home = () => {
    return (<>
        <div className="add-to-cart">
            <span className="cart-count">0</span>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
        </div>

        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://boip.in/27758-large_default/apple-iphone-6s-64gb-smart-phone-refurbished.jpg" />
            </div>
            <div className="text-wrapper item">
                <span>
                    I-Phone
                    </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className="btn-wrapper item">
                <button>Add To Cart</button>
            </div>
        </div>

    </>);
}

export default Home;