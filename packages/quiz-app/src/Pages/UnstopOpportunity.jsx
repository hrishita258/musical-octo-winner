import { Carousel, Image } from 'antd'
import moment from 'moment'
import { default as React, default as React, useEffect, useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import { getRequest } from '../axios/axiosMethods'

const themeColors = [
  {
    name: 'blue',
    color: 'rgb(0, 115, 230)',
    light: '#0073e64d'
  },
  {
    name: 'light-blue',
    color: 'rgb(3, 157, 227)'
  },
  {
    name: 'light-blue-dark',
    color: 'rgb(41, 98, 255)'
  },
  {
    name: 'blue-dark',
    color: 'rgb(13, 71, 161)'
  },
  {
    name: 'cyan-dark',
    color: 'rgb(0, 96, 100)'
  },
  {
    name: 'indigo',
    color: 'rgb(63, 81, 181)'
  },
  {
    name: 'indigo-dark',
    color: 'rgb(26, 35, 126)'
  },
  {
    name: 'deep-purple',
    color: 'rgb(103, 58, 183)'
  },
  {
    name: 'purple',
    color: 'rgb(156, 39, 176)'
  },
  {
    name: 'purple-dark',
    color: 'rgb(74, 20, 140)'
  },
  {
    name: 'deep-purple-dark',
    color: 'rgb(98, 0, 234)'
  },
  {
    name: 'amber',
    color: 'rgb(194, 137, 0)'
  },
  {
    name: 'amber-dark',
    color: 'rgb(235, 0, 0)'
  },
  {
    name: 'orange',
    color: 'rgb(214, 128, 0)',
    light: '#d680004d'
  },
  {
    name: 'dark-orange',
    color: 'rgb(211, 61, 13)'
  },
  {
    name: 'deep-orange',
    color: 'rgb(214, 53, 0)'
  },
  {
    name: 'red',
    color: 'rgb(214, 53, 0)'
  },
  {
    name: 'red-dark',
    color: 'rgb(183, 28, 28)'
  },
  {
    name: 'pink',
    color: 'rgb(223, 22, 90)'
  },
  {
    name: 'pink-dark',
    color: 'rgb(136, 14, 79)'
  },
  {
    name: 'light-green',
    color: 'rgb(111, 160, 54)'
  },
  {
    name: 'green',
    color: 'rgb(56, 132, 59)'
  },
  {
    name: 'green-dark',
    color: 'rgb(27, 94, 32)'
  },
  {
    name: 'teal',
    color: 'rgb(0, 133, 118)'
  },
  {
    name: 'teal-dark',
    color: 'rgb(0, 77, 64)'
  },
  {
    name: 'blue-grey',
    color: 'rgb(96, 120, 139)'
  },
  {
    name: 'brown',
    color: 'rgb(121, 85, 72)'
  },
  {
    name: 'black',
    color: 'rgb(0, 0, 0)'
  },
  {
    name: 'color-bg1',
    color: 'rgb(184, 20, 78)'
  },
  {
    name: 'color-bg2',
    color: 'rgb(1, 127, 78)'
  },
  {
    name: 'color-bg3',
    color: 'rgb(34, 13, 140)'
  },
  {
    name: 'color-bg4',
    color: 'rgb(170, 87, 19)'
  },
  {
    name: 'color-bg5',
    color: 'rgb(189, 48, 40)'
  },
  {
    name: 'color-bg6',
    color: 'rgb(22, 120, 191)'
  },
  {
    name: 'color-bg7',
    color: 'rgb(13, 147, 142)'
  },
  {
    name: 'color-bg8',
    color: 'rgb(50, 57, 167)'
  }
]

const UnstopOpportunity = () => {
  const { opportunityId } = useParams()
  const [opportunity, setOpportunity] = useState(null)
  const [loading, setLoading] = useState(true)
  const [themeColor, setThemeColor] = useState('blue')

  useEffect(() => {
    getRequest('opportunity/unstop/' + opportunityId)
      .then(res => {
        setOpportunity(JSON.parse(res.data.result).data.competition)
        setLoading(false)
        setThemeColor(
          themeColors.find(
            c =>
              c.name ===
              JSON.parse(res.data.result).data.competition.theme_colour
          ) || {
            name: 'blue',
            color: 'rgb(0, 115, 230)',
            light: '#0073e64d'
          }
        )
      })
      .catch(err => {
        console.log(err)
      })
  }, [opportunityId])
  console.log(opportunity)

  if (loading) return <div>Loading...</div>

  return (
    <div
      style={{
        maxWidth: '1550px',
        margin: '0px auto',
        color: themeColor,
        backgroundColor: '#FFF',
        height: '100%'
      }}
    >
      {/* Header */}
      <div>
        {/* banner */}
        {opportunity.all_banner.length ? (
          <Carousel autoplay>
            {opportunity.all_banner.map(item => (
              <Image preview={false} src={item.image_url} key={item.id} />
            ))}
          </Carousel>
        ) : (
          <div>
            <Image preview={false} src={opportunity.banner.image_url} />
          </div>
        )}
        <div
          style={{
            borderTop: `3px solid ${themeColor.color}`,
            background: '#fff',
            position: 'relative',
            zIndex: 9,
            padding: '0px 60px',
            margin: '0px auto'
          }}
        >
          <div>something is going to come here</div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  display: 'flex',
                  borderRadius: '10px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 65px #27497d17'
                }}
              >
                <Image
                  preview={false}
                  src={
                    opportunity.logoUrl2
                      ? opportunity.logoUrl2
                      : opportunity.logoUrl
                  }
                />
              </div>
              <div>
                <h1 style={{ margin: 0, color: '#1c4980' }}>
                  {opportunity.title}
                </h1>

                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#1c4980'
                  }}
                >
                  {opportunity.organisation.name}
                </span>
                <h3
                  style={{
                    marginTop: 15,
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center'
                  }}
                >
                  <IoLocationOutline style={{ fontSize: '20px' }} />
                  {'Location'}
                  <span style={{ fontWeight: 400, color: '#1c4980' }}>
                    {opportunity.address_with_country_logo.address}
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* content */}
      <div
        style={{
          padding: '0px 60px',
          margin: '0px auto',
          marginTop: '30px'
          // maxWidth: '1250px'
        }}
      >
        {/* stages and timeline */}
        <div>
          <h2
            style={{
              borderLeft: `10px solid ${themeColor.color}`,
              color: '#1c4980',
              paddingLeft: 30,
              fontSize: '20px',
              margin: '30px 0px'
            }}
          >
            {opportunity.title + ': Stages and Timeline'}
          </h2>
          <div
            className="unstop-rounds-container"
            style={{ color: themeColor.color, maxWidth: '1250px' }}
          >
            {opportunity.rounds.map(round => (
              <div
                key={round.id}
                style={{ color: themeColor.color }}
                className="unstop-round-list"
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    border: `5px solid ${themeColor.light}`,
                    color: themeColor.color,
                    borderRadius: '50px',
                    position: 'absolute',
                    left: '-12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: '600',
                    background: '#fff',
                    opacity: '.9',
                    top: '50%',
                    marginTop: '-18px'
                  }}
                >
                  <BsCircleFill />
                </div>
                <div
                  style={{
                    color: themeColor.color,
                    padding: '22px 30px',
                    marginBottom: '20px',
                    borderRadius: '20px',
                    transition: '.4s',
                    position: 'relative',
                    boxShadow: '0 6px 65px #27497d17',
                    background: '#fff'
                  }}
                >
                  <h3 style={{ fontSize: '18px' }}>{round.details[0].title}</h3>
                  <div
                    style={{
                      fontSize: '15px',
                      lineHeight: '26px',
                      color: '#1c4980',
                      margin: '10px 0 0',
                      wordBreak: 'break-word'
                    }}
                    dangerouslySetInnerHTML={{
                      __html: round.details[0].display_text
                    }}
                  ></div>
                  <div style={{ marginTop: 25, display: 'flex', gap: 40 }}>
                    <span>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          color: '#1c4980'
                        }}
                      >
                        <strong>Start Date</strong>
                        {moment(round.details[0].start_date).format(
                          'MMMM Do YYYY, h:mm a'
                        )}
                      </div>
                    </span>
                    <span>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          color: '#1c4980'
                        }}
                      >
                        <strong>End Date</strong>
                        {moment(round.details[0].end_date).format(
                          'MMMM Do YYYY, h:mm a'
                        )}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* description */}
        <div
          style={{
            background: 'rgba(236,239,243,.2)',
            padding: '60px 0px'
          }}
        >
          <div
            style={{
              // maxWidth: '1250px',
              margin: '0px auto'
            }}
          >
            <h2
              style={{
                borderLeft: `10px solid ${themeColor.color}`,
                color: '#1c4980',
                paddingLeft: 30,
                fontSize: '20px',
                margin: '30px 0px'
              }}
            >
              {'All that you need to know about ' + opportunity.title}
            </h2>
            <div
              className="unstop-details-container"
              style={{ borderColor: themeColor.color }}
              dangerouslySetInnerHTML={{ __html: opportunity.details }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnstopOpportunity