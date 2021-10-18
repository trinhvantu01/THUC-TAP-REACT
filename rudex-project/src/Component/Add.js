import React from 'react'

export const Add = () => {

   
    return (
        <div>
           <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control"  placeholder="Enter Name" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="email" className="form-control"  placeholder="Enter Email" />
  </div>
  
  <button type="submit" className="btn btn-primary">Save</button>
</form>

            
        </div>
    )
}

export default Add ;