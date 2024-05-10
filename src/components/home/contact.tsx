import React from "react"
import styled from "@emotion/styled"
import { injectIntl } from "gatsby-plugin-intl"
import colors from "../../utils/colors"
import { InjectedIntl } from "react-intl"
import fonts from "../../utils/fonts"
// @ts-ignore
import LogoFooterSVG from "../assets/logo-footer.svg"

function Contact({ intl }: { intl: InjectedIntl }) {
  return (
    <Section aria-labelledby="contact">
      <h1 id="contact">{intl.formatMessage({ id: "contact.title" })}</h1>
      <div className="logo-footer">
        <LogoFooterSVG />
      </div>
      <p>
        {intl.formatMessage({ id: "contact.description" })}{" "}
        <a
          href="mailto:contactus@myvipexperience.com"
          target="_blank"
          rel="noopener"
        >
          contactus@myvipexperience.com
        </a>
      </p>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${colors.primary};
  color: ${colors.light};
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 50px;
  @media (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  h1 {
    font-family: ${fonts.main};
    font-weight: 400;
    text-align: center;
    font-style: italic;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
    @media (min-width: 1200px) {
      font-size: 3rem;
    }
  }

  .logo-footer {
    margin: 100px auto 0 auto;
    width: 200px;
    @media (min-width: 768px) {
      width: 250px;
    }
    @media (min-width: 1024px) {
      margin: 120px auto 0 auto;
      width: 350px;
    }
  }

  p {
    font-family: ${fonts.main};
    margin: 40px auto 0 auto;
    text-align: center;
    width: 280px;
    @media (min-width: 768px) {
      width: 380px;
    }
    @media (min-width: 1024px) {
      width: 450px;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.light};
  }
`

export default injectIntl(Contact)
