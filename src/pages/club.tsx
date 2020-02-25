import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"

import groupImage from "../assets/images/gruppenfoto_wo.png"
import { Layout } from "../components"
import { SiteMetadataProps } from "../types"
import { graphql } from "gatsby"

const Page: React.FC<SiteMetadataProps> = ({ data: { site } }) => (
  <Layout>
    <div className="animated fadeIn">
      <div className="font-light">
        <Helmet title={`Verein - ${site.siteMetadata.title}`} />
        <h3 className="u-text-center font-light no-select">
          <span className="u u-LR">Verein</span>
        </h3>
        <div className="divider" />
        <div className="tab-container tabs-center tabs-large">
          <ul>
            <li>
              <Link to="/club/history">Geschichte</Link>
            </li>
            <li>
              <Link to="/club/leadership">Vorstand</Link>
            </li>
            <li>
              <Link to="/club/band">Unsere Kapelle</Link>
            </li>
          </ul>
        </div>
        <div className="u-text-center">
          <img src={groupImage} alt="Gruppenbild am Zehntkeller" />
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
