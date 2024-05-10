import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import "../utils/globals.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { InjectedIntl } from "react-intl"
import TermsAndConditions from "../components/terms-and-conditions/terms-and-conditions"

function TermsAndConditionsPage({ intl }: { intl: InjectedIntl }) {
  return (
    <Layout headerOpacity={1}>
      <SEO title={intl.formatMessage({ id: "termsAndConditions.seo.title" })} />
      <TermsAndConditions />
    </Layout>
  )
}

export default injectIntl(TermsAndConditionsPage)
