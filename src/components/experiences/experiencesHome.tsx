import React from "react"
import styled from "@emotion/styled"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { TweenMax, ScrollToPlugin } from "gsap/all"
import Carousel from "./carousel"
import Benefits from "./details"
import colors from "../../utils/colors"
import fonts from "../../utils/fonts"
// @ts-ignore
import ArrowDown from "../assets/down-arrow.svg"
import Details from "./details"

const plugins = [ScrollToPlugin]

function ExperiencesHome({ intl }) {
  return (
    <div>
      <Carousel imagePrefix="slide" />
      <Content>
        <h1>{intl.formatMessage({ id: "experiences.title" })}</h1>
        <p>{intl.formatMessage({ id: "experiences.subtitle" })}</p>
        <button
          onClick={e => {
            e.preventDefault()
            // scrollto
            const detailsElem = document.getElementById("details")
            const headerElem = document.getElementById("header-bar")
            const { top } = detailsElem.getBoundingClientRect()
            const hedaerHeight = headerElem.clientHeight
            const currentScrollPos = window.scrollY
            TweenMax.to(window, 0.5, {
              scrollTo: { y: currentScrollPos + (top - hedaerHeight) },
            })
          }}
        >
          <ArrowDown />
        </button>
      </Content>
      <Details />
    </div>
  )
}

const Content = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 2;
  position: relative;
  justify-content: center;
  width: 90%;
  max-width: 1170px;
  color: ${colors.light};
  flex-direction: column;
  margin: 0 auto;
  pointer-events: none;
  .more {
    width: 277px;
    height: 56px;
    border: solid 3px #b9975c;
    background-color: rgba(62, 62, 62, 0.12);
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.78px;
    text-align: center;
    color: #ffffff;
  }
  .more:hover {
    border: solid 3px #b9975c;
    background-color: #b9975c;
  }
  h1 {
    font-family: ${fonts.main};
    font-weight: 400;
    margin-bottom: 0;

    text-align: center;
    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
    @media (min-width: 1024px) {
      font-size: 4rem;
    }
    @media (max-width: 425px) {
      font-size: 36px;
      text-align: center;
      margin: 0 auto;
      width: 70%;
      margin-bottom: 14px;
    }
  }
  p {
    font-size: 0.65rem;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }
    @media (max-width: 425px) {
      font-size: 14px;
      text-align: center;
    }
    font-weight: 500;
    text-transform: uppercase;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    margin-top: 2em;
    padding: 0;
    pointer-events: all;
  }

  svg {
    width: 100%;
    fill: white;
  }

  @media (min-width: 768px) {
    height: 100vh;
  }
`

export default injectIntl(ExperiencesHome)
