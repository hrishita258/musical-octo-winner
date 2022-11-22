import { Card, Col, Row, Statistic } from 'antd'
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
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                value={11.28}
                title={
                  <span
                    style={{
                      fontSize: '1.3rem',
                      alignSelf: 'center'
                    }}
                  >
                    Active
                  </span>
                }
                precision={2}
                valueStyle={{
                  fontSize: '2rem'
                }}
                prefix={
                  <span
                    style={{
                      color: 'rgb(100, 234, 145)',
                      fontSize: '54px',
                      marginRight: '15px'
                    }}
                  >
                    <span
                      role="img"
                      aria-label="pay-circle"
                      className="anticon anticon-pay-circle"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="pay-circle"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm159.6-585h-59.5c-3 0-5.8 1.7-7.1 4.4l-90.6 180H511l-90.6-180a8 8 0 00-7.1-4.4h-60.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9L457 515.7h-61.4c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V603h-81.7c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V717c0 4.4 3.6 8 8 8h54.3c4.4 0 8-3.6 8-8v-68.1h82c4.4 0 8-3.6 8-8V611c0-4.4-3.6-8-8-8h-82v-41.5h82c4.4 0 8-3.6 8-8v-29.9c0-4.4-3.6-8-8-8h-62l111.1-204.8c.6-1.2 1-2.5 1-3.8-.1-4.4-3.7-8-8.1-8z"></path>
                      </svg>
                    </span>
                  </span>
                }
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                value={11.28}
                title={
                  <span
                    style={{
                      fontSize: '1.3rem',
                      alignSelf: 'center'
                    }}
                  >
                    Active
                  </span>
                }
                precision={2}
                valueStyle={{
                  fontSize: '2rem'
                }}
                prefix={
                  <span
                    style={{
                      color: 'rgb(216, 151, 235)',
                      fontSize: '54px',
                      marginRight: '15px'
                    }}
                  >
                    <span role="img" aria-label="message">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="message"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
                      </svg>
                    </span>
                  </span>
                }
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}

export default Dashboard
