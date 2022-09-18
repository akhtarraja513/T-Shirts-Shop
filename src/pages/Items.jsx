import React from 'react'

const Items = ({imageUrl, name, price, quantity}) => {
    return (
        <>
            <div className="itemsInfo">
                <div className="productImage">
                    <img src={imageUrl} alt="Alt" />
                </div>

                <div className="title">
                    <h4>{name}</h4>
                    <p>Rs {price}</p>
                </div>

                <div className="quantity">
                    <input type="text" placeholder={quantity} />
                </div>

                <div className="removeItem">
                    <i className="fas fa-trash-alt remove"></i>
                </div>

            </div>
            <hr />
        </>
    )
}

export default Items