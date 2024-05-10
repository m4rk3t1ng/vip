import React from "react"
import styled from "@emotion/styled"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import colors from "../../utils/colors"

function Carousel() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { order: ASC, fields: [name]},
        filter: { relativePath: { regex: "/home/slides/slide/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90, maxWidth: 2560) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.edges
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <Container>
      <Slider {...settings}>
        {images.map(({ node }) => (
          <div key={node.childImageSharp.fluid.src}>
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        ))}
      </Slider>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: ${colors.primary};

  @media (min-width: 768px) {
    height: 100vh;
  }

  .slick-slider {
    width: 100%;
    height: 100%;

    .slick-list {
      width: 100%;
      height: 100%;
    }

    .slick-track {
      height: 100%;
    }

    .slick-slide {
      height: 100%;
      div {
        height: 100%;
      }
    }

    .slick-dots {
      bottom: 10px;
      button {
        width: 5px;
        padding: 0px
      }
      li {
        width: 5px;
      }
      button:before {
        width: 0px;
        height: 0px;
        color: ${colors.light};
      }
    }
  }
`

export default Carousel
