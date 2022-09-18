import React from 'react'
import Aside from '../components/Aside';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar/>
        <div className="mainHome">
          <Aside/>
          <Main/>
        </div>
      </div>
    </>
  )
}

export default Home;