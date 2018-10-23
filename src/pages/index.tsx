import * as React from 'react'
import Layout from '../components/layout'
import Article from '../components/article'
import Container from '../components/container'

const IndexPage = () => (
  <Layout>
    <Container>
      <Article title="This is an article" />
    </Container>
  </Layout>
)

export default IndexPage
