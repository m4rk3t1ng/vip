import React from "react"
import styled from "@emotion/styled"
import { injectIntl } from "gatsby-plugin-intl"
import { InjectedIntl } from "react-intl"
import fonts from "../../utils/fonts"
import colors from "../../utils/colors"
import Details from "./details"

function Benefits({ intl }: { intl: InjectedIntl }) {
  return (
    <Section id="benefits" aria-label="benefits">
      <div className="benefits">
        <p
          dangerouslySetInnerHTML={{
            __html: intl.formatHTMLMessage({ id: "benefits.mainTitle" }),
          }}
        />
        <p>{intl.formatMessage({ id: "benefits.description" })}</p>
      </div>
      <Details />
    </Section>
  )
}

const Section = styled.section`
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
  /* margin-top: 100px; */
  padding-top: 75px;

  .benefits {
    p {
      font-family: ${fonts.main};
      color: ${colors.primary};
      font-size: 1.75rem;
      flex: 1;
      margin-top: 0;
      > span {
        border-bottom: 3px solid ${colors.secondary};
      }
      &:nth-of-type(2) {
        font-family: ${fonts.secondary};
        font-size: 1.2rem;
        @media (min-width: 768px) {
          margin-left: 30px;
        }
      }
    }

    @media (min-width: 768px) {
      display: flex;
      align-items: flex-start;
    }
  }
`

export default injectIntl(Benefits)
