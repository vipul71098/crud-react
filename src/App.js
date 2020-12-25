import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';
import AddUsers from './Components/Users/AddUsers';
import EditUser from './Components/Users/EditUser';
import ViewUser from './Components/Users/ViewUser';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
   <Router>
   	<Navbar />
   		<Switch>
   			<Route exact path='/' component={Home} />
   			<Route exact path='/about' component={About} />
   			<Route exact path='/contact' component={Contact} />
   			<Route exact path='/users/add' component={AddUsers} />
   			<Route exact path='/users/edit/:id' component={EditUser} />
   			<Route exact path='/users/view/:id' component={ViewUser} />
   		</Switch>
   </Router>

  );
}

export default App;
