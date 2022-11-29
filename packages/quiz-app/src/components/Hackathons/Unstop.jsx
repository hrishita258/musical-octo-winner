import React, { useEffect } from 'react'
import { getRequest } from '../../axios/axiosMethods'
const Unstop = () => {
  useEffect(() => {
    document.title = 'Unstop'
    getRequest('opportunity/hackathons/unstop')
      .then(res => {
        console.log(JSON.parse(res.data.result))
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <h1>Unstop</h1>
    </div>
  )
}
export default Unstop
