//React Core
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import HomePage from "./components/templates/HomePage";
import TrackingPage from "./components/templates/TrackingPage";
import CustomerPage from "./components/templates/CustomerPage";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import "./css/style.css";

export default function App() {
  const [information, setInformation] = useState([]);
  const endPoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect(() => {  
    getData();
  }, []);

  const getData = async () => {  
  try{
    const response = await fetch(endPoint,{mode:"cors"});  
      const data = await response.json();     
      setInformation(data); 
      console.log(information);
  }catch{
    console.log("Error while fetching API");
  }
};


return (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/Customer/:parameter"
          render={({ match }) => (
            <CustomerPage parameter={match.params.parameter} information={information} />
          )}
        />
        <Route path="/Result/:parameter"
          render={({ match }) => (
            <TrackingPage parameter={match.params.parameter} information={information} />
          )}
        />
       
      </Switch>
      <Footer/>
    </div>
  </Router>
);
}


