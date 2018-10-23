import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Layout from '../components/layout'

const Heading = styled('h1')({
  color: 'magenta',
})

const IndexPage = () => (
  <Layout>
    <Heading>Hi people</Heading>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
