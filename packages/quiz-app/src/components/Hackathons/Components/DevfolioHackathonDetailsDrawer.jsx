import {
  Card,
  Col,
  Collapse,
  Divider,
  Drawer,
  Empty,
  Image,
  Row,
  Tabs
} from 'antd'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const DevfolioHackathonDetailsDrawer = ({
  hackathon,
  open,
  setSelectedDevFolioHackathonId,
  socialLinks
}) => {
  console.log(hackathon)
  return (
    <Drawer
      open={open}
      size="large"
      closable={false}
      bodyStyle={{ padding: '0px' }}
      width={1200}
      onClose={() => setSelectedDevFolioHackathonId(null)}
    >
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '.8rem',
            background: hackathon?._source?.hackathon_setting?.primary_color
          }}
        >
          <Image
            width={250}
            preview={false}
            src={hackathon?._source?.hackathon_setting?.logo}
            alt="logo"
          />
          <h3 style={{ color: '#FFF', marginTop: 10, fontSize: 20 }}>
            {hackathon?._source?.tagline}
          </h3>
        </div>
        <div style={{ padding: '0px 2rem' }}>
          <Tabs
            defaultActiveKey="1"
            centered
            size="large"
            items={[
              {
                label: `Overview`,
                key: '1',
                children: (
                  <div style={{ margin: '0px auto', width: '85%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Image
                        src={hackathon?._source.cover_img}
                        preview={false}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        margin: '4rem 0px',
                        fontSize: '20px',
                        fontWeight: 400,
                        lineHeight: '32px'
                      }}
                    >
                      <ReactMarkdown>{hackathon?._source?.desc}</ReactMarkdown>
                    </div>
                    <Divider orientation="left" orientationMargin={0}>
                      <h1>Social Links</h1>
                    </Divider>
                    <div style={{ marginBottom: '4rem' }}>
                      <Row gutter={[16, 16]}>
                        {Object.keys(
                          hackathon?._source?.hackathon_setting || {}
                        )?.map(key =>
                          hackathon?._source?.hackathon_setting[key] !== null &&
                          [
                            'facebook',
                            'twitter',
                            'instagram',
                            'linkedin',
                            'slack',
                            'discord',
                            'medium',
                            'telegram',
                            'site',
                            'contact_email'
                          ].includes(key) ? (
                            <Col key={key} span={8}>
                              <Card bodyStyle={{ padding: '10px' }}>
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                  }}
                                >
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '4rem',
                                      height: '4rem',
                                      backgroundColor: socialLinks.find(
                                        sl => sl.name === key
                                      )?.color,
                                      color: '#FFF',
                                      fontSize: '3rem',
                                      borderRadius: '10%'
                                    }}
                                  >
                                    {
                                      socialLinks.find(sl => sl.name === key)
                                        ?.icon
                                    }
                                  </div>
                                  <div>
                                    <b>
                                      {key === 'contact_email'
                                        ? 'Email'
                                        : key.charAt(0).toUpperCase() +
                                          key.slice(1)}
                                    </b>
                                    <h5>
                                      {hackathon?._source.name}'s{' '}
                                      {key === 'contact_email'
                                        ? 'Email'
                                        : key.charAt(0).toUpperCase() +
                                          key.slice(1)}
                                    </h5>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    backgroundColor: 'rgb(240, 244, 255)',
                                    borderRadius: '16px',
                                    width: '100%',
                                    padding: '3px 9px',
                                    marginTop: 15
                                  }}
                                >
                                  <p
                                    style={{
                                      boxSizing: 'border-box',
                                      margin: '0px',
                                      color: 'rgb(55, 112, 255)',
                                      fontWeight: 600,
                                      display: '-webkit-box',
                                      WebkitLineClamp: 1,
                                      WebkitBoxOrient: 'vertical',
                                      overflowWrap: 'anywhere',
                                      overflow: 'hidden'
                                    }}
                                  >
                                    <a
                                      href={
                                        hackathon?._source.hackathon_setting[
                                          key
                                        ]
                                      }
                                      target="__blank"
                                    >
                                      {
                                        hackathon?._source.hackathon_setting[
                                          key
                                        ]
                                      }
                                    </a>
                                  </p>
                                </div>
                              </Card>
                            </Col>
                          ) : null
                        )}
                      </Row>
                    </div>
                    <Divider orientation="left" orientationMargin={0}>
                      <h1>FAQs</h1>
                    </Divider>
                    <Collapse
                      defaultActiveKey={['1']}
                      style={{ marginBottom: '4rem', width: '100%' }}
                    >
                      {hackathon?._source?.hackathon_faqs?.map((faq, index) => (
                        <Collapse.Panel
                          header={
                            <h3
                              style={{
                                fontSize: '16px',
                                fontWeight: 500,
                                lineHeight: '28px'
                              }}
                            >
                              {faq?.question}
                            </h3>
                          }
                          key={faq.uuid}
                        >
                          <div
                            style={{
                              fontSize: '17px',
                              fontWeight: 400,
                              lineHeight: '32px'
                            }}
                          >
                            <ReactMarkdown>{faq?.answer}</ReactMarkdown>
                          </div>
                        </Collapse.Panel>
                      ))}
                    </Collapse>
                    {hackathon?._source?.sponsor_tiers.length ? (
                      <>
                        <Divider orientation="left" orientationMargin={0}>
                          <h1>Sponsors</h1>
                        </Divider>
                        {hackathon?._source?.sponsor_tiers?.map(tier =>
                          tier?.sponsors.length ? (
                            <Card key={tier.uuid}>
                              <h2>{tier?.name}</h2>
                              <Row gutter={25}>
                                {tier?.sponsors?.map(sponsor => (
                                  <Col
                                    span={8}
                                    key={sponsor.uuid}
                                    style={{
                                      padding: 15,
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                    }}
                                  >
                                    <Image
                                      preview={false}
                                      src={sponsor.logo}
                                      width={tier.width - 19}
                                    />
                                  </Col>
                                ))}
                              </Row>
                            </Card>
                          ) : null
                        )}
                      </>
                    ) : null}
                  </div>
                )
              },
              {
                label: `Prizzes`,
                key: '2',
                children: hackathon?._source?.prizes?.length ? (
                  <Row gutter={16}></Row>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '50vh'
                    }}
                  >
                    <Empty
                      image="https://cdni.iconscout.com/illustration/premium/thumb/reward-4040469-3354555.png"
                      imageStyle={{
                        height: 300
                      }}
                      description={
                        <span>
                          No prizes have been added to this hackathon yet. Check
                          back later!
                        </span>
                      }
                    />
                  </div>
                )
              },
              {
                label: `Speaker and Judges`,
                key: '3',
                children: hackathon?._source?.judges?.length ? (
                  <Row gutter={16}>
                    {hackathon?._source?.judges?.map(judge => (
                      <Col span={6} key={judge.uuid}>
                        <Card
                          hoverable
                          style={{ height: '26.2rem' }}
                          cover={
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 15
                              }}
                            >
                              <Image
                                preview={false}
                                width={200}
                                height={200}
                                src={judge.profile_img}
                                alt="Judge profile image"
                              />
                            </div>
                          }
                        >
                          <Card.Meta
                            title={judge.name}
                            description={<span>{judge.company.name}</span>}
                          />
                          <p
                            style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflowWrap: 'anywhere',
                              overflow: 'hidden',
                              marginTop: 7,
                              color:
                                hackathon?._source?.hackathon_setting
                                  .primary_color
                            }}
                          >
                            {judge.job_title}
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              gap: 8,
                              fontSize: 25,
                              color: '#ef78b9',
                              marginTop: 15,
                              position: 'absolute',
                              bottom: 10
                            }}
                          >
                            {Object.keys(judge).map(key =>
                              judge[key] !== null &&
                              [
                                'instagram',
                                'twitter',
                                'telegram',
                                'linkedin',
                                'medium',
                                'discord',
                                'slack',
                                'facebook'
                              ].includes(key) ? (
                                <a
                                  href={judge[key]}
                                  className="devfolio-social-links"
                                  key={key}
                                  target="_blank"
                                >
                                  {socialLinks.find(l => l.name === key)?.icon}
                                </a>
                              ) : null
                            )}
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '50vh'
                    }}
                  >
                    <Empty
                      image="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png"
                      imageStyle={{
                        height: 300
                      }}
                      description={
                        <span>
                          No prizes have been added to this Judges yet. Check
                          back later!
                        </span>
                      }
                    />
                  </div>
                )
              },
              {
                label: `Projects`,
                key: '4',
                children: `Content of Tab Pane 4`
              },
              {
                label: `Schedule`,
                key: '5',
                children: `Content of Tab Pane 5`
              }
            ]}
          />
        </div>
      </div>
    </Drawer>
  )
}
export default DevfolioHackathonDetailsDrawer
