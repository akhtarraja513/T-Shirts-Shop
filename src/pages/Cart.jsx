import React, { useState } from 'react'
import Items from './Items';

const Cart = (product) => {
    const [item, setItem] = useState(product)
    return (
        <>
            <header>
                <div className="continueShoping">
                    <h4>ShansTees</h4>
                    <div>
                        <p>Product</p>
                        <p>ShopingCart</p>
                    </div>
                </div>
            </header>

            <section className='mainCartSection'>
                <h2>Shoping Cart</h2>

                <div className="cartItems">
                    <div className="cartItemsContainer">
                        {
                            item.map((curItem) => {
                                return <Items key={curItem.id} {...curItem}/>
                            })
                        }
                    </div>
                </div>
            </section>


        </>
    )
}

export default Cart;