import React from "react"
import styled from "@emotion/styled"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { InjectedIntl } from "react-intl"
import { TweenMax, ScrollToPlugin } from "gsap/all"
import colors from "../../utils/colors"
// @ts-ignore
import LogoHeaderSVG from "../assets/logo-header.svg"
import LanguageSelector from "./language-selector"
import { navigate } from "gatsby"

const plugins = [ScrollToPlugin]

function Navbar({ intl }: { intl: InjectedIntl }) {
  const [currentLink, setCurrentLink] = React.useState("home")

  return (
    <Container>
      <nav>
        <ul>
          <li className="logo">
            <LogoHeaderSVG />
          </li>
          {/* <li className="home-link navbar-link">
            <a
              href="#home"
              className={`${currentLink === "home" ? "active" : ""}`}
              onClick={e => {
                e.preventDefault()
                setCurrentLink("home")
                // scrollto
                TweenMax.to(window, 0.5, { scrollTo: { y: 0 } })
              }}
            >
              {intl.formatMessage({ id: "navbar.link1" })}
            </a>
          </li>
          <li className="navbar-link">
            <a
              href="#benefits"
              className={`${currentLink === "benefits" ? "active" : ""}`}
              onClick={e => {
                e.preventDefault()
                setCurrentLink("benefits")
                // scrollto
                const benefitsElem = document.getElementById("benefits")
                const { top } = benefitsElem.getBoundingClientRect()
                TweenMax.to(window, 0.5, {
                  scrollTo: { y: top },
                })
              }}
            >
              {intl.formatMessage({ id: "navbar.link2" })}
            </a>
          </li>
          <li className="navbar-link">
            <a
              href="#contact"
              className={`${currentLink === "contact" ? "active" : ""}`}
              onClick={e => {
                e.preventDefault()
                setCurrentLink("contact")
                // scrollto
                const contactElem = document.getElementById("contact")
                const { top } = contactElem.getBoundingClientRect()
                TweenMax.to(window, 0.5, {
                  scrollTo: { y: top },
                })
              }}
            >
              {intl.formatMessage({ id: "navbar.link3" })}
            </a>
          </li> */}
        </ul>
      </nav>
      <div className="wrapper">
        <div>
          {" "}
          <LanguageSelector />
        </div>
        <div>
          <button
            className="subastaButton"
            onClick={() => {
              navigate("/ayuda-niños-ucranianos")
            }}
          >
            GastroSubasta Solidaria
          </button>
        </div>
      </div>
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
  .wrapper{
    display: flex;
    flex-direction: row;
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  .subastaButton {
    //width: 30%;
    height: 56px;
    margin-right: 2%;
    border: solid 3px #b9975c;
    background-color: rgba(62, 62, 62, 0.12);
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.78px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    @media (max-width: 425px) {
      width: 90%;
      margin-right: 0px;
    }
  }
  .subastaButton:hover {
    border: solid 3px #b9975c;
    background-color: #b9975c;
  }
`

export default injectIntl(Navbar)
