import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import { useHistory } from 'react-router-dom';
import {RouteNames} from "../router";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import {AuthActionCreators} from "../store/redusers/auth/actions";


export const Navbar: FC = () => {
    const history =useHistory()
    const dispatch=useDispatch()
    const {isAuth,user}=useSelector((state:AppStateType)=>state.auth)
    return (
        <Layout.Header>
            <Row justify='end'>
                {
                    isAuth ? <>
                            <div style={{color: 'white'}}>
                                {user.username}
                            </div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>

                                <Menu.Item key={1} onClick={()=>dispatch(AuthActionCreators.logout())}>
                                    Exit
                                </Menu.Item>
                            </Menu>
                        </>
                        :
                        <div style={{color: 'white'}} onClick={()=>{history.push(RouteNames.LOGIN)}}>
                            Login
                        </div>
                }
            </Row>
        </Layout.Header>
    );
};


