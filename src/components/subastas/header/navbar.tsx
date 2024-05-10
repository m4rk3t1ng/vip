import React from "react"
import styled from "@emotion/styled"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { InjectedIntl } from "react-intl"
import { TweenMax, ScrollToPlugin } from "gsap/all"
import colors from "../../../utils/colors"
// @ts-ignore
import LogoHeaderSVG from "../../assets/logo-header.svg"
import LanguageSelector from "./language-selector"

const plugins = [ScrollToPlugin]

function Navbar({ intl }: { intl: InjectedIntl }) {
  const [currentLink, setCurrentLink] = React.useState("home")
  return (
    <Container>
      <nav>
        <ul>
          <li className="logo">
            <a href="https://myvipexperience.com/es/"
              target="_blank"
              rel="noopener">
              <LogoHeaderSVG />
            </a>
          </li>
        </ul>
      </nav>
      <LanguageSelector />
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 95%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    width: 95%;
    max-width: 1170px;
    margin: 0 auto;
    height: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    height: 100%;
    align-items: center;

    li {
      font-size: 0.5rem;
      a {
        text-decoration: none;
        color: ${colors.lightWithOpacity};

        &.active {
          color: ${colors.light};
          font-weight: 700;
        }
      }
      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
      @media (min-width: 1024px) {
        font-size: 1.1rem;
      }
    }

    .navbar-link {
      margin-left: 5px;

      @media (min-width: 375px) {
        margin-left: 20px;
      }
    }

    .logo {
      width: 120px;

      @media (min-width: 375px) {
        width: 150px;
      }

      @media (min-width: 768px) {
        width: 200px;
      }
    }

    .home-link {
      margin-left: auto;
    }
  }
`

export default injectIntl(Navbar)
