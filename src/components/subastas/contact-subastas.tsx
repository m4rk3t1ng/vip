import React from "react"
import styled from "@emotion/styled"
import { injectIntl } from "gatsby-plugin-intl"
import colors from "../../utils/colors"
import { InjectedIntl } from "react-intl"
import fonts from "../../utils/fonts"
// @ts-ignore
import LogoFooterSVG from "../assets/logo-header.svg"
// @ts-ignore
import Slash from "./../assets/LogoSlash.svg"
// @ts-ignore
import Consulado from "./../assets/logoconsuladoucraina.svg"
import LogoFooter from "./logo_VIP_header.png"
//@ts-ignore
import Djerelo from "./../assets/logo-djerelo.svg"

function ContactSubastas({ intl }: { intl: InjectedIntl }) {
  return (
    <Section aria-labelledby="contact">
      <h1 id="contact">{intl.formatMessage({ id: "subastas.contact" })}</h1>
      <p className="title">
        {intl.formatMessage({ id: "subastas.email.us" })}{" "}
        <a
          className="mail"
          href="mailto:contactus@myvipexperience.com"
          target="_blank"
          rel="noopener"
        >
          contactus@myvipexperience.com
        </a>
      </p>
      <div className="initiative">
        <div className="container">
          <div>
            <p>{intl.formatMessage({ id: "subastas.initiative" })} </p>
          </div>
          <div className="logo">
            <a
              href="https://myvipexperience.com/es/"
              target="_blank"
              rel="noopener"
            >
              <img src={LogoFooter} className="logo" />
            </a>
          </div>
          <div className="logo">
            <a href="https://slashmobility.com/" target="_blank" rel="noopener">
              <Slash />
            </a>
          </div>
        </div>
        <div className="container">
          <div>
            <p>{intl.formatMessage({ id: "subastas.for" })} </p>
          </div>
          <div className="logo">
            <a
              href="https://barcelona.mfa.gov.ua/es"
              target="_blank"
              rel="noopener"
            >
              <Consulado />
            </a>
          </div>
          <div className="logo">
            <a href="https://djerelo.eu/es/" target="_blank" rel="noopener">
              <Djerelo />
            </a>
          </div>
        </div>
        <div className="container">
          <div>
            <p>{intl.formatMessage({ id: "subastas.designby" })} </p>
          </div>
          <div className="logo">
            <a href="https://slashmobility.com/" target="_blank" rel="noopener">
              <Slash />
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${colors.gray};
  color: ${colors.light};
  margin-top: 50px;
  padding-top: 5%;
  padding-bottom: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-top: 3%;
    padding-bottom: 3%;
  }

  h1 {
    font-family: ${fonts.main};
    font-weight: 400;
    text-align: center;
    font-style: italic;
    @media (min-width: 600px) {
      font-size: 2rem;
    }
    @media (min-width: 1200px) {
      font-size: 3rem;
    }
  }

  .mail {
    text-decoration: none;
    color: ${colors.light};
  }

  .initiative {
    width: 80%;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    flex-direction: row;
    @media (max-width: 600px) {
      flex-direction: column;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      justify-content: stretch;
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 200px;
        a {
          min-width: 200px;
        }
      }
    }

    p {
      text-align: center;
      padding: 20px 0px;
      font-size: 21px;
    }
  }

  p.title {
    font-family: ${fonts.main};
    margin: 10px auto 0 auto;
    text-align: center;
    width: 90%;
    font-size: 18px;
    @media (min-width: 768px) {
      width: 80%;
    }
    @media (min-width: 1024px) {
      width: 80%;
    }
  }
`

export default injectIntl(ContactSubastas)
