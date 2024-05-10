import React, { useContext, useEffect, useReducer, useState } from "react"

import BackgroundImage from "../../images/subastas/background.png"
import styled from "@emotion/styled"
import { injectIntl, Link } from "gatsby-plugin-intl"
import colors from "../../utils/colors"
import fonts from "../../utils/fonts"

// @ts-ignore
import Slash from "./../assets/LogoSlash.svg"
// @ts-ignore
import Consulado from "./../assets/logoconsuladoucraina.svg"
// @ts-ignore
import Vip from "./../assets/myvipexperiencefondo.svg"
//@ts-ignore
import Djerelo from "./../assets/logo-djerelo.svg"
import { InjectedIntl } from "react-intl"
import CardsManager from "./card/cardsManager"
import { SubastasService } from "../../services/subastasService"
import SubastasExperience from "./subastasExperience"
import ContactSubastas from "./contact-subastas"
import {
  SubastasContext,
  subastasReducer,
} from "../../providers/subastasContext"

function SubastasHome({ intl }: { intl: InjectedIntl }) {
  const [subastasState, subastasDispatch] = React.useReducer(subastasReducer, {
    subastas: [],
  })

  const { getSubastas } = SubastasService({ intl })
  const [expandedProduct, setExpandedProduct] = useState({
    isShowing: false,
    productInfo: {},
  })

  useEffect(() => {
    getSubastas().then(response => {
      subastasDispatch({
        type: "GET_SUBASTAS",
        subastas: response.data.products,
      })
    })
    window.scrollTo(0, 0)
  }, [])

  return (
    <SubastasContext.Provider value={{ subastasState, subastasDispatch }}>
      {expandedProduct.isShowing ? (
        <SubastasExperience></SubastasExperience>
      ) : (
        <>
          <Content>
            <div className="image">
              <div className="home-content">
                <h1 className="bold">
                  {intl.formatMessage({ id: "subastas.title" })}
                </h1>
                <p className="bold">
                  {intl.formatMessage({ id: "subastas.descriptionTitle1" })}
                </p>
              </div>
            </div>
            <div className="body-content">
              <p className="body-title">
                {intl.formatMessage({ id: "subastas.descriptionTitle2" })}
              </p>
              <p>{intl.formatMessage({ id: "subastas.description1" })}</p>
              <p>{intl.formatMessage({ id: "subastas.description2" })}</p>
            </div>
            <div className="icons">
              <div className="logos">
                <div>
                  <a
                    href="https://www.myvipexperience.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    <Vip />
                  </a>
                </div>
                <div >
                  <a
                    href="https://barcelona.mfa.gov.ua/es"
                    target="_blank"
                    rel="noopener"
                  >
                    <Consulado />
                  </a>
                </div>
              </div>
              <div className="logos">
                <div>
                  <a
                    href="https://slashmobility.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    <Slash />
                  </a>
                </div>
                <div className="subastas-logo">
                  <a
                    href="https://djerelo.eu/es/"
                    target="_blank"
                    rel="noopener"
                  >
                    <Djerelo />
                  </a>
                </div>
              </div>
            </div>
          </Content>
          <CardsManager products={subastasState.subastas}></CardsManager>
          <ContactSubastas />
        </>
      )}
    </SubastasContext.Provider>
  )
}

const Content = styled.div`
  .home-content {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    color: ${colors.light};

    .bold {
      font-weight: bold;
    }

    @media (min-width: 768px) {
      font-size: 1rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }
    @media (max-width: 600px) {
      font-size: 0.8rem;
      padding: 0px 50px;
      text-align: center;
    }
  }
  .body-content {
    padding: 40px 80px;
    color: ${colors.black};
    font-size: 16px;
    align-items: center;
    text-align: center;
    justify-content: center;

    .body-title {
      font-size: 18px;
      font-weight: bold;
      color: ${colors.secondary};
    }
  }

  h1 {
    font-family: ${fonts.main};
    font-weight: 400;
    margin-bottom: 0;
    font-size: 1.5rem;
    align-items: center;
    text-align: center;
    flex-direction: column;
    @media (min-width: 550px) {
      font-size: 2rem;
    }
    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }

  svg {
    width: 100%;
    fill: white;
  }

  .icons {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    @media (max-width: 830px) {
      flex-direction: column;
    }
    .logos {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 50%;
      @media (max-width: 830px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        flex-direction: column;
      }
    }
    .subastas-logo {
      max-width: 150px;
    }
  }
  .image {
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    height: 70vh;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      height: 35vh;
    }
  }
`
export default injectIntl(SubastasHome)
