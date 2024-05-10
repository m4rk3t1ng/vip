import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { InjectedIntl } from "react-intl"
import Card from "./card"
import styled from "@emotion/styled"

function CardsManager( {products , intl }) {
  return (
    <Cards>
      <div className="cards">
        {products.map(card => (
          <Card info={card} key={'Subasta'+ card.productId}></Card>
        ))}
      </div>
    </Cards>
  )
}

const Cards = styled.div`
  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 0;
    justify-content: space-around;

  }
`

export default injectIntl(CardsManager)
