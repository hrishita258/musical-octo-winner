import { Avatar, Button, Card, message, Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DropOptions from '../components/DropOptions'
import PageLayout from '../components/PageLayout'
const Users = () => {
  const [usersData, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'name',
      key: 'avatar',
      width: '4%',
      fixed: 'left',
      align: 'center',
      render: text => (
        <Avatar
          style={{ marginLeft: 8, backgroundColor: '#f56a00', color: '#fff' }}
        >
          {text[1].toLocaleUpperCase()}
        </Avatar>
      )
    },

    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
      width: 170
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 200
    },

    {
      title: 'College',
      dataIndex: 'College',
      key: 'College',
      render: col => col.name,
      width: 180,
      onFilter: (value, record) => record.name.indexOf(value) === 0
    },
    {
      title: 'Semester',
      dataIndex: 'semester',
      key: 'semester',
      render: col => (col ? <Tag color="magenta">{col}</Tag> : '-'),
      width: 70,
      align: 'center'
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: 70,
      align: 'center',
      filters: [
        { text: 'spoc', value: 'spoc' },
        { text: 'student', value: 'student' },
        { text: 'faculty', value: 'faculty' }
      ],
      onFilter: (value, record) => record.role.indexOf(value) === 0
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: 70,
      align: 'center',
      filters: [
        { text: 'Male', value: 'Male' },
        { text: 'Female', value: 'Female' }
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      key: 'isActive',
      width: 70,
      align: 'center',
      render: col =>
        col ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Deactivate</Tag>
        )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Link to={`/users/${record.id}`}>
            <a href="#">View</a>
          </Link>
          <DropOptions
            items={[
              {
                label: 'edit',
                key: '1'
              },
              {
                label: 'delete',
                key: '2'
              }
            ]}
          />
        </div>
      ),
      width: '6%',
      fixed: 'right'
    }
  ]

  const BREADCRUMBS = [
    {
      name: 'Home',
      link: {
        route: '/',
        key: 1
      }
    },
    {
      name: 'Users'
    }
  ]

  useEffect(() => {
    fetch('http://localhost:4000/admin/users')
      .then(res => res.json())
      .then(response => {
        if (response.status === 200) {
          console.log(response.result)
          setUsers(response.result)
          console.log(response.result)
          setLoading(false)
        }
      })
      .catch(err => {
        setLoading(false)
        message.error('internal server error please try agin later')
      })
  }, [])

  const hasSelected = selectedRowKeys.length > 0

  return (
    <PageLayout breadcrumbs={BREADCRUMBS}>
      <Card>
        <div
          style={{
            marginBottom: 16
          }}
        >
          <Button type="primary" disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span
            style={{
              marginLeft: 8
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table
          style={{ fontSize: '12px' }}
          size="small"
          bordered
          rowSelection={{ onChange: e => setSelectedRowKeys(e) }}
          scroll={{ x: 1400 }}
          rowKey={record => record.id}
          columns={columns}
          loading={loading}
          dataSource={usersData?.map((row, index) => {
            return {
              key: index,
              ...row
            }
          })}
        />
      </Card>
    </PageLayout>
  )
}
export default Users
