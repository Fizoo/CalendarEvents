import React, {FC, useEffect} from 'react';

import {Layout} from "antd";
import './App.css';
import {IUser} from "./model/IUser";
import {Navbar} from "./component/Navbar";
import {AppRouter} from "./component/AppRouter";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "./store/redusers/auth/actions";


const App:FC = () => {
    const dispatch =useDispatch()
   // const {setUser, setIsAuth} = useActions();

    useEffect(() => {
        if(localStorage.getItem('auth')) {
           dispatch(AuthActionCreators.setUser({username: localStorage.getItem('username' || '')} as IUser))
            dispatch(AuthActionCreators.setIsAuth(true))
        }
    }, [])

    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
};

export default App;
