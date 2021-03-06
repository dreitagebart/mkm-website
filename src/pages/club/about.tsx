import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import { Layout } from "../../components"
import { SiteMetadataProps } from "../../types"

const Page: React.FC<SiteMetadataProps> = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet title={`Geschichte - ${site.siteMetadata.title}`} />
      <div className="animated fadeIn">
        <div className="font-light">
          <blockquote>
            <h6 className="font-light">
              Unsere Musikkapelle zählt stolze 200 Mitglieder mit 40 aktiven
              Musikern.
            </h6>
          </blockquote>
          <p>
            Bei durchschnittlich <strong>50 Auftritten im Jahr</strong> findet
            unsere harte Probenarbeit große Anerkennung und dies nicht nur in
            unserer Region. In Markelsheim gibt es kaum eine Feier, die ohne
            unsere Musik stattfindet.
          </p>
          <p>
            Die Proben finden jeden Mittwoch im Haus der Vereine in Markelsheim
            statt. Von jeweils <b>20:00</b> bis <b>22:00 Uhr</b> bereiten wir
            uns dort zum Beispiel auf die anstehenden Ständchen , Feste und
            Konzerte vor. Uns ist es wichtig neben den Noten aus dem Repertoire
            auch immer wieder neue Stücke mit aufzunehmen und diese
            einzustudieren
          </p>
          <p>
            <strong>
              Typisch für unsere Musikkapelle ist die konzertante Blasmusik
            </strong>
            . Abend-, Promenaden-, Fest- und vorweihnachtliche Konzerte stehen
            auf unserem Programm. Den Höhepunkt für uns bildet jedes Jahr{" "}
            <strong>das Weihnachtskonzert in Markelsheim</strong>.
          </p>
          {/* <blockquote className="font-light">
            Auch als Festkapelle hat unsere Kapelle viele Freunde gefunden und
            sich überall einen guten Namen gemacht.
          </blockquote> */}
          {/* <p className="font-light">
            Markelsheim ist stolz auf seinen Musikverein, der nicht nur der
            Gemeinde einen harmonischen Zusammenhang gibt, sondern den Wein- und
            Erholungsort Markelsheim über die Grenzen hinaus bekannt macht.
          </p> */}
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
