// import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useSelector } from 'react-redux'
import {searchCompany} from '../redux/actions'
import { useParams } from 'react-router-dom'

const CompanySearchResults = () => {
  const jobs = useSelector(state => state.companySearch.content)
  const params = useParams();
  searchCompany(params.companyName);
  console.log(jobs)
  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults;
