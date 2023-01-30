import { Card, Checkbox, Col, Collapse, Input, Row, Tree } from 'antd'
import React, { useEffect, useState } from 'react'
import { getRequest } from '../axios/axiosMethods'
import PageLayout from '../components/PageLayout'
import filters from '../data/openseasme.json'

const BREADCRUMBS = [
  {
    name: 'Home',
    link: {
      route: '/',
      key: 1
    }
  },
  {
    name: 'Edx'
  }
]

const filterKeys = {
  publishersFacet: 'Publishers',
  ratingsRanges: 'Rating',
  durationRanges: 'Seat Time',
  languages: 'Languages',
  accreditationFacet: 'Accreditation Organizations',
  priceRanges: 'Price',
  productType: 'Product Type',
  categoriesFacet: 'Category'
}

const Edx = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      getRequest('opportunity/openseasme').then(json => {
        setData(json.data.result.results)
      })
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return 'Loading...'
  if (error) return 'Error!'
  if (!data) return null
  console.log(
    filters['categoriesFacet']?.map(s => ({
      title: s.name,
      key: s.id
    }))
  )
  return (
    <PageLayout breadcrumbs={BREADCRUMBS}>
      <Row gutter={15}>
        <Col
          span={6}
          style={{
            position: 'relative',
            height: 'calc(100vh - 10px)',
            position: 'sticky',
            top: '150px',
            overflowY: 'auto',
            overflowX: 'hidden',
            borderRight: '2px solid #e8e8e8',
            backgroundColor: '#fff'
          }}
        >
          <div style={{ width: '99%' }}>
            <Collapse
              defaultActiveKey={['categoriesFacet', 'productType']}
              ghost
              expandIconPosition="end"
              style={{ padding: 0 }}
              bodyStyle={{ padding: 0 }}
              bordered
            >
              {Object.keys(filters?.facetValues)
                .reverse()
                .map(
                  (filter, index) =>
                    filterKeys[filter] && (
                      <Collapse.Panel
                        style={{
                          padding: '0px',
                          borderBottom: '1px solid #e8e8e8'
                        }}
                        bodyStyle={{ padding: '0px' }}
                        className="site-collapse-custom-panel"
                        header={
                          <h2
                            style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              color: '#555'
                            }}
                          >
                            {filterKeys[filter]}
                          </h2>
                        }
                        key={filter}
                      >
                        {filter === 'categoriesFacet' ? (
                          <Tree
                            checkable
                            treeData={filters.facetValues[
                              'categoriesFacet'
                            ]?.map(s => ({
                              title: (
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                  }}
                                >
                                  <h4
                                    style={{
                                      fontSize: '14px',
                                      color: '#555',
                                      fontWeight: 600
                                    }}
                                  >
                                    {s.name}
                                  </h4>
                                  <span
                                    style={{
                                      fontSize: '12px',
                                      color: '#555',
                                      fontWeight: 600
                                    }}
                                  >
                                    {s.count}
                                  </span>
                                </div>
                              ),
                              key: s.id,
                              children: s.children?.map(c => ({
                                title: (
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      width: '100%'
                                    }}
                                  >
                                    <h4
                                      style={{
                                        fontSize: '14px',
                                        color: '#555',
                                        fontWeight: 600
                                      }}
                                    >
                                      {c.name}
                                    </h4>
                                    <span
                                      style={{
                                        fontSize: '12px',
                                        color: '#555',
                                        fontWeight: 600
                                      }}
                                    >
                                      {c.count}
                                    </span>
                                  </div>
                                ),
                                key: c.id,
                                children: c.children?.map(b => ({
                                  title: (
                                    <div
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '100%'
                                      }}
                                    >
                                      <h4
                                        style={{
                                          fontSize: '14px',
                                          color: '#555',
                                          fontWeight: 600
                                        }}
                                      >
                                        {b.name}
                                      </h4>
                                      <span
                                        style={{
                                          fontSize: '12px',
                                          color: '#555',
                                          fontWeight: 600
                                        }}
                                      >
                                        {b.count}
                                      </span>
                                    </div>
                                  ),
                                  key: b.id,
                                  children: b.children?.map(d => ({
                                    title: (
                                      <div
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'space-between',
                                          width: '100%'
                                        }}
                                      >
                                        <h4
                                          style={{
                                            fontSize: '14px',
                                            color: '#555',
                                            fontWeight: 600
                                          }}
                                        >
                                          {d.name}
                                        </h4>
                                        <span
                                          style={{
                                            fontSize: '12px',
                                            color: '#555',
                                            fontWeight: 600
                                          }}
                                        >
                                          {d.count}
                                        </span>
                                      </div>
                                    ),
                                    key: d.id
                                  }))
                                }))
                              }))
                            }))}
                          />
                        ) : (
                          <div>
                            <Input
                              placeholder={`Filter ${filterKeys[filter]}`}
                              style={{ marginBottom: '10px' }}
                            />
                            {filters.facetValues[filter]?.map(s => (
                              <div
                                style={{
                                  width: '100%',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center'
                                }}
                              >
                                <Checkbox style={{ width: '85%' }}>
                                  <h4
                                    style={{
                                      fontSize: '14px',
                                      color: '#555',
                                      fontWeight: 600
                                    }}
                                  >
                                    {s.name}
                                  </h4>
                                </Checkbox>
                                <span
                                  style={{
                                    fontSize: '12px',
                                    color: '#555',
                                    fontWeight: 600
                                  }}
                                >
                                  {s.count}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </Collapse.Panel>
                    )
                )}
            </Collapse>
          </div>
        </Col>
        <Col span={18}>
          <Row gutter={15} style={{ marginLeft: '10px' }}>
            {data?.map(item => (
              <Col span={6} key={item.id}>
                <Card></Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </PageLayout>
  )
}

export default Edx
