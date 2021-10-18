import React from 'react'
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
export const Add = () => {

  const{ register, handleSubmit} = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data)=>{
    const newData = {
      id: Math.random().toString(5),
      ...data,

    };
    console.log(newData);
    // dispatch(addUser(newData));
  }

   
    return (
        <div>
           <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" {...register("name")} className="form-control"  placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="text" {...register("email")} className="form-control"  placeholder="Enter Email" />
            </div>
            
            <button type="submit" className="btn btn-primary">Save</button>
          </form>            
        </div>
    )
}

export default Add ;