import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export enum RouteNames{
    LOGIN='/login',
    EVENT='/'
}

export const publicRoutes:IRoute[]=[
    {
        path:RouteNames.EVENT,
        component:Login, 
        exact:true
    }
]


export const privateRoutes:IRoute[]=[
    {
        path:RouteNames.LOGIN,
        component:Event,
        exact:true
    }
]

export interface IRoute {
    path:RouteNames
    component:React.ComponentType
    exact?:boolean
}