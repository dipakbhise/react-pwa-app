import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Serviceone from "./Pages/Serviceone";
import Servicetwo from "./Pages/Servicetwo";
import Users from "./Pages/Users";


function App() {
  return (
    <div className="App">
    <Router>

    <Navbar/>

    <Switch>

    <Route exact path="/react-pwa-app"><Home/></Route> 
    <Route exact path="/products"><Product/></Route>
    <Route exact path="/serviceone"><Serviceone/></Route>
    <Route exact path="/servicetwo"><Servicetwo/></Route>
    <Route exact path="/users"><Users/></Route>
    
    

    </Switch>

    <Footer/>

    </Router>
      
    </div>
  );
}

export default App;
