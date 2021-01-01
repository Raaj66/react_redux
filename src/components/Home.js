import React from 'react';
import { addToCart } from '../services/Actions/Action';



function Home(props) {
    console.warn("Home",props)
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
                 <button 
                 onClick={()=>props.addToCartHandler({price: 1000,name : 'iphone'})
                }>AddToCart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;