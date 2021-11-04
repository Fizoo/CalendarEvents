import React, {FC} from 'react';
import {Card, Layout, Menu, Row} from "antd";
import {Header} from "antd/es/layout/layout";
import {LoginForm} from "../component/LoginForm";

const Login:FC = () => {
    return (
        <Layout>
            <Row justify='center' align='middle' className='h100' >
                <Card>
                    <LoginForm/>
                </Card>

            </Row>

        </Layout>
    );
};

export default Login;
