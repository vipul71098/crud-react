import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory,useParams ,Link} from "react-router-dom";

const ViewUser  = () => {
 const {id} = useParams();

 	const [user,setUser] = useState({
		name:"",
		username:"",
		email:"",
		number:"",
		website:""
	})
	
	const intialLoad = (e) => {
		axios.get( `http://localhost:3003/users/${id}`)
    .then((response) => {setUser(response.data)})
    .catch((err) => {console.log(err)})
	};
  useEffect(() => {
    intialLoad()
  }, [])
	return(
		<div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.number}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul>
      </div>
	)
}

export default ViewUser;                                       