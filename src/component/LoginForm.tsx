import React, {FC, useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch, useSelector} from "react-redux";

import {AppStateType} from "../store";
import {AuthActionCreators} from "../store/redusers/auth/actions";



export const LoginForm:FC = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const error=useSelector((state:AppStateType)=>state.auth.error)
    const dispatch=useDispatch()
    function submit() {
       dispatch(AuthActionCreators.login(name,password))
    }

    console.log(name)
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={submit}
            //onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {
                error && <div style={{ color:'red'}}>
                    {error}
                </div>
            }
            <Form.Item
                label="Username"
                name="username"

                rules={[rules.required('Please input your login!')]}
            >
                <Input value={name}  onChange={(e)=>setName(e.currentTarget.value)}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required( 'Please input your password!' )]}
            >
                <Input.Password  onChange={e=>setPassword(e.currentTarget.value)}/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

