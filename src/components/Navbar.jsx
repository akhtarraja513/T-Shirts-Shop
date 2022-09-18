import React, { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleOnClick = () => {
        setShow(true);
    }
    return (
        <>
            <div className='navContainer'>
                <nav className='navbar'>
                    <h3>TeeRex Store</h3>
                    <div className="navDiv">
                        <div className='navHead'>
                            <h4>Products</h4>
                        </div>
                        <div className="icon">
                        
                        <button onClick={handleOnClick}><i class="fa-sharp fa-solid fa-cart-plus"></i></button>
                        <span>9</span>
                        {/* <i class="fa fa-cart-plus" aria-hidden="true"></i> */}
                        {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-cart-plus" /> */}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;