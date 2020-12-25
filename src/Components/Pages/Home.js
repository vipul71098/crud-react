import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Home  = () => {
	const [users,setUser] = useState([]);


  
  
	useEffect(() => {
		onloadData();
	},[])
	const onloadData =  async () => {
		 await axios.get('http://localhost:3003/users')
		 .then((response) => {setUser(response.data.reverse())})
		 .catch((err) => {console.log(err)})
	}

	const deleteuser = (id) => {
		 axios.delete(`http://localhost:3003/users/${id}`)
		 .then((response) => {onloadData()})
		 .catch((err) => {console.log(err)})
	}

	  
	return(
		<div>
			<table className="table  table-striped">
  <thead>
    <tr >
      <th className="table-dark" scope="col">ID</th>
      <th  className="table-dark" scope="col">Name</th>
      <th className="table-dark" scope="col">Company</th>
      <th  className="table-dark" scope='col'>Email</th>
      <th  className="table-dark" scope='col'></th>
    </tr>
  </thead>
  <tbody>
    {
    	users((user,index) => (
    	 <tr>
    	 <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
    	 
    	 <td>
    	 	
  				
                  <Link class="btn btn-primary mr-2" exact to={`/users/view/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    exact to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger" onClick ={() => deleteuser(user.id)}
                    
                  >
                    Delete
                  </Link>
		
    	 </td>
    	 </tr>
    	))

    }
    </tbody>
  
</table>
      
		</div>
	)
}

export default Home;                                       