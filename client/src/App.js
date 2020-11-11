import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routs";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import 'react-hooks-lib'
//import 'materialize-css'
import 'react-bootstrap'


function App() {
    const {token, login, logout, userId } =useAuth()
    const isAuthenticated = !!token //пределение относится ли пользователь к системе или нет по наласаи токена
    const routes = useRoutes(isAuthenticated)
    return(
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
        <Router>
            {isAuthenticated && <Navbar/>}
        <div className="container">
            {routes}
        </div>
            {isAuthenticated && <Footer/>}
        </Router>
        </AuthContext.Provider>
    )
}

export default App