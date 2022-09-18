import React from 'react'

const Searchbar = () => {
  return (
    <>
        <div className="searchBar">
            <input type="search" placeholder='search for product' />
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
    </>
  )
}

export default Searchbar;