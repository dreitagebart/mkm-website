import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import { Layout } from "../../components"
import { SiteMetadataProps } from "../../types"

const Page: React.FC<SiteMetadataProps> = ({ data: { site } }) => (
  <Layout>
    <div className="animated fadeIn">
      <div className="font-light">
        <Helmet title={`Kontakt - ${site.siteMetadata.title}`} />
        <h3 className="u-text-center font-light no-select">
          <span className="u u-LR">Kontakt</span>
        </h3>
        <div className="divider" />
        <div className="placeholder">
          <div className="placeholder-icon">
            <span className="icon">
              <i className="fas fa-envelope-open-text fa-4x"></i>
            </span>
          </div>
          <h6 className="placeholder-title">
            Das Kontaktformular wurde erfolgreich versandt.
          </h6>
        </div>
      </div>
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
