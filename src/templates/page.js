import React from "react"
import { graphql } from "gatsby"
import { motion } from 'framer-motion'
// import Img from 'gatsby-image'

import SEO from "../components/seo"
import Hero from "../components/hero"
import WhyChooseEffico from "../components/why-choose-effico"
import { HTMLContent } from "../components/content"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
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

      <SEO
        title={post.seo.title}
        description={post.seo.description}
      />

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative w-full"
      >

        <Hero heroMajor={post.heroMajor} heroMinor={post.heroMinor} heroIntro={post.heroIntro} heroImage={post.heroImage.fluid} />

      </motion.section>

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >

        <motion.div
          variants={item}
          transition="easeInOut"
          className="container flex flex-col lg:flex-row"
        >

          <div className="w-full p-8 -mt-8 bg-gray-100 shadow-lg lg:w-10/12 content md:p-16 lg:pr-32">

            <HTMLContent content={post.content} />

          </div>

          <div className="w-full mt-4 lg:w-6/12 lg:-mt-4 lg:-ml-20">

            <div className="bg-gray-200 shadow-lg">

              <WhyChooseEffico />

            </div>

          </div>


        </motion.div>

      </motion.section>
    </>
  )
}

export default ServicePage

export const query = graphql`
  query($slug: String!) {
    datoCmsPage(slug: {eq: $slug})  {
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
        fixed {
          ...GatsbyDatoCmsFixed
        }
      }
    }
  }
  
`