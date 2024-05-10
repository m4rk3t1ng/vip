import styled from "@emotion/styled"
import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { InjectedIntl } from "react-intl"
import { EXPERIENCES } from "../../utils/experiences-data"
import Experience from '../experience/experience'

function Experiences({ intl }: { intl: InjectedIntl }) {
  const experiences = EXPERIENCES;

  return (
    <div>
      <Container>
        {experiences.map((experience, index) => {
          const data = {
            index,
            experience
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

export default injectIntl(Experiences)
