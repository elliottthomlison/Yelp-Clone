import React from 'react'

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form action="">
          <div className="form-row">
            <div className="col">
              <input className="form-control"  type="text" placeholder="name"/>
            </div>
            <div className="col">
              <input className="form-control" type="text" placeholder="location"/>
              <select className="custom-select my-1 mr-sm-2"></select>
            </div>
          </div>
      </form>
    </div>
  )
}

export default AddRestaurant;
