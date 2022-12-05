import { Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { getRequest } from '../axios/axiosMethods'
import Devfolio from '../components/Hackathons/Devfolio'
import DevPost from '../components/Hackathons/DevPost'
import Unstop from '../components/Hackathons/Unstop'
import PageLayout from '../components/PageLayout'

const Hackathons = () => {
  const [page, setPage] = useState(() => 1)
  const [devpostHackathons, setDevpostHackathons] = useState(() => [])
  const [activeTab, setActiveTab] = useState(() => 'devpost')
  const [loading, setLoading] = useState(() => true)

  const BREADCRUMBS = [
    {
      name: 'Home',
      link: {
        route: '/',
        key: 1
      }
    },
    {
      name: 'Hackathons'
    }
  ]

  useEffect(() => {
    getRequest('opportunity/hackathons/devpost?page=' + page).then(res => {
      const { result } = res.data
      if (res.status === 200)
        if (res.data.status === 200) {
          setDevpostHackathons([
            ...devpostHackathons,
            ...JSON.parse(result)?.hackathons
          ])
          setLoading(false)
        }
    })
  }, [page])

  useEffect(() => {
    document.title = activeTab
  }, [activeTab])

  return (
    <PageLayout breadcrumbs={BREADCRUMBS} loading={loading} noStyle>
      <div
        style={{
          backgroundColor: '#003e54',
          padding: '1rem'
        }}
      >
        <div style={{ maxWidth: '75rem', width: '100%', margin: '0px auto' }}>
          <h1
            style={{ fontSize: '2.25rem', color: '#FFF', textAlign: 'center' }}
          >
            Join the world's best online and in-person hackathons
          </h1>
        </div>
      </div>
      <div style={{ margin: '0px 2rem' }}>
        <Tabs
          defaultActiveKey="devpost"
          size="large"
          onChange={e => {
            setActiveTab(e)
          }}
          items={[
            {
              label: 'Devpost',
              key: 'devpost',
              children: (
                <DevPost hackathons={devpostHackathons} page={setPage} />
              )
            },
            {
              label: 'Devfolio',
              key: 'devfolio',
              children: <Devfolio />
            },
            {
              label: 'Unstop',
              key: 'unstop',
              children: <Unstop />
            },
            {
              label: 'HackerEarth',
              key: 'hackerearth',
              children: `Content of Tab Pane 4`
            },
            {
              label: 'Major League Hacking',
              key: 'mlh',
              children: `Content of Tab Pane 5`
            }
          ]}
        />
      </div>
    </PageLayout>
  )
}

export default Hackathons
