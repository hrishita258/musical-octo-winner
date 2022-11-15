import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useAppState } from '../../state/AppState'
const Login = () => {
  const { setAppState } = useAppState()
  const [loading, setLoading] = useState(false)

  const onFinish = async values => {
    setLoading(true)
    try {
      const loginPromise = await fetch('http://localhost:4000/auth/login', {
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      })
      const authData = await loginPromise.json()
      console.log(authData)
      if (authData.status === 200) {
        setLoading(false)
        const {
          userId,
          role,
          email,
          fullname,
          accessToken,
          refreshToken,
          issuedAt,
          expiresAt
        } = authData.result
        let obj = {
          loggedIn: true,
          userId,
          role,
          email,
          fullname,
          accessToken,
          profileImg: '',
          refreshToken,
          issuedAt,
          expiresAt: expiresAt * 1000
        }
        setAppState(obj)
        localStorage.setItem('quiz-appState', JSON.stringify(obj))
        return
      }
      if (authData.status === 401) {
        message.error('Invalid credentials')
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  return (
    <div className="login-container">
      <Card className="login-form">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Username!'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!'
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
