import { Card, Col, Collapse, Divider, Drawer, Image, Row, Tabs } from 'antd'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const DevfolioHackathonDetailsDrawer = ({
  hackathon,
  open,
  setSelectedDevFolioHackathonId
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
                  <div style={{ margin: '0px auto', width: '80%' }}>
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
                children: `Content of Tab Pane 2`
              },
              {
                label: `Tab 3`,
                key: '3',
                children: `Content of Tab Pane 3`
              }
            ]}
          />
        </div>
      </div>
    </Drawer>
  )
}
export default DevfolioHackathonDetailsDrawer
