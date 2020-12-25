import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
const AddUsers  = () => {

	let history = useHistory();
	const [user,setUser] = useState({
		name:"",
		username:"",
		email:"",
		number:"",
		website:""
	})
	const {name,username,email,number,website} = user;

	const inputLoad = (e) => {
		setUser({...user,[e.target.name]:[e.target.value]})
		console.log(user)
	};

	 const onSubmit =  e => {
    e.preventDefault();
     axios.post("http://localhost:3003/users", user)
     .then(() => history.push('/'))
     .catch(() => console.log("not submitted........"))
   
  };
	return(
		 <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form  onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              value = {name}
              name="name"
              onChange= {(e) => {inputLoad(e)}}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              value = {username}
              name="username"
              onChange= {(e) => {inputLoad(e)}}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              value={email}
              name="email"
              onChange= {(e) => {inputLoad(e)}}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              value={number}
              name="number"
              onChange= {(e) => {inputLoad(e)}}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              value={website}
              name="website"
              onChange= {(e) => {inputLoad(e)}}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
	)
}

export default AddUsers;                                       