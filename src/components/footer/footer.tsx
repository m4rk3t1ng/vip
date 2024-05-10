import styled from "@emotion/styled"
import { injectIntl, Link } from "gatsby-plugin-intl"
import React, { useState, useEffect } from "react"
import { InjectedIntl } from "react-intl"
import colors from "../../utils/colors"
// @ts-ignore
import FacebookSVG from "./../assets/facebook.svg"
// @ts-ignore
import InstagramSVG from "../assets/instagram.svg"

function Footer({ intl }: { intl: InjectedIntl }) {
  const [social, setSocial] = useState(<></>)
  const PATHS = ["ayuda", "info-experiences"]

  useEffect(() => {
    if (PATHS.some(path => window.location.pathname.includes(path))) {
      setSocial(
        <div className="social-icons">
          <div className="social-icon">
            <a href="https://www.facebook.com/myvipexperience1" target="_blank" rel="noopener">
              <FacebookSVG />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/myvipexperience/" target="_blank" rel="noopener">
              <InstagramSVG />
            </a>
          </div>
        </div>
      )
    }
  }, [])

  return (
    <StyledFooter>
      <div className="footer-content">
        <div>{intl.formatMessage({ id: "footer.copyright" })}</div>
        <div className="footer-links">
          <div>
            <Link to="/terms-and-conditions">
              {intl.formatMessage({ id: "footer.privacy" })}
            </Link>
          </div>
        </div>
        {social}
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: #000000;
  color: ${colors.light};
  height: 200px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: static;

  .footer-content {
    width: 90%;
    max-width: 1170px;
    margin: 0 auto;

    a {
      text-decoration: none;
      color: ${colors.light};
    }

    @media (min-width: 768px) {
      padding: 0 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-links {
      width: 100%;
      max-width: 350px;
      margin-top: 15px;
      > div {
        margin-top: 15px;
      }
      @media (min-width: 768px) {
        margin-top: 0;
        display: flex;
        justify-content: center;
        > div {
          margin-top: 0;
        }
      }
    }

    .social-icons {
      display: flex;
      align-items: center;
      > div:nth-of-type(1) {
        margin-right: 40px;
      }
      .social-icon {
        svg {
          width: 1.3rem;
        }
      }
      @media (max-width: 768px) {
        margin-top: 10px;
        display: flex;
      }
    }
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
    height: 80px;
  }
`

export default injectIntl(Footer)
