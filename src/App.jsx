import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/organisms/Footer";

// Components
import HomePage from "./components/templates/HomePage";
import ResultPage from "./components/templates/ResultPage";


// Other imports
import "./css/style.css";
import information from "./information.json";


export default function App() {
  const [information, setInformation] = useState([]);
  
  useEffect(() => {
    getData();
},[]);
  

  const getData = async () => {
      const response = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840',{mode:"cors"});

        // Once the information is downloaded we transformed it to json
        const data = await response.json();

        // Once the information is transformed to json we put it into our hooks
        setInformation(data);
        console.log(data);
  }

  return (
    <Router>
    <div className= "App">
      <Switch>
       <Route
        path="/"
        exact
        render={() => <HomePage information={information} />}
      />
      
      <Route
        path="/results/"
        render={({ match }) => (

          <ResultPage match={match}  information={information} />
        )}
      />
    </Switch>
    <Footer />
  </div>
</Router>
  );
}


  
        
      


   
  

