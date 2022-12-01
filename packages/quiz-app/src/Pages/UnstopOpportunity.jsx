import { Image } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { BiRupee } from 'react-icons/bi'
import { FaCalendarAlt } from 'react-icons/fa'
import { ImUsers } from 'react-icons/im'
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
    <div
      style={{
        maxWidth: '1550px',
        margin: '0px auto',
        color: '#1c4980',
        background: '#fff'
      }}
    >
      {/* banner */}
      <div>
        <Image preview={false} src={opportunity.banner.image_url} />
      </div>
      <div
        style={{
          borderTop: '2px solid #0073e6',
          position: 'relative',
          zIndex: 9,
          padding: '0px 60px',
          margin: '0px auto'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 0px'
          }}
        >
          <div
            style={{
              maxWidth: 'calc(100% - 300px)',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
              padding: '10px 18px 10px 10px',
              background: 'rgba(236,239,243,.5)',
              gap: 35
            }}
          >
            <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
              <div
                style={{
                  height: '32px',
                  width: '32px',
                  background: '#fff',
                  boxShadow: '0 1px 4px #54545426',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0073e6',
                  fontSize: '20px'
                }}
              >
                <FaCalendarAlt />
              </div>
              <div>
                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '12px'
                  }}
                >
                  <strong style={{ fontSize: '14px' }}>
                    Registration Deadline
                  </strong>
                  {moment(opportunity.regnRequirements.end_regn_dt).format(
                    'MMM Do YYYY, h:mm:ss a'
                  )}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
              <div
                style={{
                  height: '32px',
                  width: '32px',
                  background: '#fff',
                  boxShadow: '0 1px 4px #54545426',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0073e6',
                  fontSize: '20px'
                }}
              >
                <ImUsers />
              </div>
              <div>
                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '12px'
                  }}
                >
                  <strong style={{ fontSize: '14px' }}>Team Size</strong>
                  {opportunity.regnRequirements.min_team_size} -{' '}
                  {opportunity.regnRequirements.max_team_size} members
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
              <div
                style={{
                  height: '32px',
                  width: '32px',
                  background: '#fff',
                  boxShadow: '0 1px 4px #54545426',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0073e6',
                  fontSize: '20px'
                }}
              >
                <BiRupee />
              </div>
              <div>
                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '12px'
                  }}
                >
                  <strong style={{ fontSize: '14px' }}>
                    Free Registration
                  </strong>
                </span>
              </div>
            </div>
          </div>
          <div>right</div>
        </div>
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
                boxShadow: '0 6px 65px #27497d17',
                padding: 10
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
          <div style={{}}></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default UnstopOpportunity
