import { CheckCircleTwoTone, GlobalOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Col, Rate, Row, Space, Spin, Tag } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { FaLinkedinIn, FaSlackHash, FaTelegramPlane } from 'react-icons/fa'
import { GrInstagram, GrMedium } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import { ImFacebook } from 'react-icons/im'
import { IoLogoTwitter } from 'react-icons/io'
import { SiDiscord } from 'react-icons/si'
import { getRequest } from '../../axios/axiosMethods'
import DevfolioHackathonDetailsDrawer from './Components/DevfolioHackathonDetailsDrawer'

const Devfolio = () => {
  const [hackathons, setHackathons] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDevFolioHackathonId, setSelectedDevFolioHackathonId] =
    useState(null)

  const socialLinks = [
    { name: 'facebook', icon: <ImFacebook />, color: '#1778F2' },
    { name: 'telegram', icon: <FaTelegramPlane />, color: '#0088cc' },
    { name: 'medium', icon: <GrMedium />, color: '#66cdaa' },
    { name: 'discord', icon: <SiDiscord />, color: '#7289da' },
    { name: 'contact_email', icon: <HiOutlineMail />, color: '#00ab6c' },
    { name: 'instagram', icon: <GrInstagram />, color: '#e1306c' },
    { name: 'twitter', icon: <IoLogoTwitter />, color: '#00acee' },
    { name: 'linkedin', icon: <FaLinkedinIn />, color: '#0e76a8' },
    { name: 'slack', icon: <FaSlackHash />, color: '#4a154b' },
    { name: 'site', icon: <GlobalOutlined />, color: '#00ab6c' }
  ]

  useEffect(() => {
    getRequest('opportunity/hackathons/devfolio')
      .then(res => {
        if (res.status === 200) {
          if (res.data.status === 200) {
            setHackathons(JSON.parse(res.data.result))
            setLoading(false)
          }
        }
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }, [])

  if (loading)
    return (
      <div
        key={'loader'}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 15rem)'
        }}
      >
        <Space>
          <Spin size="large" key={'spin'} />
        </Space>
      </div>
    )

  return (
    <div style={{ margin: '0px 3rem' }} key="devfolio">
      <Row gutter={25}>
        {hackathons?.hits?.hits?.map(hackathon => (
          <Col key={hackathon._source.uuid} span={12}>
            <Card>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10
                }}
              >
                <div>
                  <h3 style={{ fontSize: '20px' }}>
                    {hackathon._source.devfolio_official ? (
                      <CheckCircleTwoTone
                        style={{ fontSize: 20, marginRight: 10 }}
                      />
                    ) : null}
                    {hackathon._source.name}
                  </h3>
                  <h4
                    style={{
                      color: 'rgb(142, 152, 156)',
                      fontWeight: 400,
                      letterSpacing: '0.03em',
                      fontSize: '14px',
                      lineHeight: '16px'
                    }}
                  >
                    {hackathon._source.type.charAt(0).toUpperCase() +
                      hackathon._source.type.slice(1).toLowerCase()}
                    {hackathon._source.rating ? (
                      <Rate
                        style={{
                          marginLeft: 10
                        }}
                        size="small"
                        allowHalf
                        disabled
                        defaultValue={hackathon._source.rating}
                      />
                    ) : null}
                  </h4>
                </div>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 8,
                      fontSize: 25,
                      color: '#ef78b9',
                      marginTop: 10
                    }}
                  >
                    {Object.keys(hackathon._source.hackathon_setting).map(key =>
                      hackathon._source.hackathon_setting[key] !== null &&
                      ['site', 'instagram', 'twitter'].includes(key) ? (
                        <a
                          href={hackathon._source.hackathon_setting[key]}
                          className="devfolio-social-links"
                          key={key}
                          target="_blank"
                        >
                          {socialLinks.find(l => l.name === key)?.icon}
                        </a>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <p
                    style={{
                      color: 'rgb(142, 152, 156)',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      fontSize: '12px'
                    }}
                  >
                    THEME
                  </p>

                  {hackathon._source.themes.length ? (
                    hackathon._source.themes?.map(theme => (
                      <Tag color="green" key={theme.uuid}>
                        {theme.name}
                      </Tag>
                    ))
                  ) : (
                    <Tag color="blue">No Restrictions</Tag>
                  )}
                </div>
                <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
                  <Avatar.Group>
                    {hackathon._source.participants_details?.map(
                      participant => (
                        <Avatar
                          key={participant.uuid}
                          src={participant.profile_image}
                        />
                      )
                    )}
                  </Avatar.Group>
                  <span
                    style={{
                      color: 'rgb(15, 163, 141)',
                      fontSize: '18px',
                      fontWeight: 600,
                      lineHeight: '24px'
                    }}
                  >
                    + {hackathon._source.participants_count - 3} Participating
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  marginTop: 25,
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 19 }}>
                  <div
                    style={{
                      backgroundColor: ' rgb(245, 247, 247)',
                      padding: '16px',
                      borderRadius: '16px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <p
                      style={{
                        color: 'rgb(56, 71, 78)',
                        fontWeight: 700,
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '0.12em',
                        margin: 0
                      }}
                    >
                      {' '}
                      {hackathon._source.location ? 'ONLINE' : 'OFFLINE'}
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: ' rgb(245, 247, 247)',
                      padding: '16px',
                      borderRadius: '16px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <p
                      style={{
                        color: 'rgb(56, 71, 78)',
                        fontWeight: 700,
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '0.12em',
                        margin: 0
                      }}
                    >
                      {' '}
                      {hackathon._source.is_private ? 'PRIVATE' : 'OPEN'}
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: ' rgb(245, 247, 247)',
                      padding: '16px',
                      borderRadius: '16px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <p
                      style={{
                        color: 'rgb(56, 71, 78)',
                        fontWeight: 700,
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '0.12em',
                        margin: 0
                      }}
                    >
                      {new Date(hackathon._source.starts_at) >
                      new Date(Date.now())
                        ? (
                            'starts ' +
                            moment(hackathon._source.starts_at).fromNow()
                          ).toUpperCase()
                        : 'ONGOING'}
                    </p>
                  </div>
                </div>
                <Button
                  type="primary"
                  size="large"
                  onClick={() =>
                    setSelectedDevFolioHackathonId(hackathon._source.uuid)
                  }
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <DevfolioHackathonDetailsDrawer
        hackathon={hackathons.hits.hits.find(
          hackathon => hackathon._source.uuid === selectedDevFolioHackathonId
        )}
        open={selectedDevFolioHackathonId !== null ? true : false}
        setSelectedDevFolioHackathonId={setSelectedDevFolioHackathonId}
        socialLinks={socialLinks}
      />
    </div>
  )
}

export default Devfolio
