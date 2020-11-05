import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routs";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import 'react-hooks-lib'
import 'materialize-css'

function App() {
    const {token, login, logout, userId } =useAuth()
    const isAuthenticated = !!token //пределение относится ли пользователь к системе или нет по наласаи токена
    const routes = useRoutes(isAuthenticated)
    return(
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
        <Router>
        <div className="container">
            {routes}
        </div>
        </Router>
        </AuthContext.Provider>
    )
}

export default App