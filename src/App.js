import React ,{useState}from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Reservation from "./pages/Reservation";
import Membership from "./pages/Membership";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Sign from "./pages/Sign";
import Trainer from "./pages/TrainerLogin";
import Register from "./pages/TrainerRegister";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import UserDetails from "./pages/UserProfile";
import TrainerDetails from "./pages/TrainerDetails";

function App() {
  //const [trainerId, setTrainerId] = useState(null);
  const location = useLocation();
 

  const isNavbarVisible =
    location.pathname !== "/trainerDashboard" &&
    location.pathname !== "/userSign" &&
    location.pathname !== "/sign" &&
    location.pathname !== "/adminDashboard" &&
    location.pathname !== "/userDetails" &&
    location.pathname !== "/trainer-details" &&
    location.pathname !== "/register" &&
    location.pathname !== "/trainer" &&
    location.pathname !== "/Dashboard";
  const isFooterVisible =
    location.pathname !== "/trainerDashboard" &&
    location.pathname !== "/userSign" &&
    location.pathname !== "/sign" &&
    location.pathname !== "/userDetails" &&
    location.pathname !== "/trainer-details" &&
    location.pathname !== "/register" &&
    location.pathname !== "/trainer" &&
    location.pathname !== "/adminDashboard";

  return (
    
    <div className="App">
      {isNavbarVisible && <Navbar />}
      
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={AboutUs}></Route>
        <Route exact path="/reservation" component={Reservation}></Route>
        <Route exact path="/membership" component={Membership}></Route>
        <Route exact path="/contact" component={ContactUs}></Route>
        <Route exact path="/sign" component={Sign}></Route>
        <Route exact path="/trainer" component={Trainer}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/adminRegister" component={AdminRegister}></Route>
        <Route exact path="/adminLogin" component={AdminLogin}></Route>
        <Route exact path="/userDetails" component={UserDetails}></Route>
        <Route exact path="/trainer-details" component={TrainerDetails}></Route>
        <Route exact path="/trainerDashboard" component={TrainerDetails}></Route>


      
      </Switch>
      {isFooterVisible && <Footer />}
    </div>
    
  );
  
}
export default App;
