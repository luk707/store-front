import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { H1 } from '../components/typography'

const IndexPage = () => (
  <Layout>
    <H1>Hi people</H1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
