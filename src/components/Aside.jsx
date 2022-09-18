import React from 'react'

const Aside = () => {
  return (
    <>
      <aside className="asideContainer">
        <form className="asideItem">
          <h4>Colors</h4>
          <div className="checkItem">
            <input type="checkbox" name='red' /> Red <br />
            <input type="checkbox" name='blue' /> Blue <br />
            <input type="checkbox" name='green' /> Green <br />
          </div>
        </form>

        <form className="asideItem">
          <h4>Gender</h4>
          <div className="checkItem">
            <input type="checkbox" name='men' /> Men <br />
            <input type="checkbox" name='women' /> Women <br />
          </div>
        </form>

        <form className="asideItem">
          <h4>Price</h4>
          <div className="checkItem">
            <input type="checkbox" /> 0-Rs250 <br />
            <input type="checkbox" /> Rs251-450 <br />
            <input type="checkbox" /> Rs450 <br />
          </div>
        </form>

        <form className="asideItem">
          <h4>Type</h4>
          <div className="checkItem">
            <input type="checkbox" name='polo' /> Polo <br />
            <input type="checkbox" name='hoodie' /> Hoodie <br />
            <input type="checkbox" name='basic' /> Basic <br />
          </div>
        </form>
      </aside>
    </>
  )
}

export default Aside;