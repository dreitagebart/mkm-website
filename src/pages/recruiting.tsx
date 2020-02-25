import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import { Layout } from "../components"
import { SiteMetadataProps } from "../types"

const Page: React.FC<SiteMetadataProps> = ({ data: { site } }) => (
  <Layout>
    <div className="animated fadeIn">
      <Helmet title={`Ausbildung - ${site.siteMetadata.title}`} />
      <h3 className="u-text-center font-light no-select">
        <span className="u u-LR">Ausbildung</span>
      </h3>
      <div className="divider" />
    </div>
  </Layout>
)

export default Page

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
