import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"

import { Layout } from "../../components"
import { SiteMetadataProps } from "../../types"

const Page: React.FC<SiteMetadataProps> = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet title={`Ausbildung - ${site.siteMetadata.title}`} />
      <div className="animated fadeIn">
        <div className="font-light">
          <h3 className="title font-light">Ausbildung</h3>
          <p>
            Der Nachwuchs ist unsere Zukunft und deswegen bilden wir auch gerne
            verschiedene Instrumente über unsere Musikkapelle aus. Die
            Ausbildung erfolgt über Musikerinnen und Musiker aus dem Verein.
            Ziel ist die Integration in die Kapelle. Außerdem bieten wir dir ein
            Leihinstrument von unserem Verein für die Ausbildung, soweit dies
            vorhanden ist, an.
          </p>
          <p>
            Bereits während der Ausbildung ist es möglich im Jugendorchester
            mitzuspielen. Dort absolvieren die Kinder und Jugendlichen bereits
            erste Auftritte und werden in das Vereinsleben integriert.
          </p>
          <p>
            Solltest du Interesse an einer Ausbildung haben, so wende dich bitte
            an <Link to="/contact">Verena Hüttl</Link>.
          </p>
        </div>
      </div>
    </Layout>
  )
}

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
