import React from 'react';



function Home() {
    return (
        <div>
            <div className="cartimg">
                <img src="../cheese.png" />
            </div>
            <h1>Raaj store</h1>
            <div className="main">
                <div className="cart">
                    <img src="../details.png" className="phone" />
                </div>
                <div className="price">
                    <span>
                        Iphone
                    </span>
                    <span>
                        500rs
                    </span>
                </div>
                <div>
                 <button>AddToCart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;