import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Col, Form, Image, Input, message, Row } from 'antd'
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
          isLoggedIn: true,
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
        message.error(authData.msg || 'something went wrong')
        setLoading(false)
      }
    } catch (error) {
      message.error(err.toString() || 'something went wrong')
      setLoading(false)
      console.log(error)
    }
  }
  return (
    <div>
      <Row className="login-container">
        <Col
          span={17}
          style={{ display: 'flex', alignItems: 'center', padding: '4rem' }}
        >
          <div
            style={{
              padding: '0px 4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            {
              <Image
                src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/login-v2.2198399d.svg"
                preview={false}
              />
            }
          </div>
        </Col>
        <Col
          span={7}
          style={{
            padding: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF'
          }}
        >
          <div style={{ width: '100%' }}>
            <h2
              style={{
                marginBottom: '1rem',
                color: '#5e5873',
                fontSize: '1.714rem'
              }}
            >
              Welcome to Quizzer 👋
            </h2>
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
              Please sign-in to your account and start the adventure
            </p>
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
                  size="large"
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
                  size="large"
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
                  size="large"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Login
