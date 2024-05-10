import { injectIntl, Link } from "gatsby-plugin-intl"
import React, { useContext, useEffect } from "react"
import logo from "./logo.png"
import { useForm } from "react-hook-form"
import { InjectedIntl } from "react-intl"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import styled from "@emotion/styled"
import colors from "../../utils/colors"
import fonts from "../../utils/fonts"
import { SubastasService } from "../../services/subastasService"
import {
  SubastasContext
} from "../../providers/subastasContext"

function AuctionForm({ intl, onClose, id, bidAmount, update }) {
  const { subastasDispatch } = React.useContext(SubastasContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [bidInfo, setBidInfo] = React.useState({
    bidder: "",
    phone: "",
    email: "",
    bidAmount: 0,
  })
  const [bidSent, setBidSent] = React.useState(false)
  const { postBid } = SubastasService({ intl })
  const { getSubastas } = SubastasService({ intl })

  const sendForm = () => {
    postBid(id, bidInfo)
      .then(data => {
        setBidSent(true)
        getSubastas().then(response => {
          if (subastasDispatch && typeof subastasDispatch == 'function') {
            subastasDispatch({
              type: "GET_SUBASTAS",
              subastas: response.data.products,
            })
          }
          if (update) {
            update(bidInfo.bidAmount)
          }
        })
      })
      .catch(error => { })
  }

  return (
    <Modal>
      {bidSent ? (
        <div className="modal-confirmation">
          <Button
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
          >
            <span aria-hidden="true">&times;</span>
          </Button>
          <h1 className="confirmationText">{intl.formatMessage({ id: "subastas.confirmation" })}</h1>
          <h1 className="confirmationBody">
            {intl.formatMessage({ id: "subastas.bidSuccess" })}
          </h1>
          <button className="okButton" onClick={onClose}>
            OK
          </button>
        </div>
      ) : (
        <div className="modal-form">
          <div className="formBox">
            <Button
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
            <img src={logo} className="logo" />
            <form id="bidform" onSubmit={handleSubmit(sendForm)}>
              <h1 className="bidText">
                {intl.formatMessage({ id: "subastas.requirements" })}
              </h1>
              <div>
                <label className="labelBid">
                  {intl.formatMessage({ id: "subastas.fullname" })}
                </label>
                <br></br>
                <input
                  className="bidBox"
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  onChange={ev => {
                    setBidInfo({ ...bidInfo, bidder: ev.target.value })
                  }}
                />
                {errors.name && (
                  <p className="reminder">
                    {intl.formatMessage({ id: "name.reminder" })}
                  </p>
                )}
                <br></br>
                <label className="labelBid">
                  {intl.formatMessage({ id: "subastas.phone" })}
                </label>
                <br></br>
                <input
                  className="bidBox"
                  type="phone"
                  name="phone"
                  {...register("phone", { required: true })}
                  onChange={ev => {
                    setBidInfo({ ...bidInfo, phone: ev.target.value })
                  }}
                />
                {errors.phone && (
                  <p className="reminder">
                    {intl.formatMessage({ id: "phone.reminder" })}
                  </p>
                )}
                <br></br>
                <label className="labelBid">
                  {intl.formatMessage({ id: "subastas.email" })}
                </label>
                <br></br>
                <input
                  className="bidBox"
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  onChange={ev => {
                    setBidInfo({ ...bidInfo, email: ev.target.value })
                  }}
                />
                {errors.email && (
                  <p className="reminder">
                    {intl.formatMessage({ id: "email.reminder" })}
                  </p>
                )}
                <br></br>
                <label className="labelBid">
                  {intl.formatMessage({ id: "subastas.amount" })}
                </label>
                <br></br>
                <input
                  className="bidBox"
                  type="number"
                  name="bid"
                  {...register("bid", { required: true, min: bidAmount +1 })}
                  onChange={ev => {
                    setBidInfo({
                      ...bidInfo,
                      bidAmount: ev.target.valueAsNumber,
                    })
                  }}
                />
                <label className="bidReminder">
                  {intl.formatMessage({ id: "subastas.bidreminder" })}{" "}
                  {bidAmount}€
                </label>
              </div>
            </form>
            <button className="bidButton" type="submit" form="bidform">
              {intl.formatMessage({ id: "subastas.bid" })}
            </button>
          </div>
        </div>
      )}
    </Modal>
  )
}

const Modal = styled.div`
  .modal-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    isolation: isolate;
    padding: 3%;
    background: ${colors.formBackground};
    border: 1px solid #c9c9c9;
    @media (max-width: 385px) {
      width: 90%;
      height: 85%;
    }
  }
  .modal-confirmation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    padding: 3%;
    background: ${colors.formBackground};
    border: 1px solid #c9c9c9;
    order: 999;
    @media (max-width: 385px) {
      width: 90%;
    }
  }
  .confirmationText {
    font-family: ${fonts.secondary};
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 27px;
    text-align: center;
    color: ${colors.black};
    margin: 1%;
    @media (max-width: 385px) {
      width: 100%;
    }
  }
  .confirmationBody {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    font-family: ${fonts.secondary};
    font-style: normal;
    text-align: center;
    color: ${colors.black};
  }
  .okButton {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 56px;
    gap: 10px;
    width: 354px;
    height: 44px;
    cursor: pointer;
    font-family: ${fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: ${colors.goldButtons};
    border: 3px solid ${colors.goldButtons};
    margin-top: 5%;
    @media (max-width: 385px) {
      width: 100%;
      margin-top: 5%;
    }
  }
  .close {
    color: black;
    position: absolute;
    top: 8px;
    cursor: pointer;
    right: 8px;
    font-size: 30px;
    border: 2px solid ${colors.formBackground};
  }
  .formBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    @media (max-width: 385px) {
      width: 100%;
      gap: 40%;
    }
  }
  .logo {
    width: 71%;
    @media (max-width: 385px) {
      width: 80%;
    }
  }
  .bidText {
    width: 354px;
    height: 21px;
    font-family: ${fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    color: ${colors.black};
    @media (max-width: 385px) {
      width: 100%;
      margin-bottom: 15%;
    }
  }
  .labelBid {
    width: 121px;
    height: 20px;
    font-family: ${fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: ${colors.gray};
    flex: none;
    order: 0;
    flex-grow: 0;
    @media (max-width: 385px) {
      width: 100%;
    }
  }
  .bidBox {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 14px;
    width: 354px;
    height: 44px;
    background: ${colors.white};
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    @media (max-width: 385px) {
      width: 100%;
    }
  }
  .reminder {
    width: 338px;
    height: 20px;
    font-family: ${fonts.secondary};
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    margin-top: 3px;
    margin-bottom: 1px;
    color: ${colors.goldButtons};
    @media (max-width: 385px) {
      width: 100%;
    }
  }
  .bidReminder {
    width: 338px;
    height: 20px;
    font-family: ${fonts.secondary};
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: ${colors.goldButtons};
    @media (max-width: 385px) {
      width: 100%;
    }
  }
  .bidButton {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 56px;
    gap: 10px;
    width: 354px;
    height: 44px;
    cursor: pointer;
    font-family: ${fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: ${colors.goldButtons};
    border: 3px solid ${colors.goldButtons};
    @media (max-width: 385px) {
      width: 100%;
      margin-top: 5%;
    }
  }
`

export default injectIntl(AuctionForm)
