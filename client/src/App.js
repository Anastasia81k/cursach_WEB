import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import 'materialize-css'
import {useRouts} from "./routs";

function App() {
    const routes = useRouts(false)
    return(
        <Router>
        <div className="container">
            {routes}
        </div>
        </Router>
    )
}

export default App