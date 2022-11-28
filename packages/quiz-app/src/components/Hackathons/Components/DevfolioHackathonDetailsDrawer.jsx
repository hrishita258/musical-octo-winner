import { Collapse, Divider, Drawer, Image, Tabs } from 'antd'
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
          <img
            width={250}
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
                  <div style={{ maxWidth: '70em', margin: '0px auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Image
                        src={hackathon?._source.cover_img}
                        preview={false}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        margin: '4rem 0px 0.75rem',
                        fontSize: '20px',
                        color: 'rgb(39, 51, 57)',
                        fontWeight: 400,
                        lineHeight: '32px'
                      }}
                    >
                      <ReactMarkdown>{hackathon?._source?.desc}</ReactMarkdown>
                    </div>
                    <Divider></Divider>
                    <Collapse defaultActiveKey={['1']}>
                      {hackathon?._source?.hackathon_faqs?.map((faq, index) => (
                        <Collapse.Panel header={faq?.question} key={faq.uuid}>
                          <div
                            style={{
                              fontSize: '17px',
                              color: 'rgb(39, 51, 57)',
                              fontWeight: 400,
                              lineHeight: '32px'
                            }}
                          >
                            <ReactMarkdown>{faq?.answer}</ReactMarkdown>
                          </div>
                        </Collapse.Panel>
                      ))}
                    </Collapse>
                  </div>
                )
              },
              {
                label: `Tab 2`,
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
