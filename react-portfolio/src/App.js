import React from 'react';
import Home  from "./components/home";
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const App = () => {



      return (
            <div>
                  <Router>
                        <div>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/Contact" component={ Contact } />
                        </div>
                  </Router>

        </div>
      );
}

export default App;
