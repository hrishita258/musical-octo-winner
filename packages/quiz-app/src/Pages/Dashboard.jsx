import { Avatar, Carousel, Image, Tag } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { getRequest } from '../axios/axiosMethods'
import PageLayout from '../components/PageLayout'

const Dashboard = () => {
  const [postsData, setPostsData] = useState([])
  const [homepageBanner, setHomepageBanner] = useState([])
  const [featuredOpportunities, setFeaturedOpportunities] = useState([])
  const [homepageBannerLoading, setHomepageBannerLoading] = useState(true)
  const [postsDataLoading, setPostsDataLoading] = useState(true)
  const [featuredOpportunitiesLoading, setFeaturedOpportunitiesLoading] =
    useState(true)

  const BREADCRUMBS = [
    {
      name: 'Home',
      link: {
        route: '/',
        key: 1
      }
    }
  ]

  useEffect(() => {
    getRequest('opportunity/home/posts?per_page=16')
      .then(s => {
        console.log(JSON.parse(s.data.result))
        setPostsData(JSON.parse(s.data.result)[0].data.tagFeed?.items)
        setPostsDataLoading(false)
      })
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    getRequest('opportunity/home/banners')
      .then(s => {
        setHomepageBanner(JSON.parse(s.data.result).data)
        setHomepageBannerLoading(false)
      })
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    getRequest('opportunity/hackathons/unstop/featured')
      .then(s => {
        setFeaturedOpportunities(JSON.parse(s.data.result).data)
        setFeaturedOpportunitiesLoading(false)
      })
      .catch(e => console.log(e))
  }, [])

  console.log(featuredOpportunities)

  return (
    <PageLayout
      breadcrumbs={BREADCRUMBS}
      loading={
        postsDataLoading ||
        homepageBannerLoading ||
        featuredOpportunitiesLoading
      }
    >
      <div style={{ margin: '0px 1.5rem 3rem' }}>
        <Carousel slidesToShow={2} autoplay arrows>
          {homepageBanner?.map(banner => (
            <div key={banner.id}>
              <a href={'https://unstop.com/' + banner.link} target="__blank">
                <Image
                  style={{
                    borderRadius: '12px',
                    boxShadow: '0 0 10px #0080ff40',
                    background: '#fff',
                    maxWidth: 'calc(100% - 1rem)',
                    margin: '2rem 6px'
                  }}
                  preview={false}
                  src={banner.bannerImage.image_url}
                  alt="something is coming here"
                />
              </a>
            </div>
          ))}
        </Carousel>
      </div>

      <h2
        style={{
          borderLeft: `10px solid #1c4980`,
          color: '#1c4980',
          paddingLeft: 30,
          fontSize: '20px',
          margin: '30px 0px'
        }}
      >
        Daily articles for you
      </h2>
      <div
        style={{
          padding: '0px 3rem',
          marginBottom: '4rem'
        }}
      >
        <Carousel arrows rows={2}>
          {postsData?.map(post => (
            <a key={post.feedId} target="__blank" href={post.post.mediumUrl}>
              <div
                key={post.feedId}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '30px 60px',
                  justifyContent: 'space-between',
                  color: '#1c4980',
                  borderBottom: '1px solid #e8e8e8'
                }}
              >
                <div
                  style={{
                    width: '75%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    style={{ display: 'flex', gap: 20, alignItems: 'center' }}
                  >
                    <div
                      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                    >
                      <Avatar
                        src={
                          'https://miro.medium.com/fit/c/300/300/' +
                          post.post.creator.imageId
                        }
                      />
                      <span style={{ fontWeight: 500 }}>
                        {post.post.creator.name}
                      </span>
                    </div>
                    <span>{moment(post.post.latestPublishedAt).fromNow()}</span>
                  </div>
                  <h3>
                    <strong>{post.post.title}</strong>
                  </h3>
                  <p
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 3,
                      overflow: 'hidden'
                    }}
                  >
                    {post.post.extendedPreviewContent.bodyModel.paragraphs
                      .slice(1)
                      ?.map(p => p.text)
                      .join(' ')}
                  </p>
                  <div
                    style={{
                      marginTop: '20px',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      {post.post.tags.map(tag => (
                        <Tag key={tag.id}>{tag.displayTitle}</Tag>
                      ))}
                    </div>
                    <span style={{ float: 'right' }}>
                      {Math.floor(post.post.readingTime) + ' min read'}
                    </span>
                  </div>
                </div>
                <div style={{ width: '150px' }}>
                  <Image
                    alt="post image"
                    preview={false}
                    src={
                      'https://miro.medium.com/fit/c/300/300/' +
                      post.post.previewImage.id
                    }
                  />
                </div>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
      <h2
        style={{
          borderLeft: `10px solid #1c4980`,
          color: '#1c4980',
          paddingLeft: 30,
          fontSize: '20px',
          margin: '30px 0px'
        }}
      >
        Featured opportunities for you
      </h2>
      <div
        style={{
          marginBottom: '4rem',
          padding: '0px 2rem'
        }}
      >
        <Carousel arrows slidesToShow={3}>
          {featuredOpportunities?.map(fo => (
            <div key={fo.id}>
              <div
                key={fo.id}
                style={{ margin: '0.5rem', marginBottom: '2rem' }}
              >
                <div style={{ position: 'relative' }}>
                  <Image
                    style={{
                      borderRadius: '12px',
                      boxShadow: '0 0 10px #0080ff40'
                    }}
                    preview={false}
                    src={fo?.banner_mobile?.image_url}
                    alt="something is coming here"
                  />
                  <a
                    href={'https://unstop.com/' + fo.public_url}
                    target="__blank"
                  >
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        padding: '60px 12px 10px',
                        background:
                          'linear-gradient(to top,#000000,rgba(0,0,0,0))',
                        left: '0',
                        width: '100%',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '15px',
                        fontWeight: 600
                      }}
                    >
                      <div
                        style={{
                          WebkitLineClamp: 2,
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          marginBottom: '0px'
                        }}
                      >
                        {fo.title}
                      </div>
                      <p style={{ margin: 0 }}>{fo?.organisation?.name}</p>
                    </div>
                  </a>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    height: 40,
                    background: '#e8e8e8',
                    borderRadius: '50px',
                    padding: '0px 10px',
                    gap: 10
                  }}
                >
                  <span
                    style={{
                      width: 'calc(50% - 10px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      color: '#1c4980',
                      justifyContent: 'flex-start'
                    }}
                  >
                    <FaCalendarAlt style={{ fontSize: 20 }} />
                    {fo?.registerCount + ' registered'}
                  </span>
                  <span
                    style={{
                      width: 'calc(50% - 10px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      color: '#1c4980',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <FaUsers style={{ fontSize: 25 }} />
                    {fo?.regnRequirements?.remain_days}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </PageLayout>
  )
}

export default Dashboard
