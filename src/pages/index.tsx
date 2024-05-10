import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { InjectedIntl } from "react-intl"

import "../utils/globals.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home/home"

const IndexPage = ({ intl }: { intl: InjectedIntl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "title" })} />
    <Home />
  </Layout>
)

export default injectIntl(IndexPage)
