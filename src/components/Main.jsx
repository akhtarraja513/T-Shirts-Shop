import React, { useEffect, useState } from 'react'
import Aside from './Aside';
import MainItem from './MainItem';
import Searchbar from './Searchbar';

const Main = () => {
  const [product, setProduct] = useState([]);

  const handleAPI = () => {
    return fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
    .then((res) => res.json())
    .then(data => setProduct(data))
  }

  useEffect(() => {
    handleAPI();
  },[])
  return (
    <>
      <div className="mainContainer">
        <Searchbar/>
       
        <main className='mainProductContainer'>
          {
            product.map((curEle) => {
              return <MainItem key={curEle.id} {...curEle}/>
            })
          }
        </main>
      </div>
    </>
  )
}

export default Main;