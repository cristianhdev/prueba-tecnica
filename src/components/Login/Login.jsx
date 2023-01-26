import React, { useState } from 'react'
import { Col, Row, Input, Form, Button } from 'antd';
import { useForm } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const [stateLogin, setStateLogin] = useState();

    const { username, password, onInputChange, onResetForm } = useForm({
        username: '',
        password: ''
    })

    const getUserLogin = async (username, password) => {

        try {
            const data = await fetch('https://sandbox-internal-api.conectame.com.co/flow/auth/getToken', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Autorization': 'Basic ' + btoa(username + ":" + password)
                }
            },)
            const response = await data.json()

            setStateLogin(response)
        } catch (error) {
            throw new Error(error)
        }


    }



    const onLogin = (event) => {
        event.preventDefault()
        getUserLogin(username, password)
        console.log(stateLogin)

        /* if (token) {
            navigate('/', {
                replace: true
            })
        } */
    }

    return (
        <>
            <Row justify="space-around" align="middle">
                <Col>
                    <div className="contenedor">
                        <Form
                            name="basic" autoComplete="off">
                            <Form.Item
                                label="Username"


                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input name="username" value={username}
                                    onChange={onInputChange} size="large" placeholder="Basic usage" />
                            </Form.Item>
                            <Form.Item
                                label="Password"

                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input name="password"
                                    value={password}
                                    onChange={onInputChange} size="large" placeholder="Basic usage" />
                            </Form.Item>
                            <Form.Item>
                                <Button onClick={onLogin} type="primary" htmlType="submit" className="login-form-button">
                                    INGRESAR
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Login
