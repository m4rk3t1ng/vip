import React, { useState } from "react"
import styled from "@emotion/styled"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { InjectedIntl } from "react-intl"
import colors from "../../../utils/colors"
import fonts from "../../../utils/fonts"
// @ts-ignore
import Foto from "../../../images/cards/card_img2.png"
import AuctionForm from "../auction-form"
import Button from "react-bootstrap/Button"
import Timer from "../timer"
import moment from "moment"
import SubastasExperience from "../subastasExperience"
import { navigate } from "gatsby"
import Slider from "react-slick"
import Img from "gatsby-image"
// @ts-ignore
import ArrowLeft from "../../assets/left-arrow.svg"
// @ts-ignore
import ArrowRight from "../../assets/right-arrow.svg"

interface Picture {
  picture: string
  pictureExtension: string
}

interface CardProps {
  intl: InjectedIntl
  info: {
    productId: Number
    name: String
    secondTitle: String
    startingPrice: Number
    deadline: Date
    bidAmount: Number
    bidder: String
    pictureList: Array<Picture>
  }
}

function Card(props: CardProps) {
  const intl = props.intl
  const [showModal, setShowModal] = useState(false)
  const [bidActive, setBidActivity] = useState(true)
  const toggleShow = () => {
    setShowModal(!showModal)
  }

  const changeBidActivity = () => {
    if (bidActive) {
      setBidActivity(!bidActive)
    }
  }

  function showMore(id) {
    navigate(`/${intl.locale}/subastas/${id}`)
  }

  const images = []
  if (props.info.pictureList) {
    for (const picture of props.info.pictureList) {
      images.push(
        `data:image/${picture.pictureExtension};base64,${picture.picture}`
      )
    }
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    // arrows: true,
    // prevArrow: <ArrowLeft />,
    // nextArrow: <ArrowRight />,
  }

  return (
    <StyledCard>
      <div className="card-content">
        <div className="image">
          <Slider {...settings}>
            {images.map(img => (
              <div key={img} style={{ position: "absolute" }}>
                <Img
                  className="image"
                  fluid={{
                    sizes: "",
                    aspectRatio: 0,
                    src: img,
                    srcSet: "",
                  }}
                />
              </div>
            ))}
          </Slider>
          <div className="timer-container">
            <Timer
              deadline={moment(props.info.deadline)}
              onBidEnded={changeBidActivity}
            ></Timer>
          </div>
        </div>
        <div className="info">
          <div className="title">{props.info.name}</div>
          <div className="description">{props.info.secondTitle}</div>
          <div className="read" onClick={() => showMore(props.info.productId)}>
            {intl.formatMessage({ id: "experiences.see.more" })}
          </div>
          <div className="bid">
            <div className="data">
              <div className="initial-bid">
                {bidActive
                  ? intl.formatMessage({ id: "subEx.initialbid" })
                  : intl.formatMessage({ id: "subEx.endedBid" })}{" "}
                {bidActive && (props.info.startingPrice ?? 0) + "€"}
              </div>
              <div className={bidActive ? "last-person" : "last-person-ended"}>
                {bidActive ? intl.formatMessage({ id: "card.last.bid" }) : intl.formatMessage({ id: "card.endedBid" })}{" "}
                {props.info.bidAmount ?? props.info.startingPrice}€
              </div>
            </div>
            {bidActive && (
              <div className="button">
                <button className="button-text" onClick={toggleShow}>
                  {intl.formatMessage({ id: "card.bid" })}
                </button>
                {showModal && (
                  <div className="form-wrapper">
                    <AuctionForm
                      id={props.info.productId}
                      bidAmount={
                        props.info.bidAmount ?? props.info.startingPrice
                      }
                      onClose={toggleShow}
                    ></AuctionForm>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  @media (min-width: 1450px) {
    width: 33.33%;
    padding: 20px;
  }

  .card-content {
    width: 100%;
    background-color: ${colors.backgroundItems};
    font-family: ${fonts.secondary};
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    position: relative;
    @media (max-width: 600px) {
      width: 90%;
      margin: 40px 0px;
    }

    .image {
      width: 100%;
      height: 450px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      position: relative;

      .timer-container {
        position: absolute;
        display: flex;
        width: 217px;
        height: 98px;
        top: 20px;
        right: 20px;
        @media (max-width: 600px) {
          height: 0px;
        }
      }
    }

    .info {
      padding: 30px;
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
      align-content: space-between;

      .title,
      .description {
        color: ${colors.black};
        padding-bottom: 16px;
      }

      .title,
      .read {
        font-weight: bold;
      }

      .title {
        font-family: ${fonts.main};
        font-size: 20px;
        @media (max-width: 600px) {
          font-size: 18px;
          text-align: left;
        }
      }

      .description {
        font-size: 18px;
        text-align: left;
        white-space: break-spaces;
        @media (max-width: 600px) {
          font-size: 16px;
        }
      }

      .read {
        color: ${colors.secondary};
        font-size: 17px;
        text-decoration: underline;
        cursor: pointer;
        padding-bottom: 16px;
        @media (max-width: 600px) {
          font-size: 15px;
        }
      }

      .bid {
        color: ${colors.secondary};
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 30px;
        @media (max-width: 600px) {
          flex-direction: column;
        }
        .data {
          width: 50%;
          align-items: center;
          justify-content: center;
          @media (max-width: 600px) {
            width: 100%;
          }
        }
        .initial-bid,
        .last-person {
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .last-person-ended {
          font-size: 18px;
          color: ${colors.red};
        }

        .button {
          display: flex;
          align-items: center;
          width: 50%;
          @media (max-width: 600px) {
            width: 100%;
            padding-top: 16px;
          }

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
  }
`

export default injectIntl(Card)
