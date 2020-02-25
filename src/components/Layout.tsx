import React, { Fragment } from "react"
import Helmet from "react-helmet"
import { withWindowSize, WindowSizeProps } from "react-fns"

import {
  Header,
  LeavesLeft,
  LeavesRight,
  HeaderClub,
  HeaderMarkelsheim,
  Footer,
} from "../components"
import "../styles/index.css"
import "cirrus-ui/dist/cirrus.min.css"

interface WrappedProps extends WindowSizeProps {}

const WrappedLayout: React.FC<WrappedProps> = ({ children, width }) => {
  return (
    <div>
      {width >= 780 ? (
        <Fragment>
          <LeavesLeft />
          <LeavesRight />
        </Fragment>
      ) : null}
      <Helmet
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      >
        <link
          rel="icon"
          type="image/png"
          href="http://mindreport.com/mkm/favicon.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Header />
      <div className="content" style={{ marginTop: 14, paddingTop: 14 }}>
        {typeof window !== "undefined" &&
        window.location.pathname.includes("club") ? (
          <HeaderClub />
        ) : null}
        {typeof window !== "undefined" &&
        window.location.pathname.includes("markelsheim") ? (
          <HeaderMarkelsheim />
        ) : null}
        {children}
      </div>
      <Footer />
    </div>
  )
}

export const Layout = withWindowSize<{}>(WrappedLayout)
