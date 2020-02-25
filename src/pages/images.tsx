import React from "react"
import ImageGallery from "react-image-gallery"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import { Layout } from "../components"
// import 'react-image-gallery/styles/css/image-gallery.css'
import image2019WB1 from "../assets/images/mkm01.jpeg"
import image2019WB2 from "../assets/images/mkm02.jpeg"
import image2019WB3 from "../assets/images/mkm03.jpeg"
import image2014RW from "../assets/images/2014_RoteWeste.jpg"
import image2014All from "../assets/images/AlleWeste2014_gr.jpg"
import image2014CEO from "../assets/images/Ausschuss2014_gr.jpg"
import image20121 from "../assets/images/gruppe_2012_1_gr.jpg"
import image20122 from "../assets/images/gruppe_2012_2_gr.jpg"
import image20123 from "../assets/images/gruppe_2012_3_gr.jpg"
import image20080 from "../assets/images/gruppe2008-0_gr.jpg"
import image20081 from "../assets/images/gruppe2008-1_gr.jpg"
import image20082 from "../assets/images/gruppe2008-2_gr.jpg"
import image20083 from "../assets/images/gruppe2008-3_gr.jpg"
import image20084 from "../assets/images/gruppe2008-4_gr.jpg"
import image20085 from "../assets/images/gruppe2008-5_gr.jpg"
import imageGI from "../assets/images/gruppenfoto.jpg"
import imageGIwo from "../assets/images/gruppenfoto_wo.png"
import { SiteMetadataProps } from "../types"

const images = [
  {
    original: image2019WB1,
    thumbnail: image2019WB1,
    description: "2019",
  },
  {
    original: image2019WB2,
    thumbnail: image2019WB2,
    description: "2019",
  },
  {
    original: image2019WB3,
    thumbnail: image2019WB3,
    description: "2019",
  },
  {
    original: imageGI,
    thumbnail: imageGI,
    description: "2018",
  },
  {
    original: imageGIwo,
    thumbnail: imageGIwo,
    description: "2018",
  },
  {
    original: image2014RW,
    thumbnail: image2014RW,
    description: "2014",
  },
  {
    original: image2014All,
    thumbnail: image2014All,
    description: "2014",
  },
  {
    original: image2014CEO,
    thumbnail: image2014CEO,
    description: "2014 Ausschuss",
  },
  {
    original: image20121,
    thumbnail: image20121,
    description: "2012",
  },
  {
    original: image20122,
    thumbnail: image20122,
    description: "2012",
  },
  {
    original: image20123,
    thumbnail: image20123,
    description: "2012",
  },
  {
    original: image20080,
    thumbnail: image20080,
    description: "2008",
  },
  {
    original: image20081,
    thumbnail: image20081,
    description: "2008",
  },
  {
    original: image20082,
    thumbnail: image20082,
    description: "2008",
  },
  {
    original: image20083,
    thumbnail: image20083,
    description: "2008",
  },
  {
    original: image20084,
    thumbnail: image20084,
    description: "2008",
  },
  {
    original: image20085,
    thumbnail: image20085,
    description: "2008",
  },
]

const Page: React.FC<SiteMetadataProps> = ({ data: { site } }) => (
  <Layout>
    <Helmet title={`Bilder - ${site.siteMetadata.title}`} />
    <div className="animated fadeIn">
      <ImageGallery
        items={images}
        autoPlay
        renderLeftNav={(onClick, isDisabled) => (
          <button
            disabled={isDisabled}
            className="image-gallery-left-nav"
            onClick={onClick}
          >
            <i className="fas fa-chevron-left" />
          </button>
        )}
        renderRightNav={(onClick, isDisabled) => (
          <button
            disabled={isDisabled}
            className="image-gallery-right-nav"
            onClick={onClick}
          >
            <i className="fas fa-chevron-right" />
          </button>
        )}
        renderPlayPauseButton={(onClick, isPlaying) => (
          <button
            className={`image-gallery-play-button${isPlaying ? " active" : ""}`}
            onClick={onClick}
          >
            {isPlaying ? (
              <i className="fas fa-pause" />
            ) : (
              <i className="fas fa-play" />
            )}
          </button>
        )}
        renderFullscreenButton={(onClick, isFullscreen) => (
          <button
            className={`image-gallery-fullscreen-button${
              isFullscreen ? " active" : ""
            }`}
            onClick={onClick}
          >
            {isFullscreen ? (
              <i className="fas fa-compress" />
            ) : (
              <i className="fas fa-expand" />
            )}
          </button>
        )}
      />
    </div>
  </Layout>
)

export default Page

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
