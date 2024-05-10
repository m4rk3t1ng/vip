import styled from "@emotion/styled"
import { injectIntl } from "gatsby-plugin-intl"
import React, { useState } from "react"
import { InjectedIntl } from "react-intl"
import CarouselItem from "../experiences/carousel-item"
import "./experience.css"

function Experience({
  intl,
  index,
  experience,
}: {
  intl: InjectedIntl
  index: number
  experience: any
}) {
  const [showMore, setShowMore] = useState(true)
  const [showMoreText, setShowMoreText] = useState("experiences.see.more")

  return (
    <div
      className={
        index % 2 == 0 ? "experience-item even" : "experience-item odd"
      }
      key={index}
    >
      <div className="experience-background">
        <CarouselItem imagePrefix={experience.imagePrefix} />

        <div className="experience-item-title">
          {intl.formatMessage({ id: experience.title })}
        </div>
        <div
          className={
            showMore
              ? "experience-item-description show-more"
              : "experience-item-description"
          }
        >
          {intl.formatMessage({ id: experience.description })}
        </div>
        <div
          className="show-more-button"
          onClick={e => {
            setShowMore(!showMore)
            setShowMoreText(
              showMore ? "experiences.see.less" : "experiences.see.more"
            )
          }}
        >
          {intl.formatMessage({ id: showMoreText })}
        </div>
        <button className="experience-item-find-out">
          <a
            href="mailto:contactus@myvipexperience.com"
            target="_blank"
            rel="noopener"
          >
            {intl.formatMessage({ id: "experiences.more" })}
          </a>
        </button>
      </div>
    </div>
  )
}

export default injectIntl(Experience)
