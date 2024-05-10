import React from "react"
import styled from "@emotion/styled"
import { injectIntl } from "gatsby-plugin-intl"
import { InjectedIntl } from "react-intl"
import colors from "../../utils/colors"
import fonts from "../../utils/fonts"

// @ts-ignore
import SquareSVG from "../assets/square.svg"

function TermsAndConditions({ intl }: { intl: InjectedIntl }) {
  return (
    <Container>
      <h1>{intl.formatMessage({ id: "termsAndConditions.title" })}</h1>
      <p>{intl.formatMessage({ id: "termsAndConditions.p1" })}</p>
      <p>{intl.formatMessage({ id: "termsAndConditions.p2" })}</p>
      <p>{intl.formatMessage({ id: "termsAndConditions.p3" })}</p>
      <p>{intl.formatMessage({ id: "termsAndConditions.p4" })}</p>

      <section aria-labelledby="cookies-ppolicy-title">
        <h2 id="cookies-ppolicy-title">
          {intl.formatMessage({ id: "termsAndConditions.cookiesPolicy.title" })}
        </h2>
        <p>
          {intl.formatMessage({ id: "termsAndConditions.cookiesPolicy.p1" })}
        </p>
        <p>
          {intl.formatMessage({ id: "termsAndConditions.cookiesPolicy.p2" })}
        </p>
      </section>

      <section aria-labelledby="cookies-type-title">
        <h2 id="cookies-type-title">
          {intl.formatMessage({ id: "termsAndConditions.cookiesType.title" })}
        </h2>
        <p>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.subtitle",
          })}
        </p>

        <h3 style={{ marginBottom: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section1.title",
          })}
        </h3>
        <p style={{ marginTop: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section1.description1",
          })}
        </p>
        <p style={{ marginBottom: 0, marginTop: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section1.description2",
          })}
        </p>
        <p style={{ marginBottom: 0, marginTop: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section1.description3",
          })}
        </p>
        <p style={{ marginTop: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section1.description4",
          })}
        </p>

        <h3 style={{ marginBottom: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section2.title",
          })}
        </h3>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section2.description1",
          })}
        </p>
        <p style={{ marginTop: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section2.description2",
          })}
        </p>

        <h3 style={{ marginBottom: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section3.title",
          })}
        </h3>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section3.description1",
          })}
        </p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section3.description2",
          })}
        </p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section3.description3",
          })}
        </p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section3.description4",
          })}
        </p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section3.description5",
          })}
        </p>
        <p style={{ marginTop: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.cookiesType.section3.description6",
          })}
        </p>

        <table>
          <tr>
            <td colSpan={2} style={{ border: "none" }} />
            <th colSpan={4} className="column-header">
              {intl.formatMessage({
                id: "temrsAndConditions.table.columns.title",
              })}
            </th>
          </tr>
          <tr>
            <td colSpan={2} style={{ border: "none" }} />
            <td style={{ borderTop: "none" }}>
              {intl.formatMessage({ id: "termsAndConditions.table.columns1" })}
            </td>
            <td style={{ borderTop: "none" }}>
              {intl.formatMessage({ id: "termsAndConditions.table.columns2" })}
            </td>
            <td style={{ borderTop: "none" }}>
              {intl.formatMessage({ id: "termsAndConditions.table.columns3" })}
            </td>
            <td style={{ borderTop: "none" }}>
              {intl.formatMessage({ id: "termsAndConditions.table.columns4" })}
            </td>
          </tr>
          <tr>
            <th rowSpan={6} className="row-header-container">
              <span className="row-header">
                {intl.formatMessage({
                  id: "termsAndConditions.table.rows.title",
                })}
              </span>
            </th>
          </tr>
          <tr>
            <td style={{ textAlign: "left", borderLeft: "none" }}>
              {intl.formatMessage({ id: "termsAndConditions.table.rows1" })}
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", borderLeft: "none" }}>
              {intl.formatMessage({ id: "termsAndConditions.table.rows2" })}
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", borderLeft: "none" }}>
              {intl.formatMessage({ id: "termsAndConditions.table.rows3" })}
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square crossed">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square crossed">
                <SquareSVG />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", borderLeft: "none" }}>
              {intl.formatMessage({ id: "termsAndConditions.table.rows4" })}
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", borderLeft: "none" }}>
              {intl.formatMessage({ id: "termsAndConditions.table.rows5" })}
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
            <td>
              <div className="square">
                <SquareSVG />
              </div>
            </td>
          </tr>
        </table>

        <p>{intl.formatMessage({ id: "termsAndConditions.table.p1" })}</p>
        <p>{intl.formatMessage({ id: "termsAndConditions.table.p2" })}</p>
      </section>

      <section aria-labelledby="how-to-disable-title">
        <h2>
          {intl.formatMessage({ id: "termsAndConditions.disable.title" })}
        </h2>
        <p style={{ marginBottom: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.disable.description1",
          })}
        </p>
        <p style={{ marginTop: 0 }}>
          {intl.formatMessage({
            id: "termsAndConditions.disable.description2",
          })}
        </p>
        <ul>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatHTMLMessage({
                  id: "termsAndConditions.disable.link1",
                }),
              }}
            />
          </li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatHTMLMessage({
                  id: "termsAndConditions.disable.link2",
                }),
              }}
            />
          </li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatHTMLMessage({
                  id: "termsAndConditions.disable.link3",
                }),
              }}
            />
          </li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatHTMLMessage({
                  id: "termsAndConditions.disable.link4",
                }),
              }}
            />
          </li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatHTMLMessage({
                  id: "termsAndConditions.disable.link5",
                }),
              }}
            />
          </li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatHTMLMessage({
                  id: "termsAndConditions.disable.link6",
                }),
              }}
            />
          </li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatHTMLMessage({
                  id: "termsAndConditions.disable.link7",
                }),
              }}
            />
          </li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatHTMLMessage({
                  id: "termsAndConditions.disable.link8",
                }),
              }}
            />
          </li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatHTMLMessage({
                  id: "termsAndConditions.disable.link9",
                }),
              }}
            />
          </li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatHTMLMessage({
                  id: "termsAndConditions.disable.link10",
                }),
              }}
            />
          </li>
        </ul>
      </section>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  padding-top: 60px;
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
  color: ${colors.primary};

  h1 {
    font-size: 2.5rem;
    text-align: center;
    color: ${colors.secondary};
    font-family: ${fonts.main};
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 4.5rem;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 2em;
  }

  table {
    width: 100%;
    margin: 2em auto;
    border-collapse: collapse;
    font-size: 0.5rem;

    @media (min-width: 375px) {
      font-size: 0.6rem;
    }

    @media (min-width: 768px) {
      font-size: 1rem;
    }

    td {
      border: 1px solid ${colors.primary};
    }

    td,
    th {
      text-align: center;
      padding: 5px;
      @media (min-width: 768px) {
        padding: 10px;
      }
    }

    .column-header {
      padding: 1rem 0;
      background: ${colors.secondary};

      @media (min-width: 768px) {
        padding: 1.15rem 0;
      }
    }

    .row-header-container {
      background: ${colors.secondary};
      width: 70px;
    }

    .row-header {
      transform: rotate(-90deg);
      display: block;
    }

    .square {
      width: 10px;
      height: 10px;
      display: inline-block;
      svg {
        stroke: ${colors.secondary};
        fill: none;
        rect {
          stroke-width: 10px;
        }
        #cross-line {
          display: none;
          stroke-width: 5px;
        }
      }

      &.crossed {
        svg {
          #cross-line {
            display: block;
          }
        }
      }

      @media (min-width: 375px) {
        width: 15px;
        height: 15px;
      }

      @media (min-width: 768px) {
        width: 20px;
        height: 20px;
      }
    }
  }

  ul {
    li {
      margin-bottom: 0.5rem;
      span {
        display: block;
        width: 100%;
        word-break: break-all;
      }
    }
  }

  @media (min-width: 1024px) {
    padding-top: 120px;
  }
`

export default injectIntl(TermsAndConditions)
