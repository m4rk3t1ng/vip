import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import {
  IntlContextConsumer,
  changeLocale,
  injectIntl,
} from "gatsby-plugin-intl"
import { InjectedIntl } from "react-intl"
import Select from "react-select"

// @ts-ignore
import WorldSVG from "../assets/lang-selector.svg"

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: "#2c2c2c",
    fontWeight: state.isSelected ? "bold" : "normal",
    backgroundColor: "transparent",
    padding: 15,
  }),
  indicatorSeparator: () => {},
  placeholder: provided => ({
    ...provided,
    color: "#FFFFFF",
  }),
  control: provided => ({
    ...provided,
    background: "transparent",
    border: "none",
    // none of react-select's styles are passed to <Control />
    width: 100,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = "opacity 300ms"

    return {
      ...provided,
      opacity,
      transition,
      color: "#FFFFFF",
      marginLeft: 30,
    }
  },
  menu: provided => ({
    ...provided,
    backgroundColor: "rgba(216,216,216, 0.75)",
    borderRadius: 0,
    width: "130%",
    right: 0,
  }),
  menuList: provided => ({
    ...provided,
    paddingBottom: 20,
    paddingTop: 20,
  }),
}

function LanguageSelector({ intl }: { intl: InjectedIntl }) {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <div
            css={css`
              display: flex;
              align-items: center;
              color: #FFFFFF;
              position: relative;
            `}
          >
            <WorldSVG
              style={{
                width: "20px",
                fill: "#FFFFFF",
                position: "absolute",
                left: "5px",
              }}
            />
            <Select
              styles={customStyles}
              ariaLabel="language-selector"
              isSearchable={false}
              placeholder={currentLocale.toUpperCase()}
              defaultValue={{
                value: currentLocale,
                label: currentLocale.toUpperCase(),
              }}
              isOptionDisabled={option => option.value === currentLocale}
              onChange={e => {
                changeLocale(e.value)
              }}
              options={languages.map(language => ({
                value: language,
                label: intl.formatMessage({ id: `language.${language}` }),
              }))}
            />
          </div>
        )}
      </IntlContextConsumer>
    </div>
  )
}

export default injectIntl(LanguageSelector)
