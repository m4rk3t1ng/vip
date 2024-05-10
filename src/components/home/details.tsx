import React from "react"
import styled from "@emotion/styled"
import { injectIntl } from "gatsby-plugin-intl"

// @ts-ignore
import ProfessionalitySVG from "../assets/ic_profesionalidad.svg"
// @ts-ignore
import CustomSVG from "../assets/ic_medida.svg"
// @ts-ignore
import TrustSVG from "../assets/ic_confianza.svg"
import { InjectedIntl } from "react-intl"

function Details({ intl }: { intl: InjectedIntl }) {
  return (
    <Container>
      <ul>
        <li>
          <ProfessionalitySVG />
          <h1>
            {intl.formatMessage({ id: "benefits.professionality.title" })}
          </h1>
          <p>
            {intl.formatMessage({ id: "benefits.professionality.description" })}
          </p>
        </li>
        <li>
          <CustomSVG />
          <h1>{intl.formatMessage({ id: "benefits.custom.title" })}</h1>
          <p>{intl.formatMessage({ id: "benefits.custom.description" })}</p>
        </li>
        <li>
          <TrustSVG />
          <h1>{intl.formatMessage({ id: "benefits.trust.title" })}</h1>
          <p>{intl.formatMessage({ id: "benefits.trust.description" })}</p>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    @media (min-width: 768px) {
      display: flex;
      align-content: space-between;
    }

    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      align-items: center;
      text-align: center;
      @media (min-width: 768px) {
        align-items: flex-start;
        text-align: left;
        margin-bottom: 0;
        margin-right: 20px;
      }
      @media (min-width: 1200px) {
        margin-bottom: 0;
        margin-right: 20px;
      }

      h1 {
        font-size: 1.1rem;
        font-weight: 400;
        margin-bottom: 0;
      }
      p {
        font-size: 1rem;
        font-weight: 300;
      }
    }
  }
`

export default injectIntl(Details)
