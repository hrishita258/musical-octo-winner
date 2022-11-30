import { Image } from 'antd'
import React, { useEffect, useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import { getRequest } from '../axios/axiosMethods'

const UnstopOpportunity = () => {
  const { opportunityId } = useParams()
  const [opportunity, setOpportunity] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getRequest('opportunity/unstop/' + opportunityId)
      .then(res => {
        setOpportunity(JSON.parse(res.data.result).data.competition)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [opportunityId])
  console.log(opportunity)

  if (loading) return <div>Loading...</div>

  return (
    <div style={{ maxWidth: '1550px', margin: '0px auto', color: '#1c4980' }}>
      {/* banner */}
      <div>
        <Image preview={false} src={opportunity.banner.image_url} />
      </div>
      <div
        style={{
          borderTop: '2px solid #0073e6',
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
              <h1 style={{ margin: 0 }}>{opportunity.title}</h1>
              <span style={{ fontSize: '16px', fontWeight: 500 }}>
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
                <span style={{ fontWeight: 400 }}>
                  {opportunity.address_with_country_logo.address}
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default UnstopOpportunity
