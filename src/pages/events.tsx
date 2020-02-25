import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import { Layout } from "../components"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allWordpressWpEvents: {
      edges: Array<{ node: any }>
    }
  }
}

const Page: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <div className="animated fadeIn">
        <Helmet title={`Termine - ${data.site.siteMetadata.title}`} />
        <h3 className="u-text-center font-light no-select">
          <span className="u u-LR">Termine</span>
        </h3>
        <div className="divider" />
        {data.allWordpressWpEvents.edges.map(({ node }) => {
          const year = node.acf.datum.slice(0, 4)
          const month = node.acf.datum.slice(4, 6)
          const day = node.acf.datum.slice(6, 8)

          return (
            <div key={node.slug} className="card" style={{ marginBottom: 24 }}>
              <div className="content content-no-padding">
                <div>
                  <div className="event-date">{`${day}/${month}/${year}`}</div>
                  <div className="event-time">
                    {node.acf.uhrzeit.slice(0, 5)} Uhr
                  </div>
                </div>
                <div className="font-light event-title">{node.title}</div>
                <div className="font-light event-location">{node.acf.ort}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query fetchEvents {
    allWordpressWpEvents(sort: { fields: acf___datum }) {
      edges {
        node {
          id
          slug
          title
          content
          date(fromNow: true, locale: "de")
          modified
          acf {
            datum
            uhrzeit
            ort
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
