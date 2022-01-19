import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import RoutesPrivate from  "./components/Routes/Private/Private";
import PagesLogin from './pages/Login/Login'
import StoreProvider from './components/Store/Provider'
import Home from "./pages/Home";


const Router = () => {
    return (
        <BrowserRouter>
        <StoreProvider>
            <Switch>
              <Route component={PagesLogin}  path="/login" />
              <RoutesPrivate component={Home}  path="/"   />
            </Switch>
        </StoreProvider>
        </BrowserRouter>
    )
}

export default Router;