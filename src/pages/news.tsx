import React from "react"
import Helmet from "react-helmet"

import { Layout } from "../components"
import { SiteMetadataProps } from "../types"
import { graphql } from "gatsby"

const Page: React.FC<SiteMetadataProps> = ({ data }) => (
  <Layout>
    <div className="animated fadeIn">
      <div className="font-light">
        <Helmet title={`Aktuelles - ${data.site.siteMetadata.title}`} />
        <h3 className="u-text-center font-light no-select">
          <span className="u u-LR">Aktuelles</span>
        </h3>
        <div className="divider" />
        {/* {data.allWordpressWpNews.edges.map(({ node }) => {
          return (
            <div key={node.id} className="card" style={{ marginBottom: 24 }}>
              <div className="card-head">
                <div className="content content-no-padding">
                  <Link to={`/news/${node.slug}`}>
                    <h5 className="title font-light">{node.title}</h5>
                  </Link>
                </div>
              </div>
              <div className="content content-no-padding title">
                <p dangerouslySetInnerHTML={{ __html: node.content }} />
              </div>
              <div className="card-footer content">{node.date}</div>
            </div>
          )
        })} */}
      </div>
    </div>
  </Layout>
)

export default Page

export const query = graphql`
  query fetchNews {
    # allWordpressWpNews(sort: { fields: [date] }) {
    #   edges {
    #     node {
    #       id
    #       slug
    #       title
    #       content
    #       date(fromNow: true, locale: "de")
    #       modified
    #     }
    #   }
    # }
    site {
      siteMetadata {
        title
      }
    }
  }
`
