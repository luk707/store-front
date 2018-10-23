import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import Page from './page'
import Header from './header'
import './layout.css'

const baseTheme = {
  breakpoints: {
    xs: 400,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1440,
  },
  spacings: {
    xs: 2,
    sm: 10,
    md: 20,
    lg: 30,
    xl: 60,
  },
  colorWhite: '#fff',
  colorOffWhite: '#f9f9f9',
}

const theme = {
  ...baseTheme,
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Page>
            <Header title="My Shop" />
            {children}
          </Page>
        </ThemeProvider>
      </>
    )}
  />
)

export default Layout
