import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";
import {UniversitiesPage} from "./pages/UniversitiesPage";
import {PersonalPage} from "./pages/PersonalPage";

///экспор функции, принимает параметр (флаг, говорящий зарегестрирован ли пользователь в системе и какие роуты ему возвращать
export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/universities" exact>
                    <UniversitiesPage/>
                </Route>
                <Route path="/personal" exact>
                    <PersonalPage/>
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}