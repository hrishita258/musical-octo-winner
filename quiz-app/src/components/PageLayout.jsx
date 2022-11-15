import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Skeleton } from 'antd'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'
const { Header, Content } = Layout

const PageLayout = ({ children, breadcrumbs, loading }) => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <Layout style={{ backgroundColor: '#fafafa' }}>
      <Sidebar collapsed={collapsed} />
      <Layout
        style={{
          paddingTop: '72px',
          background: '#fafafa'
        }}
      >
        <Header
          style={{
            padding: 0,
            position: 'fixed',
            display: 'flex',
            height: '72px',
            top: 0,
            right: 0,
            width: collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)',
            zIndex: 29,
            alignItems: 'center',
            backgroundColor: '#FFF',
            justifyContent: 'space-between',
            boxShadow: '4px 4px 40px 0 rgb(0 0 0 / 5%)',
            transition: 'width .2s'
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              textAlign: 'center'
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed)
              }
            )}
          </div>
        </Header>
        <Content
          style={{
            margin: '12px 12px 0px',
            padding: '10px 12px 0px 12px',
            paddingTop: 8,
            minHeight: 258,
            marginLeft: collapsed ? '90px' : '210px'
          }}
        >
          {' '}
          <Breadcrumb separator=">" style={{ marginBottom: 20 }}>
            {breadcrumbs.map((b, i) => (
              <Breadcrumb.Item key={i} onClick={() => console.log(b.link)}>
                {b.link ? (
                  <NavLink to={b.link.route}>{b.name}</NavLink>
                ) : (
                  b.name
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          {loading ? <Skeleton active /> : children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default PageLayout
