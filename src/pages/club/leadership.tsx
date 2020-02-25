import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import { Layout } from "../../components"
import { SiteMetadataProps } from "../../types"

const Page: React.FC<SiteMetadataProps> = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet title={`Vorstand - ${site.siteMetadata.title}`} />
      <div className="animated fadeIn">
        <div className="font-light">
          <h3 className="title font-light">Vorstand</h3>
          <p>
            Cupim drumstick beef ribs tenderloin. Porchetta turducken cow filet
            mignon doner, pork loin fatback kielbasa tenderloin chuck strip
            steak brisket buffalo. Tri-tip turducken ham landjaeger, strip steak
            shank tenderloin spare ribs prosciutto pig andouille ribeye pork
            chop. Pork swine sausage meatloaf frankfurter shoulder, flank
            bresaola sirloin jerky bacon tongue. Salami meatloaf pork belly,
            ground round strip steak burgdoggen hamburger turkey leberkas flank
            drumstick frankfurter.
          </p>
          <p>
            Pastrami tail sirloin cupim chicken pork chop biltong. Kielbasa
            landjaeger ground round ham hock sausage ham flank turducken doner
            swine pancetta andouille sirloin. Flank turkey capicola pastrami
            venison kielbasa pancetta andouille bresaola leberkas. Turkey
            picanha swine, burgdoggen sausage drumstick pork belly frankfurter
            boudin pork landjaeger meatloaf prosciutto. Jerky swine beef ribs
            tail short ribs turkey jowl bacon drumstick picanha. Capicola
            sausage burgdoggen short ribs rump fatback. T-bone pork loin
            shoulder salami, picanha leberkas short loin spare ribs tongue shank
            tail turkey jerky andouille short ribs.
          </p>
          <p>
            Does your lorem ipsum text long for something a little meatier? Give
            our generator a try… it’s tasty!
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
