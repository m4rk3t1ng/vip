import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
// @ts-ignore
import ArrowLeft from "../assets/left-arrow.svg"
// @ts-ignore
import ArrowRight from "../assets/right-arrow.svg"
import "./carousel-item.css"




function CarouselItem({imagePrefix}) {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { order: ASC, fields: [name]},
        filter: { relativePath: { regex: "" } }
      ) {
        edges {
          node {
            name
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
  
  const images = data.allFile.edges.filter(edge => edge.node.name.split('_')[0] === imagePrefix)
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft/>,
    nextArrow: <ArrowRight/>
  }
  return (
    <div>
      <Slider {...settings}>
      {images.map(({ node }) => (
          <div key={node.childImageSharp.fluid.src} style={{ maxHeight: `440px`}}>
            <Img fluid={node.childImageSharp.fluid} className="carouselImage"/>
          </div>
        ))}
      </Slider>
      {/* <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Img fluid />
          </div>
        ))}
      </Slider> */}
    </div>
  )
}



export default CarouselItem
