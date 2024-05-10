import React, { useEffect, useState } from "react"

import BackgroundImage from "../../images/subastas/image_experience.png"
import styled from "@emotion/styled"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { TweenMax, ScrollToPlugin } from "gsap/all"
import colors from "../../utils/colors"
import fonts from "../../utils/fonts"
import { InjectedIntl } from "react-intl"
import { SubastasService } from "../../services/subastasService"
import ContactSubastas from "../subastas/contact-subastas"
import Timer from "./timer"
import moment from "moment"
import { navigate } from "gatsby"
import AuctionForm from "./auction-form"

const plugins = [ScrollToPlugin]

function SubastasExperience({ intl, id }: { intl: InjectedIntl, id: number }) {
  const [showModal, setShowModal] = useState(false)
  const [bidActive, setBidActivity] = useState(true)
  const changeBidActivity = () => {
    if (bidActive) {
      setBidActivity(!bidActive)
    }
  }
  const toggleShow = () => {
    setShowModal(!showModal)
  }

  const { getSubasta } = SubastasService({ intl })
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    secondTitle: "",
    description: "",
    startingPrice: 0,
    deadline: "",
    biographyDonor: "",
    termsAndConditions: "",
    highestBid: 0,
    highestBidder: '',
    pictureList: []
  })
  const [childData, setChildData] = useState(0)

  useEffect(() => {
    getSubasta(id)
      .then(response => {
        console.log(response)
        setProduct(response.data)
      })
      .catch(error => {})
  }, [])

  return (
    <>
      <>
        <Content>
          <div className="timer">
            <Timer deadline={moment(product.deadline)} onBidEnded={changeBidActivity}></Timer>
          </div>
          <div>
            <div className="experience-content">
              <div className="textHeader">
                <div className="title">{product.name}</div>
                <div className="subtitle">{product.description}</div>
                <div className="bid">
                  <div className="initial-bid">
                    {bidActive
                  ?  intl.formatMessage({ id: "subEx.initialbid" }) : intl.formatMessage({ id: "subEx.endedBid" })}{" "}
                    {bidActive && (product.startingPrice ?? 0) + "€"}
                  </div>
                  <div className={bidActive ? "last-person" : "last-person-ended"}>
                    {bidActive ? intl.formatMessage({ id: "subEx.finalbid" }): intl.formatMessage({ id: "card.endedBid" })}{" "}
                    {(childData || product.highestBid) ?? product.startingPrice}€
                  </div>
                  {bidActive &&
                    <div className="button">
                        <button className="button-text" onClick={toggleShow}>
                        {intl.formatMessage({ id: "card.bid" })}
                      </button>
                      {showModal && (
                        <div className="form-wrapper">
                          <AuctionForm
                            id={product.id}
                            onClose={toggleShow}
                            bidAmount={product.highestBid ?? product.startingPrice}
                            update={setChildData}
                          ></AuctionForm>
                        </div>
                      )}
                    </div>}
                </div>
              </div>
              <div
                className="bgImage"
                style={{
                  backgroundImage: `url(data:image/${product.pictureList[0]?.pictureExtension};base64,${product.pictureList[0]?.picture})`,
                }}
              ></div>
            </div>
            <div className="info">
              <div className="second-title">
                {intl.formatMessage({ id: "subEx.secondTitle" })}
              </div>
              <div>{product.secondTitle}</div>
              <div className="biography">
                {intl.formatMessage({ id: "subEx.biography" })}
              </div>
              <div>{product.biographyDonor}</div>
              <div className="terms">
                {intl.formatMessage({ id: "subEx.terms" })}
              </div>
              <div>{product.termsAndConditions}</div>
            </div>
          </div>
        </Content>
      </>
      <ContactSubastas />
    </>
  )
}

const Content = styled.div`
  .timer {
    position: sticky;
    left: 20px;
    top: 90px;
    width: 173px;
    height: 98px;
  }
  .experience-content {
    background-color: ${colors.grey};
    font-family: ${fonts.secondary};
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    .textHeader {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 40px 160px 40px 160px;
      @media (max-width: 768px) {
        padding: 60px 40px 60px 40px;
      }
      .title,
      .subtitle {
        color: ${colors.black};
        padding-top: 8px;
        padding-bottom: 8px;
      }
      .title {
        font-family: ${fonts.main};
        font-size: 30px;
      }
      .subtitle {
        font-size: 23px;
        padding-bottom: 50px;
      }
    }
    .bgImage {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 100%;
      @media (max-width: 768px) {
        height: 432px;
      }
    }
    .bid {
      color: ${colors.secondary};
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: left;
      padding-top: 50px;
      .initial-bid,
      .last-person {
        padding-top: 8px;
        padding-bottom: 8px;
      }
      .last-person-ended {
          font-size: 18px;
          color: ${colors.red};
        }
      .button {
        display: flex;
        align-items: center;
        width: 100%;
        padding-top: 8px;
        .button-text {
          width: 100%;
          font-size: 18px;
          text-align: center;
          border: solid 3px ${colors.secondary};
          border-radius: 3px;
          color: ${colors.secondary};
          background-color: transparent;
          margin: 0 auto;
          padding: 10px;
        }
        .button-text:hover {
          border: solid 3px ${colors.secondary};
          background-color: ${colors.secondary};
          color: ${colors.white};
        }
        .form-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          z-index: 99;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  .info {
    color: ${colors.black};
    text-align: left;
    font-size: 18px;
    padding: 30px 300px 0 300px;
    white-space: break-spaces;
    line-height: 30px;
    @media (max-width: 1100px) {
      padding: 10px 150px 10px 150px;
    }
    @media (max-width: 768px) {
      padding: 10px 80px 10px 80px;
    }
    .second-title,
    .biography,
    .terms {
      color: ${colors.secondary};
      text-align: left;
      font-size: 20px;
      padding: 60px 0px 24px 0px;
      font-weight: bold;
    }
  }
`

export default injectIntl(SubastasExperience)
