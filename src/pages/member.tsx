import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import { Layout } from "../components"
import { SiteMetadataProps } from "../types"

const Page: React.FC<SiteMetadataProps> = ({ data: { site } }) => (
  <Layout>
    <div className="animated fadeIn">
      <Helmet title={`Mitglied - ${site.siteMetadata.title}`} />
      <h3 className="u-text-center font-light no-select">
        <span className="u u-LR">Mitglied</span>
      </h3>
      <div className="divider" />
      <div>
        <h6>Aktive Mitgliedschaft</h6>
        <p>
          Du spielst bereits ein Blas- bzw. Schlaginstrument? Du bist auf der
          Suche nach einer guten Musikkapelle und guten Gemeinschaft?
        </p>
        <p>
          Der Musikverein Markelsheim freut sich jederzeit über neue aktive
          Mitglieder - egal welches Instrument. Natürlich kannst du auch
          jederzeit mal unverbindlich in den Proben reinschnuppern.
        </p>
        <p>
          Du spielst noch kein Instrument, aber du möchtest gerne eines
          erlernen? Hier gibt es in unserem Verein auch viele Möglichkeiten...
          Sprich uns einfach an!
        </p>
        <p>
          Wende dich am besten an unsere Ansprechpartner. Wir freuen uns auf
          Dich!
        </p>
      </div>
      <div>
        <h6>Passive Mitgliedschaft</h6>
        <p>Du bist Musikliebhaber, spielst aber selbst kein Instrument?</p>
        <p>
          Freust auch du dich über den Beitrag unserer Musikkapelle zum
          kulturellen Leben in Markelsheim?
        </p>
        <p>
          Dir gefällt unsere Musik, findest unseren Verein sympathisch oder
          fühlst dich mit unserem Verein verbunden?
        </p>
        <p>
          Du bist der Meinung, dass es die Blasmusik verdient hat, gefördert zu
          werden?
        </p>
        <p>
          Willst auch du die Musikkapelle Markelsheim in seinem Wirken, sowie
          seiner Jugendarbeit unterstützen?
        </p>
        <p>
          Dann freuen wir uns sehr, dich als passives Mitglied im Musikverein
          Markelsheim begrüßen zu dürfen.
        </p>
        <blockquote>
          Musik lebt durch den Menschen ...
          <br />
          ... jeder Mensch braucht Musik ... <br />
          ... und wir brauchen Sie!
          <br />
        </blockquote>
        <p>
          Für eine passive Mitgliedschaft wende dich einfach an unsere
          Ansprechpartner oder nutze das untenstehende Beitrittsformular zum
          Herunterladen und sende dieses ausgefüllt an uns zurück.
        </p>
      </div>
      <div className="u-center">
        <div className="u-text-center" style={{ margin: 14 }}>
          <a href="http://mindreport.com/mkm/wp-content/uploads/2019/02/MKM_beitritt.pdf">
            <div className="card" style={{ padding: 14, width: 400 }}>
              <div className="tile">
                <div className="tile-icon">
                  <i className="far fa-file-pdf fa-4x fa-fw" />
                </div>
                <div className="tile-container">
                  <p className="tile-title no-margin">
                    <b>MKM_beitritt.pdf</b>
                  </p>
                  <p className="tile-subtitle no-margin">
                    Beitritterklärung für die Musikkapelle Markelsheim
                  </p>
                </div>
              </div>
            </div>
          </a>
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
