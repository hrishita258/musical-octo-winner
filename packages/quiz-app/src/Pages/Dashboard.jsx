import { Avatar, Button, Card, Image } from 'antd'
import React from 'react'
import PageLayout from '../components/PageLayout'

const Dashboard = () => {
  const BREADCRUMBS = [
    {
      name: 'Home',
      link: {
        route: '/',
        key: 1
      }
    }
  ]

  return (
    <PageLayout breadcrumbs={BREADCRUMBS}>
      <div>
        <Card
          style={{
            background:
              'url(https://static.vecteezy.com/system/resources/previews/001/987/747/original/abstract-white-and-blue-gradient-triangles-overlapping-background-free-vector.jpg)',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  padding: 5,
                  background: '#FFF',
                  border: '1px solid lightgray',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Avatar
                  size={110}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GJoRJ64Qv4yF1e1CWg3LgtyCs-hG5-_Uiw&usqp=CAU"
                />
              </div>
              <div style={{ marginLeft: 20, color: 'black' }}>
                <h1 style={{ fontSize: '1.5rem' }}>Welcome, John Doe</h1>
                <p style={{ margin: 0, fontSize: '1rem' }}>
                  <span>Semester</span>
                  <strong style={{ marginLeft: 12 }}>8</strong>
                </p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}
            >
              <Image
                height={100}
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/62cfb2da5f01e_noto_trophy.svg"
              />
              <div>
                <h1 style={{ fontSize: '1.3rem', color: '#FFF' }}>Points</h1>
                <Button type="primary">View Leaderboard</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  )
}

export default Dashboard
