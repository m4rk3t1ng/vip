import styled from "@emotion/styled"
import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { InjectedIntl } from "react-intl"
import { ROUTES } from "../../utils/experiences-data"
import Experience from "../experience/experience"

function Routes({ intl }: { intl: InjectedIntl }) {
  const routes = ROUTES

  return (
    <div>
      <Container>
        {routes.map((route, index) => {
          const data = {
            index,
            experience: route,
          }
          return <Experience key={index} {...data} />
        })}
      </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12% 121px 12%;
  @media screen and (max-width: 1024px) {
    padding: 0 50px 60px 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 23px 15px 23px;
  }
`

export default injectIntl(Routes)
