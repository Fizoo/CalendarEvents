import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useSelector} from "react-redux";
import {AppStateType} from "../store";


export const AppRouter: FC = () => {
    const isAuth = useSelector((state:AppStateType)=>state.auth.isAuth)
    return (
        isAuth ?
            <Switch>
                {privateRoutes.map(el =>
                    <Route key={el.path}
                           component={el.component}
                           path={el.path}
                           exact={true}/>
                )}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(el =>
                    <Route key={el.path}
                           component={el.component}
                           path={el.path}
                           exact={true}/>)}
                <Redirect to={RouteNames.EVENT}/>
            </Switch>
    )


};


