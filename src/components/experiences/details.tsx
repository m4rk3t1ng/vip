import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { injectIntl } from "gatsby-plugin-intl"
import { InjectedIntl } from "react-intl"
import fonts from "../../utils/fonts"
import colors from "../../utils/colors"
import Experiences from "./experiences"
import Routes from "./routes"

const Details = ({ intl }: { intl: InjectedIntl }) => {
  const [selected, setSelected] = useState(true)
  return (
    <Section id="details" aria-label="benefits">
      <div className="details">
        <div className="experiences">
          <div
            className={selected ? "selected item" : "item"}
            dangerouslySetInnerHTML={{
              __html: intl.formatHTMLMessage({ id: "experiences.label" }),
            }}
            onClick={e => {
              setSelected(true)
            }}
          ></div>
        </div>
        <div className="routes">
          <div
            className={!selected ? "selected item" : "item"}
            dangerouslySetInnerHTML={{
              __html: intl.formatHTMLMessage({ id: "experiences.routes" }),
            }}
            onClick={e => {
              setSelected(false)
            }}
          ></div>
        </div>
      </div>
      <div className="details-sections">{getSelectedLabel(selected)}</div>
    </Section>
  )
}

function getSelectedLabel(selected) {
  return selected ? <Experiences /> : <Routes />
}

Details.propTypes = {
  selected: PropTypes.bool,
}

Details.defaultProps = {
  selected: true,
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin: 0 auto; 
  padding-top: 40px;

  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (max-width: 425px) {
    padding-top: 0;
  }

  .experiences, .routes {
    width: 48%;
    display: flex;

    .item {
      cursor: pointer;
      font-family: LibreBaskerville;
      font-size: 28px;
      font-weight: normal;
      font-stretch: normal;
      font-style: italic;
      line-height: normal;
      letter-spacing: 1px;
      text-align: center;
      color: #2c2c2c;
      padding: 0 7px;
    }
  }

  .routes {
    justify-content: flex-start;
    margin-left: 32px;
    .item {
      @media screen and (max-width: 768px) {
        // padding-top: 50px;
        margin-left: 23px;
      }
    
      @media screen and (max-width: 425px) {
        width: 31vw;
        margin-left: 0;
        font-size: 14px;
      }
    }
    @media screen and (max-width: 425px) {
      margin-left: 0;
    }
  }
  .experiences {
    margin-right: 32px;
    justify-content: flex-end;
    .item {
      @media screen and (max-width: 768px) {
        margin-right: 23px;
      }
    
      @media screen and (max-width: 425px) {
        width: fit-content;
        font-size: 14px;
        margin-right: 0;

      }
      @media screen and (max-width: 424px) {
        margin-right: 0px;
      }
    }

    @media screen and (max-width: 425px) {
      margin-right: 0;
    }
  }

  .details {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      margin-bottom: 40px;
    }
    @media (max-width: 500px) {
      padding-top: 45px
    }

    
    .selected {
      border-bottom: solid 5px #b9975c;
      padding-bottom: 3px;
    }

    .details-sections {
      width: 100%;
    }

  }
`

export default injectIntl(Details)
