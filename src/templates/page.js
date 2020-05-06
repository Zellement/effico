import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
// import Img from 'gatsby-image'

import SEO from "../components/seo"
import Hero from "../components/hero"
import WhyChooseEffico from "../components/why-choose-effico"
import GalleryCarousel from "../components/gallery-carousel"
import { HTMLContent } from "../components/content"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const ServicePage = ({ data }) => {
  const post = data.datoCmsPage

  return (
    <>
      <SEO title={post.seo.title} description={post.seo.description} />

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >
        <motion.div
          variants={item}
          transition="easeInOut"
          className="relative w-full"
        >
          
          <Hero
            heroMajor={post.heroMajor}
            heroMinor={post.heroMinor}
            heroIntro={post.heroIntro}
            heroImage={post.heroImage.fluid}
          />

        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="container flex flex-col lg:flex-row"
        >
          
          <motion.div
            variants={item}
            transition="easeInOut"
            className="w-full p-8 -mt-8 bg-gray-100 shadow-lg lg:w-10/12 content md:p-16 lg:pr-32"
          >
            
            <HTMLContent content={post.content} />
            
          </motion.div>

          <motion.div
            variants={item}
            transition="easeInOut"
            className="w-full mt-4 lg:w-8/12 lg:-mt-4 lg:-ml-20"
          >

            <div className="mb-4 bg-gray-200 border-white border-solid shadow-lg border-10">
              <GalleryCarousel
                images={post.gallery}
              />
            </div>
            
            <div className="bg-gray-200 shadow-lg">
              <WhyChooseEffico />
            </div>
            
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default ServicePage

export const query = graphql`
  query($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
      seo {
        title
        description
        twitterCard
      }
      heroMajor
      heroMinor
      heroIntro
      heroImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      content
      gallery {
        url
        fluid(imgixParams: {w: "800", h: "520", fit: "crop", crop: "edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
