import React from "react"
import Helmet from "react-helmet"

import { Layout } from "../components"

const Page: React.FC = () => (
  <Layout>
    <div className="animated fadeIn">
      <Helmet title={`Datenschutz`} />
      <h3 className="u-text-center font-light no-select">
        <span className="u u-LR">Datenschutz</span>
      </h3>
      <div className="divider" />
    </div>
  </Layout>
)

export default Page
