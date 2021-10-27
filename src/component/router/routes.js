import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

 import Nabar from "../navbar/navbar";
import Home from "../../screen/frontpage";
import Signup from "../form/signup";


function ReactRouter() {
    return (
        <Router>
            <Nabar/>
            <Switch>
                <Route exact path='/'>
              <Home/>
                </Route>
                <Route exact path='/Signup'>
                 <Signup/>
                </Route>
                
            </Switch>
        </Router>
    )
}

export default ReactRouter;