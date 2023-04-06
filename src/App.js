import React from "react";
import "./App.css";
//import { BrowserRouter as Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Reservation from "./pages/Reservation";
import Membership from "./pages/Membership";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Sign from "./pages/Sign";
import AdminDashboard from "./pages/AdminDashboard";
import Trainer from "./pages/Trainer";

function App() {
  return (
    <div className="App">      
      <Navbar/>
      <Switch>
<Route exact path="/" component={Home}></Route>
<Route exact path="/about" component={AboutUs}></Route>
<Route exact path="/reservation" component={Reservation}></Route>
<Route exact path="/membership" component={Membership}></Route>
<Route exact path="/contact" component={ContactUs}></Route>
<Route exact path="/sign" component={Sign}></Route>
<Route exact path="/admin" component={AdminDashboard}></Route>
<Route exact path="/trainer" component={Trainer}></Route>

      </Switch>
      <Footer/>    
    </div>
    
  );
}
export default App;
