import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch ,Route, Redirect} from 'react-router';
import Home from "./Home";
import Service from "./Services";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from './Footer';
import Sinup from "./Sinup";
import Login from './Login';
import ErrorPage from './ErrorPage';
import User from './User';
import Health from './Health';
import Life from './Life';
import Cal from './Cal';

const App =() => {
   return (
     <>
     <Navbar />
    
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/service" component={Service}/>
         <Route exact path="/Contact" component={Contact}/>
         <Route exact path="/Sinup" component={Sinup}/>
         <Route exact path="/Login" component={Login}/>
         <Route exact path="/User" component={User}/>
         <Route exact path="/Health" component={Health}/>
         <Route exact path="/Life" component={Life}/>
         <Route exact path="/Cal" component={Cal}/>
         <Route>
           <ErrorPage/>
           </Route>
         <Redirect to ="/" />
         <Home />
      </Switch>
      <Footer/>
     </>
   )
}

export default App;