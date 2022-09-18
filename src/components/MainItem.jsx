import React from 'react'

const MainItem = ({imageURL, price }) => {
  return (
    
    <>
        <div className="productDiv">
            <img src={imageURL} alt='Not Found' className="image" />
            <div className="priceItem">
              <h4>{price}</h4>
              <button>Add to cart</button>
            </div>
          </div>
    </>
  )
}

export default MainItem;